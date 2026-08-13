'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Linkedin, Instagram, User } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

// Fallback dummy data jika Supabase belum terisi
const FALLBACK_OFFICERS = [
  {
    id: 'd1',
    full_name: 'Ahmad Fauzan',
    position: 'Ketua Umum',
    division_name: 'BPH',
    photo_url: null,
    linkedin_url: 'https://linkedin.com',
    instagram_url: 'https://instagram.com',
  },
  {
    id: 'd2',
    full_name: 'Siti Nurhaliza',
    position: 'Wakil Ketua',
    division_name: 'BPH',
    photo_url: null,
    linkedin_url: 'https://linkedin.com',
    instagram_url: 'https://instagram.com',
  },
  {
    id: 'd3',
    full_name: 'Budi Santoso',
    position: 'Kepala Divisi',
    division_name: 'Media & Informasi',
    photo_url: null,
    linkedin_url: 'https://linkedin.com',
    instagram_url: 'https://instagram.com',
  },
  {
    id: 'd4',
    full_name: 'Dewi Anggraini',
    position: 'Staff',
    division_name: 'Penelitian & Pengembangan',
    photo_url: null,
    linkedin_url: 'https://linkedin.com',
    instagram_url: 'https://instagram.com',
  },
  {
    id: 'd5',
    full_name: 'Rian Pratama',
    position: 'Kepala Divisi',
    division_name: 'Hubungan Masyarakat',
    photo_url: null,
    linkedin_url: 'https://linkedin.com',
    instagram_url: 'https://instagram.com',
  },
  {
    id: 'd6',
    full_name: 'Nadia Putri',
    position: 'Staff',
    division_name: 'Acara & Kegiatan',
    photo_url: null,
    linkedin_url: 'https://linkedin.com',
    instagram_url: 'https://instagram.com',
  },
];

export default function StrukturPage() {
  const [officers, setOfficers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Semua');

  useEffect(() => {
    async function fetchOfficers() {
      const { data, error } = await supabase
        .from('officers')
        .select('id, full_name, position, photo_url, linkedin_url, instagram_url, is_active, divisions(name)')
        .eq('is_active', true)
        .order('created_at', { ascending: true });

      if (error || !data || data.length === 0) {
        setOfficers(FALLBACK_OFFICERS);
      } else {
        setOfficers(
          data.map((o) => ({
            id: o.id,
            full_name: o.full_name,
            position: o.position,
            division_name: o.divisions?.name || 'BPH',
            photo_url: o.photo_url,
            linkedin_url: o.linkedin_url,
            instagram_url: o.instagram_url,
          }))
        );
      }
      setLoading(false);
    }

    fetchOfficers();
  }, []);

  const filterTabs = useMemo(() => {
    const unique = Array.from(new Set(officers.map((o) => o.division_name)));
    return ['Semua', ...unique];
  }, [officers]);

  const filteredOfficers = useMemo(() => {
    if (activeFilter === 'Semua') return officers;
    return officers.filter((o) => o.division_name === activeFilter);
  }, [officers, activeFilter]);

  return (
    <div>
      {/* HEADER */}
      <section className="bg-[#0F172A] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Struktur Organisasi
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Jajaran Pengurus Himpunan
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Kenali sosok-sosok di balik setiap program kerja dan kegiatan himpunan.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeFilter === tab
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* GRID PENGURUS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {loading ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="mx-auto mb-4 aspect-square w-full rounded-xl bg-slate-100" />
                <div className="mx-auto mb-2 h-3 w-3/4 rounded bg-slate-100" />
                <div className="mx-auto h-2.5 w-1/2 rounded bg-slate-100" />
              </div>
            ))}
          </div>
        ) : filteredOfficers.length === 0 ? (
          <p className="text-center text-sm text-slate-500">Belum ada data pengurus untuk divisi ini.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {filteredOfficers.map((officer) => (
              <div
                key={officer.id}
                className="group rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mx-auto mb-4 aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
                  {officer.photo_url ? (
                    <Image
                      src={officer.photo_url}
                      alt={officer.full_name}
                      fill
                      sizes="(max-width: 640px) 45vw, 200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E3A8A]">
                      <User className="h-10 w-10 text-white/50" />
                    </div>
                  )}
                </div>

                <h3 className="text-sm font-bold text-[#0F172A] sm:text-base">
                  {officer.full_name}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {officer.position}
                </p>
                <span className="mt-2 inline-block rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-[11px] font-semibold text-[#1E3A8A]">
                  {officer.division_name}
                </span>

                <div className="mt-4 flex items-center justify-center gap-2">
                  {officer.linkedin_url && (
                    <a
                      href={officer.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-[#0F172A] hover:text-white"
                      aria-label={`LinkedIn ${officer.full_name}`}
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {officer.instagram_url && (
                    <a
                      href={officer.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-[#0F172A] hover:text-white"
                      aria-label={`Instagram ${officer.full_name}`}
                    >
                      <Instagram className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
