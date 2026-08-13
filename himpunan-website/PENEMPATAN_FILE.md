# PANDUAN LENGKAP — SEMUA FILE TAHAP 1 s/d 6

Struktur di bawah ini adalah lokasi FINAL setiap file di dalam project Next.js
`himpunan-website/` yang kamu buat di Tahap 1. Semua path relatif terhadap root project.

```
himpunan-website/                          <-- root project (hasil create-next-app)
│
├── .env.local                             <-- kamu buat sendiri, isi dari .env.local.example
├── .env.local.example                     <-- [TAHAP 1] contoh isi env var
├── SETUP.md                                <-- [TAHAP 1] panduan CLI setup awal
├── TAHAP6_SETUP.md                         <-- [TAHAP 6] panduan setup tambahan admin
│
├── sql/
│   └── schema.sql                          <-- [TAHAP 1] jalankan di Supabase SQL Editor
│
├── public/
│   ├── logo-kampus.png                     <-- kamu upload sendiri (asset)
│   ├── logo-himpunan.png                   <-- kamu upload sendiri (asset)
│   └── ketua-himpunan.jpg                  <-- kamu upload sendiri (asset)
│
└── src/
    ├── lib/
    │   ├── supabaseClient.js               <-- [TAHAP 1] client publik (anon key)
    │   └── supabaseAdmin.js                <-- [TAHAP 6] client admin (service role key, SERVER ONLY)
    │
    ├── components/
    │   ├── Navbar.jsx                      <-- [TAHAP 2]
    │   ├── Footer.jsx                      <-- [TAHAP 2]
    │   ├── OprecPDFDocument.jsx             <-- [TAHAP 5] komponen PDF react-pdf
    │   └── admin/
    │       ├── LoginForm.jsx               <-- [TAHAP 6]
    │       └── InterviewModal.jsx          <-- [TAHAP 6]
    │
    └── app/
        ├── layout.jsx                      <-- [TAHAP 2] root layout (pasang Navbar & Footer)
        ├── page.jsx                        <-- [TAHAP 3] Beranda (/)
        │
        ├── tentang/
        │   └── page.jsx                    <-- [TAHAP 3] /tentang
        │
        ├── struktur/
        │   └── page.jsx                    <-- [TAHAP 3] /struktur
        │
        ├── proker/
        │   ├── page.jsx                    <-- [TAHAP 4] /proker (katalog)
        │   └── [id]/
        │       └── page.jsx                <-- [TAHAP 4] /proker/[id] (detail)
        │
        ├── aspirasi/
        │   └── page.jsx                    <-- [TAHAP 4] /aspirasi
        │
        ├── oprec/
        │   └── page.jsx                    <-- [TAHAP 5] /oprec
        │
        ├── admin/
        │   └── page.jsx                    <-- [TAHAP 6] /admin (dashboard)
        │
        └── api/
            └── admin/
                ├── login/route.js          <-- [TAHAP 6] POST /api/admin/login
                ├── settings/route.js       <-- [TAHAP 6] GET/PATCH /api/admin/settings
                ├── applicants/route.js     <-- [TAHAP 6] GET/PATCH /api/admin/applicants
                ├── convert-officer/route.js<-- [TAHAP 6] POST /api/admin/convert-officer
                ├── officers/route.js       <-- [TAHAP 6] GET/POST /api/admin/officers
                ├── projects/route.js       <-- [TAHAP 6] GET/POST /api/admin/projects
                ├── aspirations/route.js    <-- [TAHAP 6] GET /api/admin/aspirations
                └── upload/route.js         <-- [TAHAP 6] POST /api/admin/upload
```

---

## Urutan Setup dari Nol

1. **Tahap 1** — Ikuti `SETUP.md` untuk `create-next-app`, install semua dependency, install Shadcn UI.
   Copy `src/lib/supabaseClient.js`. Jalankan `sql/schema.sql` di Supabase SQL Editor.
   Buat `.env.local` dari `.env.local.example`, isi `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

2. **Tahap 2** — Copy `Navbar.jsx` & `Footer.jsx` ke `src/components/`. Copy/replace `layout.jsx` ke `src/app/`.
   Siapkan `public/logo-kampus.png` & `public/logo-himpunan.png` (boleh placeholder dulu).

3. **Tahap 3** — Copy `page.jsx` (Beranda) ke `src/app/`. Copy `tentang/page.jsx` & `struktur/page.jsx`
   ke folder masing-masing di `src/app/`. Siapkan `public/ketua-himpunan.jpg`.

4. **Tahap 4** — Copy `proker/page.jsx`, `proker/[id]/page.jsx`, dan `aspirasi/page.jsx` ke `src/app/`.

5. **Tahap 5** — Copy `oprec/page.jsx` ke `src/app/`. Copy `OprecPDFDocument.jsx` ke `src/components/`.

6. **Tahap 6** — Ikuti `TAHAP6_SETUP.md`: `npm install bcryptjs`, tambahkan `SUPABASE_SERVICE_ROLE_KEY`
   ke `.env.local`, buat bucket Storage `himpunan-media` (public), generate password hash & insert admin
   pertama ke tabel `users`. Copy `supabaseAdmin.js` ke `src/lib/`. Copy `admin/page.jsx` ke `src/app/`.
   Copy `LoginForm.jsx` & `InterviewModal.jsx` ke `src/components/admin/`. Copy seluruh isi folder
   `api/admin/` (8 route.js) ke `src/app/api/admin/` sesuai sub-foldernya masing-masing.

7. Jalankan `npm run dev`, buka `http://localhost:3000`, dan uji tiap alur (lihat bagian "Jalankan & Uji"
   di `TAHAP6_SETUP.md`).

---

## Catatan Penting

- File `.env.local` **tidak disertakan isinya secara nyata** — kamu isi sendiri dengan kredensial
  Supabase project kamu, dan **jangan pernah commit file ini ke Git**.
- 3 file gambar di `public/` (`logo-kampus.png`, `logo-himpunan.png`, `ketua-himpunan.jpg`) bukan
  dibuat oleh saya — itu adalah placeholder yang harus kamu siapkan sendiri agar halaman tidak
  menampilkan gambar rusak (broken image).
- Semua file di dalam `src/app/api/admin/` hanya berjalan di server (Next.js Route Handler),
  jadi tidak perlu `'use client'`.
