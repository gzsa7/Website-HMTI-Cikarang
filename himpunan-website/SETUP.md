# TAHAP 1 — Setup Project Website Himpunan Mahasiswa

## 1. Buat Project Next.js Baru

```bash
npx create-next-app@latest himpunan-website
```

Saat prompt muncul, jawab seperti ini:
- Would you like to use TypeScript? → **No**
- Would you like to use ESLint? → **Yes**
- Would you like to use Tailwind CSS? → **Yes**
- Would you like to use `src/` directory? → **Yes**
- Would you like to use App Router? → **Yes**
- Would you like to customize the default import alias? → **No**

```bash
cd himpunan-website
```

## 2. Install Shadcn UI

```bash
npx shadcn@latest init
```

Pilih opsi default (Style: Default, Base color: Slate, CSS variables: Yes).

Install beberapa komponen dasar yang akan sering dipakai di tahap-tahap berikutnya:

```bash
npx shadcn@latest add button card input label textarea select switch table dialog badge dropdown-menu toast tabs
```

## 3. Install Dependencies Tambahan

```bash
npm install @supabase/supabase-js @react-pdf/renderer lucide-react qrcode.react date-fns
npm install papaparse
```

Penjelasan package:
- `@supabase/supabase-js` → koneksi ke database & storage Supabase
- `@react-pdf/renderer` → generator PDF kartu bukti pendaftaran
- `lucide-react` → icon set
- `qrcode.react` → generate QR Code di dalam PDF/halaman
- `date-fns` → format tanggal untuk jadwal interview
- `papaparse` → export data pendaftar ke CSV di Admin Dashboard

## 4. Setup Environment Variables

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> Ambil URL dan Anon Key dari Supabase Dashboard → Project Settings → API.
> Jangan commit file `.env.local` ke Git (sudah otomatis di-ignore oleh `.gitignore` bawaan Next.js).

## 5. Jalankan SQL Schema

Buka **Supabase Dashboard → SQL Editor → New Query**, lalu copy-paste isi file `sql/schema.sql` (ada di project ini), lalu klik **Run**.

## 6. Jalankan Development Server

```bash
npm run dev
```

Buka `http://localhost:3000`.

---

Lanjut ke **TAHAP 2**: Global Layout (Navbar & Footer) setelah setup ini selesai kamu jalankan.
