# Advokátní kancelář JUDr. Vladimír Tögel – web (React + Vite + Tailwind)

## Lokální spuštění
```bash
npm install
npm run dev
```
Otevřete http://localhost:3000

## Nasazení na Vercel
1. Přihlaste se na https://vercel.com (Google/GitHub).
2. Klikněte **Add New Project → Import** a nahrajte tento projekt (ZIP nebo Git).
3. Build command: `npm run build` (Vercel si doplní automaticky)
4. Output directory: `dist` (Vercel detekuje z Vite)
5. Deploy → získáte veřejný odkaz ve tvaru `https://…vercel.app`

## Poznámky
- Barva značky je nastavena na #9a6185.
- Jazykový přepínač CZ/EN si pamatuje volbu v `localStorage`.
- Kontaktní formulář je demo (odesílá do konzole). Lze snadno připojit na e‑mail/API.
