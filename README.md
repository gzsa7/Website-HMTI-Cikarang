# Website-HMTI-Cikarang
# TAHAP 6 — Admin Dashboard: Setup Tambahan

## 1. Install Dependency Tambahan

```bash
npm install bcryptjs
```

## 2. Tambahkan Environment Variable Service Role Key

Buka **Supabase Dashboard → Project Settings → API**, salin **`service_role` key** (BUKAN anon key),
lalu tambahkan ke `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

> ⚠️ **PENTING:** `SUPABASE_SERVICE_ROLE_KEY` memiliki akses penuh ke database (bypass RLS).
> JANGAN pernah memberi prefix `NEXT_PUBLIC_` pada variable ini, dan jangan pernah
> mengimpornya dari komponen `'use client'`. Semua penggunaannya sudah dibatasi
> hanya di dalam folder `src/app/api/admin/*` (server-side Route Handlers).

## 3. Buat Bucket Storage di Supabase

Buka **Supabase Dashboard → Storage → Create a new bucket**:
- Nama bucket: `himpunan-media`
- Public bucket: **Yes** (centang, agar foto proker/pengurus bisa diakses publik)

## 4. Buat Akun Admin Pertama

Jalankan script berikut secara lokal untuk generate password hash (bcrypt), lalu insert manual ke Supabase:

```bash
node -e "console.log(require('bcryptjs').hashSync('password_kamu_di_sini', 10))"
```

Copy hasil hash yang muncul, lalu jalankan di **Supabase SQL Editor**:

```sql
INSERT INTO users (email, password_hash, role)
VALUES ('admin@himpunan.ac.id', 'PASTE_HASH_DI_SINI', 'admin');
```

Sekarang kamu bisa login ke `/admin` dengan email & password tersebut.

## 5. Ringkasan Arsitektur Keamanan

- Operasi **baca publik** (divisions, officers aktif, projects, settings) tetap lewat `anon key` + RLS policy (dari Tahap 1).
- Operasi **guest insert** (applicants, aspirations) tetap lewat `anon key` + RLS policy insert.
- Semua operasi **admin** (toggle status, update pendaftar, convert officer, CMS, upload foto, baca aspirasi)
  berjalan lewat **Route Handler** di `src/app/api/admin/*` yang memverifikasi sesi admin sederhana
  (`x-admin-email` header) lalu menggunakan `service_role key` di server untuk bypass RLS secara aman.
- Sesi admin disimpan sederhana di `localStorage` (`admin_session`). Ini cukup untuk skala organisasi
  mahasiswa, namun bukan pengganti auth production-grade (misal: Supabase Auth + JWT) jika ke depannya
  dibutuhkan keamanan lebih tinggi.

## 6. Jalankan & Uji

```bash
npm run dev
```

Buka `http://localhost:3000/admin`, login, lalu coba:
1. Toggle status Oprec → cek navbar publik langsung berubah (realtime).
2. Tambah pendaftar dummy lewat `/oprec`, lalu atur jadwal interview & ubah status di admin.
3. Klik "Jadikan Pengurus" pada pendaftar berstatus Lolos → cek muncul di `/struktur`.
4. Tambah Proker/Pengurus baru lewat tab CMS dengan upload foto.
5. Kirim aspirasi lewat `/aspirasi` → cek muncul di tab Inbox Aspirasi.
