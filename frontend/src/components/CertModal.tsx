import { X, ExternalLink, Download, FileCheck, ShieldCheck } from 'lucide-react';
import type { Certificate } from '../data/portfolio';

interface CertModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export default function CertModal({ cert, onClose }: CertModalProps) {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass-card max-w-2xl w-full p-6 border border-white/10 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-surface-200/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 rounded-md bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20">
            <ShieldCheck size={16} />
          </span>
          <span className="text-xs uppercase font-mono tracking-wider text-accent-emerald font-semibold">
            Verified Credential
          </span>
        </div>

        <h3 className="text-2xl font-bold text-surface-100 mb-1">{cert.name}</h3>
        <p className="text-primary-400 font-medium text-sm mb-4">
          Issued by {cert.organization} • {cert.date}
        </p>

        <p className="text-surface-200/70 text-sm leading-relaxed mb-6">
          {cert.description}
        </p>

        <div className="bg-[#0b0e18] p-4 rounded-xl border border-white/[0.06] mb-6 space-y-2 text-xs font-mono">
          <div className="flex justify-between">
            <span className="text-surface-200/40">Credential Topic:</span>
            <span className="text-surface-200/80">{cert.technology}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-200/40">Authority:</span>
            <span className="text-surface-200/80">{cert.organization}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-surface-200/40">Verification Status:</span>
            <span className="text-accent-emerald flex items-center gap-1">
              <FileCheck size={13} /> Verified Authentic
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-white/[0.06]">
          {cert.localPdf ? (
            <>
              <a
                href={cert.localPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                <ExternalLink size={14} /> Open in New Tab
              </a>
              <a
                href={cert.localPdf}
                download
                className="btn-primary text-xs"
              >
                <Download size={14} /> Download Certificate PDF
              </a>
            </>
          ) : (
            <span className="text-xs text-surface-200/50 italic mr-auto">
              Original physical certificate verified; digital PDF archive available upon recruiter request.
            </span>
          )}
          <button onClick={onClose} className="btn-outline text-xs">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
