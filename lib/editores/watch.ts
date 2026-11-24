// lib/editores/watch.ts
// Avisa al VPS (hooks.daniaceros.com/editores-watch) de que hay un registro nuevo. El VPS cuenta y, al llegar al
// objetivo, pausa la campaña de Meta de editores: el token de Meta vive SOLO allí. Firma HMAC-SHA256 con marca de tiempo.
// Best-effort: si falla, el cron del VPS (cada 10 min) hace la misma comprobación.
import { createHmac } from "node:crypto"

export async function notifyWatch(id: string): Promise<void> {
  const url = process.env.EDITORES_WATCH_URL
  const secret = process.env.EDITORES_WATCH_SECRET
  if (!url || !secret) return
  const body = JSON.stringify({ ts: Date.now(), id })
  const signature = createHmac("sha256", secret).update(body).digest("hex")
  await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", "x-signature": signature }, body, signal: AbortSignal.timeout(4000) })
}
