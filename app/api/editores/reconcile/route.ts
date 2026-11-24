// app/api/editores/reconcile/route.ts
// Red de seguridad (Vercel Cron, a diario): compara los registros de Blob con la hoja y añade los que falten.
// Blob es la fuente de verdad: si Google falló en el momento del envío, aquí se recupera. Solo con CRON_SECRET.
import { list } from "@vercel/blob"
import { NextResponse } from "next/server"
import { appendEditorRow, rowFromRecord, sheetIds, type EditorRecord } from "@/lib/editores-sheet"

export const runtime = "nodejs"
export const maxDuration = 60

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) return new NextResponse("unauthorized", { status: 401 })

  const have = await sheetIds()
  const { blobs } = await list({ prefix: "editores/registros/", limit: 1000 })
  const records: EditorRecord[] = []
  for (const b of blobs) {
    try {
      const r = (await (await fetch(b.url)).json()) as EditorRecord
      if (r?.id && !have.has(r.id) && !r.nombre.startsWith("ZZ PRUEBA")) records.push(r)
    } catch {}
  }
  records.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
  let added = 0
  for (const r of records) {
    await appendEditorRow(rowFromRecord(r))
    added++
  }
  return NextResponse.json({ ok: true, blobs: blobs.length, added })
}
