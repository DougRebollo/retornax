// ── RETORNAX — CONFIGURAÇÃO SUPABASE ──
const SUPABASE_URL = 'https://gfxbspigzmeajhxzsshv.supabase.co'
const SUPABASE_KEY = 'sb_publishable_haLhJCkos-6Acdd04kJTQQ_pBxAMdno'

// Usar var para evitar conflito de redeclaração entre páginas
var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
