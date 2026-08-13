import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Target, FileText, Tag, ImageOff } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

// Fallback dummy data (dipakai jika Supabase belum terkoneksi/kosong)
const FALLBACK_PROJECTS = {
  'dummy-1': {
    id: 'dummy-1',
    title: 'Seminar Nasional Kepemimpinan',
    division_name: 'Acara & Kegiatan',
    background:
      'Kegiatan ini dilatarbelakangi oleh kebutuhan mahasiswa akan wawasan kepemimpinan yang aplikatif, mengingat banyak mahasiswa yang akan memasuki dunia kerja maupun organisasi setelah lulus.',
    achievements:
      'Dihadiri lebih dari 300 peserta dari berbagai program studi, menghadirkan 3 pembicara nasional, dan menghasilkan modul kepemimpinan yang kini digunakan sebagai bahan pelatihan internal.',
    photos_urls: [],
  },
  'dummy-2': {
    id: 'dummy-2',
    title: 'Pelatihan Desain & Media Kreatif',
    division_name: 'Media & Informasi',
    background:
      'Berangkat dari kebutuhan konten visual himpunan yang semakin tinggi, divisi Media & Informasi menginisiasi pelatihan desain grafis dan videografi bagi anggota baru.',
    achievements:
      'Melahirkan 15 desainer internal baru dan meningkatkan engagement media sosial himpunan hingga 40% dalam satu semester.',
    photos_urls: [],
  },
  'dummy-3': {
    id: 'dummy-3',
    title: 'Riset Kepuasan Mahasiswa',
    division_name: 'Penelitian & Pengembangan',
    background:
      'Survei rutin dilakukan untuk memetakan kepuasan mahasiswa terhadap layanan akademik, fasilitas, dan program studi sebagai bahan advokasi ke pihak kampus.',
    achievements:
      'Hasil riset berhasil ditindaklanjuti oleh pihak program studi dalam bentuk perbaikan jadwal bimbingan akademik.',
    photos_urls: [],
  },
  'dummy-4': {
    id: 'dummy-4',
    title: 'Bakti Sosial Peduli Sesama',
    division_name: 'Hubungan Masyarakat',
    background:
      'Sebagai bentuk kepedulian sosial, himpunan rutin mengadakan kegiatan bakti sosial ke panti asuhan dan masyarakat sekitar kampus.',
    achievements:
      'Berhasil menggalang donasi dari lebih dari 200 mahasiswa dan menyalurkan bantuan ke 3 panti asuhan di sekitar kampus.',
    photos_urls: [],
  },
};

async function getProject(id) {
  const { data, error } = await supabase
    .from('projects')
    .select('id, title, background, achievements, photos_urls, division_id, divisions(name)')
    .eq('id', id)
    .single();

  if (error || !data) {
    return FALLBACK_PROJECTS[id] || null;
  }

  return {
    id: data.id,
    title: data.title,
    background: data.background,
    achievements: data.achievements,
    photos_urls: data.photos_urls || [],
    division_name: data.divisions?.name || 'Umum',
  };
}

export default async function ProkerDetailPage({ params }) {
  const { id } = await params;
  const proker = await getProject(id);

  if (!proker) notFound();

  return (
    <div>
      {/* HEADER */}
      <section className="bg-[#0F172A] py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/proker"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Katalog Proker
          </Link>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
            <Tag className="h-3 w-3" />
            {proker.division_name}
          </span>
          <h1 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            {proker.title}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Latar Belakang */}
        <div className="mb-10 rounded-xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#1E3A8A]/10 p-2.5">
              <FileText className="h-5 w-5 text-[#1E3A8A]" />
            </div>
            <h2 className="text-lg font-bold text-[#0F172A]">Latar Belakang Kegiatan</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{proker.background}</p>
        </div>

        {/* Capaian */}
        <div className="mb-10 rounded-xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#1E3A8A]/10 p-2.5">
              <Target className="h-5 w-5 text-[#1E3A8A]" />
            </div>
            <h2 className="text-lg font-bold text-[#0F172A]">Capaian & Output</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{proker.achievements}</p>
        </div>

        {/* Galeri Foto */}
        <div>
          <h2 className="mb-5 text-lg font-bold text-[#0F172A]">Galeri Dokumentasi</h2>
          {proker.photos_urls && proker.photos_urls.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {proker.photos_urls.map((url, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square overflow-hidden rounded-xl bg-slate-100 shadow-sm"
                >
                  <Image
                    src={url}
                    alt={`Dokumentasi ${proker.title} ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 300px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 py-14 text-center">
              <ImageOff className="mb-3 h-8 w-8 text-slate-300" />
              <p className="text-sm text-slate-400">Galeri foto belum tersedia untuk proker ini.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
