// lib/editores-sheet.ts
// Añade cada registro de /editores a la Google Sheet "Editores LATAM · registro" en el momento del envío.
// Cuenta de servicio (no caduca, no depende de ningún Mac). Sin librerías: JWT RS256 con node:crypto.
// Env: GOOGLE_SA_JSON (clave de la cuenta de servicio), EDITORES_SHEET_ID. Si faltan, no hace nada.
import { createSign } from "node:crypto"

type Row = (string | number)[]

const b64 = (v: string | Buffer) => Buffer.from(v).toString("base64url")

async function accessToken(email: string, privateKey: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const head = b64(JSON.stringify({ alg: "RS256", typ: "JWT" }))
  const claim = b64(JSON.stringify({ iss: email, scope: "https://www.googleapis.com/auth/spreadsheets", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3000 }))
  const sig = createSign("RSA-SHA256").update(`${head}.${claim}`).sign(privateKey).toString("base64url")
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${head}.${claim}.${sig}` }),
    signal: AbortSignal.timeout(8000),
  })
  if (!r.ok) throw new Error(`token ${r.status}`)
  return (await r.json()).access_token as string
}

/** Añade una fila al final de la primera pestaña. RAW: nada se interpreta como fórmula (el nombre lo escribe el público). */
export async function appendEditorRow(row: Row): Promise<void> {
  const raw = process.env.GOOGLE_SA_JSON
  const sheetId = process.env.EDITORES_SHEET_ID
  if (!raw || !sheetId) return
  const sa = JSON.parse(raw) as { client_email: string; private_key: string }
  const token = await accessToken(sa.client_email, sa.private_key)
  const r = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ values: [row] }),
    signal: AbortSignal.timeout(8000),
  })
  if (!r.ok) throw new Error(`sheets ${r.status} ${(await r.text()).slice(0, 200)}`)
}
