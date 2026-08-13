import { Target, Eye, Shield, Sparkle, Users2 } from 'lucide-react';

export const metadata = {
  title: 'Tentang Kami | Himpunan Mahasiswa',
};

const MISI_LIST = [
  'Membangun ruang partisipasi aktif mahasiswa dalam kegiatan akademik dan non-akademik.',
  'Mengembangkan potensi anggota melalui pelatihan, kajian, dan program kerja yang relevan.',
  'Menjadi jembatan komunikasi antara mahasiswa dengan pihak program studi dan fakultas.',
  'Mendorong kolaborasi lintas divisi dan lintas angkatan yang solid dan inklusif.',
];

const LOGO_PHILOSOPHY = [
  {
    icon: Shield,
    title: 'Perisai',
    desc: 'Melambangkan perlindungan dan keberanian mahasiswa dalam menyuarakan aspirasi.',
  },
  {
    icon: Sparkle,
    title: 'Bintang',
    desc: 'Merepresentasikan cita-cita tinggi dan semangat untuk terus bersinar dan berprestasi.',
  },
  {
    icon: Users2,
    title: 'Lingkaran Terhubung',
    desc: 'Simbol kebersamaan, kekeluargaan, dan solidaritas antar anggota himpunan.',
  },
];

export default function TentangPage() {
  return (
    <div>
      {/* HEADER */}
      <section className="bg-[#0F172A] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Tentang Kami
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Mengenal Lebih Dekat Himpunan Mahasiswa
          </h1>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
          Sejarah & Latar Belakang
        </span>
        <h2 className="mt-2 text-2xl font-bold text-[#0F172A] sm:text-3xl">Perjalanan Kami</h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          <p>
            Himpunan Mahasiswa didirikan sebagai wadah resmi bagi seluruh mahasiswa program studi
            untuk berorganisasi, berkolaborasi, dan mengembangkan diri di luar kegiatan
            perkuliahan formal. Sejak awal berdiri, himpunan berkomitmen menjadi jembatan antara
            kebutuhan mahasiswa dengan kebijakan program studi maupun fakultas.
          </p>
          <p>
            Dari tahun ke tahun, himpunan terus bertransformasi mengikuti kebutuhan zaman —
            mulai dari kegiatan diskusi ilmiah sederhana, hingga kini menjelma menjadi organisasi
            dengan berbagai divisi yang menjalankan program kerja terstruktur, mulai dari bidang
            akademik, kreativitas, hingga hubungan masyarakat.
          </p>
          <p>
            Kami percaya bahwa organisasi mahasiswa bukan hanya soal struktur dan kegiatan, tetapi
            juga tentang membangun karakter, jejaring, dan pengalaman berharga yang akan berguna
            bagi setiap anggotanya di masa depan.
          </p>
        </div>
      </section>

      {/* VISI MISI */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
              Arah & Tujuan
            </span>
            <h2 className="mt-2 text-2xl font-bold text-[#0F172A] sm:text-3xl">Visi & Misi</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Visi Card */}
            <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-[#0F172A] p-3">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#0F172A]">Visi</h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Menjadi organisasi mahasiswa yang unggul, kolaboratif, dan berdampak nyata dalam
                membentuk generasi yang aktif, kritis, dan berintegritas.
              </p>
            </div>

            {/* Misi Card */}
            <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-[#0F172A] p-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-lg font-bold text-[#0F172A]">Misi</h3>
              <ul className="space-y-3">
                {MISI_LIST.map((misi, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E3A8A]" />
                    {misi}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFI LOGO */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
            Identitas Visual
          </span>
          <h2 className="mt-2 text-2xl font-bold text-[#0F172A] sm:text-3xl">
            Filosofi & Arti Logo Himpunan
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500 sm:text-base">
            Setiap elemen dalam logo himpunan memiliki makna yang merepresentasikan nilai dan
            semangat organisasi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {LOGO_PHILOSOPHY.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex rounded-full bg-[#1E3A8A]/10 p-4">
                  <Icon className="h-6 w-6 text-[#1E3A8A]" />
                </div>
                <h3 className="mb-2 text-base font-bold text-[#0F172A]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
