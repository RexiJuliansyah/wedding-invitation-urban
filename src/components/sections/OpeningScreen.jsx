import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import heroImage from '../../assets/images/image5.png';

export default function OpeningScreen({ guestName, onOpen }) {
  return (
    <motion.div
      key="opening-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 1.2, ease: [0.83, 0, 0.39, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center overflow-hidden bg-wedding-gray"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Latar Belakang Pernikahan"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-wedding-gray/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-wedding-gray/90 via-wedding-gray/50 to-wedding-gray/80" />
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center p-8 max-w-md mx-auto"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-20 h-[1px] bg-wedding-white/40 mb-6"
        />
        
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-wedding-white/80 font-medium">The Wedding Of</p>
        <h1 className="font-heading text-5xl text-wedding-white mb-6 leading-tight drop-shadow-md">
          Rama <span className="text-wedding-white/70 italic font-light font-heading text-4xl mx-1">&amp;</span> Shinta
        </h1>

        <div className="my-6 mb-10">
          <p className="text-sm mb-2 text-wedding-white/80 font-light">Kepada Yth.</p>
          <h2 className="text-2xl font-heading text-wedding-white border-b border-wedding-white/50 inline-block pb-1 min-w-[200px]">
            {guestName || 'Tamu Undangan'}
          </h2>
        </div>

        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-wedding-blue text-wedding-white rounded-full overflow-hidden transition-all duration-300 shadow-lg border border-wedding-blue-light/30 hover:bg-wedding-blue-dark hover:shadow-xl"
        >
          <MailOpen className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-sm tracking-widest uppercase font-medium">Buka Undangan</span>
        </motion.button>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="w-20 h-[1px] bg-wedding-white/40 mt-10"
        />
      </motion.div>
    </motion.div>
  );
}
