import { useState } from 'react';
import {
  Download,
  ShieldCheck,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import SEO from '../components/SEO';
import CertModal from '../components/CertModal';
import { certifications } from '../data/portfolio';
import type { Certificate } from '../data/portfolio';

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<'all' | 'programming' | 'database'>('all');

  const filteredCerts = certifications.filter((c) =>
    filter === 'all' ? true : c.category === filter
  );

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Certifications & Credentials | Yogita Sharma"
        description="Verified technical certifications achieved by Yogita Sharma from Oracle, Infosys, and HackerRank in Python, Java, DBMS, and C++."
      />

      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="section-badge mb-3">Verified Qualifications</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Certifications & Professional Credentials
        </h1>
        <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
          Industry assessments and enterprise credentials validating expertise in database engineering, algorithmic problem solving, and modern programming languages.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {(['all', 'programming', 'database'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all capitalize ${
              filter === cat
                ? 'bg-primary-500/20 text-white border border-primary-500/40 shadow-lg shadow-primary-500/10'
                : 'bg-white/[0.03] text-surface-200/60 hover:text-white border border-white/[0.05]'
            }`}
          >
            {cat === 'all' ? 'All Certificates' : cat}
          </button>
        ))}
      </div>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="glass-card glass-card-hover p-6 border border-white/[0.08] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center text-accent-emerald">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[11px] font-mono text-surface-200/50">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
              <p className="text-xs text-primary-400 font-medium mb-3">
                Issued by {cert.organization}
              </p>
              <p className="text-xs text-surface-200/70 leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <span className="tag text-[10px]">{cert.technology}</span>
                <span className="tag text-[10px] text-accent-emerald border-accent-emerald/20 bg-accent-emerald/5">
                  Verified
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
              <button
                onClick={() => setSelectedCert(cert)}
                className="text-xs text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1.5"
              >
                <FileText size={14} />
                <span>View Certificate Details</span>
              </button>

              {cert.localPdf && (
                <a
                  href={cert.localPdf}
                  download
                  className="p-1.5 rounded-lg text-surface-200/50 hover:text-white hover:bg-white/5 transition-colors"
                  title="Download Certificate PDF"
                  aria-label={`Download ${cert.name} certificate`}
                >
                  <Download size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Notice on Authenticity */}
      <div className="glass-card p-6 border border-white/[0.06] bg-[#070a14] max-w-3xl mx-auto text-center text-xs text-surface-200/60 font-mono">
        <div className="flex items-center justify-center gap-2 text-accent-emerald mb-1">
          <CheckCircle2 size={15} />
          <span className="font-bold">Credential Authenticity Guarantee</span>
        </div>
        <p>
          All certificates listed have been verified against university academic portals, Infosys Springboard, Oracle University, and HackerRank records. Original PDF records are attached where digitized.
        </p>
      </div>

      {/* Modal Viewer */}
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}
