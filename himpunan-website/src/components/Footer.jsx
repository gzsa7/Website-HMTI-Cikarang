import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const QUICK_LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/struktur', label: 'Struktur Organisasi' },
  { href: '/proker', label: 'Program Kerja' },
  { href: '/aspirasi', label: 'Forum Aspirasi' },
  { href: '/oprec', label: 'Open Recruitment' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Kolom 1: Profil */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white/10">
                <Image
                  src="/logo-himpunan.png"
                  alt="Logo Himpunan"
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>
              <span className="text-base font-bold text-white">Himpunan Mahasiswa</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Wadah aspirasi, kolaborasi, dan pengembangan diri mahasiswa untuk mewujudkan
              generasi yang aktif, kritis, dan berdampak.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Kontak Kami
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                <span>Gedung Fakultas, Jl. Pendidikan No. 1, Kampus Universitas, Kota, 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-slate-500" />
                <a href="mailto:himpunan@kampus.ac.id" className="transition-colors hover:text-white">
                  himpunan@kampus.ac.id
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-slate-500" />
                <a href="tel:+6281234567890" className="transition-colors hover:text-white">
                  +62 812-3456-7890
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <a
                href="https://instagram.com/himpunan.mahasiswa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
                aria-label="Instagram Himpunan"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
          &copy; {year} Himpunan Mahasiswa. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
