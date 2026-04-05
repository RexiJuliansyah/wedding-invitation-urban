import { motion } from 'framer-motion';
import letareLogo from '../../assets/images/letare-logo-gold.png';

export default function BrandedFooter() {
  return (
    <footer className="relative z-10 w-full overflow-hidden bg-wedding-gray">

      {/* Top divider — thin animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #7B95A6 25%, #A8B9C6 50%, #7B95A6 75%, transparent 100%)',
        }}
      />

      {/* Footer body */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center px-8 pt-10 pb-28"
      >
        {/* ── "Crafted by" label ── */}
        <p className="text-[10px] tracking-[0.25em] uppercase text-wedding-gray-lighter/70 font-body mb-6">
          Designed &amp; crafted by
        </p>

        {/* ── Logo card — frosted‑glass urban style ── */}
        <motion.div
          className="relative mb-6 rounded-2xl overflow-hidden group"
          style={{
            background: 'linear-gradient(160deg, rgba(248,249,250,0.08) 0%, rgba(123,149,166,0.12) 100%)',
            border: '1px solid rgba(168,185,198,0.2)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            padding: '22px 36px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[1.5px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #7B95A6, transparent)',
            }}
          />

          <motion.img
            src={letareLogo}
            alt="Letare Invitation"
            loading="lazy"
            className="w-[160px] h-auto object-contain mx-auto"
            style={{
              filter: 'drop-shadow(0 2px 12px rgba(184,134,11,0.3))',
            }}
          />

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[1.5px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(123,149,166,0.5), transparent)',
            }}
          />

          {/* Hover shimmer */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/[0.06] skew-x-12 pointer-events-none" />
        </motion.div>

        {/* ── Instagram CTA button ── */}
        <motion.a
          href="https://www.instagram.com/letareinvitation"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden group inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide text-[12px] rounded-full px-5 py-2.5 mb-5 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(123,149,166,0.2) 0%, rgba(74,107,140,0.3) 100%)',
            border: '1px solid rgba(168,185,198,0.25)',
            color: '#A8B9C6',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          }}
        >
          {/* Instagram icon (inline SVG to avoid external dependency) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          @letareinvitation
          {/* External link icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-60"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" x2="21" y1="14" y2="3" />
          </svg>

          {/* Hover shimmer */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/[0.08] skew-x-12 pointer-events-none" />
        </motion.a>

        {/* ── Tagline ── */}
        <p className="text-[11px] text-wedding-gray-lighter/50 font-body italic leading-relaxed max-w-[220px] mb-6">
          "Crafting timeless digital invitations for your special moments"
        </p>

        {/* ── Bottom decorative line ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-14 h-px mb-5"
          style={{
            background: 'linear-gradient(90deg, transparent, #7B95A6, transparent)',
          }}
        />

        {/* ── Copyright ── */}
        <p className="text-[9px] text-wedding-gray-lighter/40 font-body tracking-[0.2em] uppercase">
          © 2026 Letare Invitation · All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}
