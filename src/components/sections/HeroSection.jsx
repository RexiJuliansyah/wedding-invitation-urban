import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../../assets/images/image1.png';
import { weddingData } from '../../config/weddingData';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 100]);

  return (
    <section id="home" className="relative h-[100dvh] w-full flex items-end justify-center overflow-hidden bg-wedding-gray">
      {/* Background Image with subtle parallax & load zoom */}
      <motion.div
        style={{ y }}
        className="absolute inset-[-10%] z-0"
      >
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={heroImage}
          alt="Latar Belakang Pernikahan"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text legibility and cinematic grading */}
        <div className="absolute inset-0 bg-wedding-gray/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-wedding-gray/90 via-transparent to-wedding-gray/40" />
      </motion.div>

      <div className="relative z-10 text-center px-6 w-full flex flex-col items-center pb-20">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="h-[1px] bg-wedding-white/50 mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xs tracking-[0.3em] uppercase text-wedding-white/80 mb-5 font-medium"
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="font-heading text-5xl text-wedding-white mb-5 leading-tight drop-shadow-md text-balance"
        >
          Rama <span className="text-wedding-white/70 italic font-light font-heading text-4xl mx-1">&amp;</span> Shinta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-sm tracking-[0.2em] text-wedding-white/90 mb-10 font-medium"
        >
          {weddingData.event.formattedDate}
        </motion.p>

        <motion.a
          href={weddingData.event.calendarLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center justify-center px-8 py-3 bg-transparent border border-wedding-white/50 text-wedding-white rounded-full overflow-hidden transition-all duration-300 hover:bg-wedding-white hover:text-wedding-gray active:scale-95 shadow-lg backdrop-blur-sm"
        >
          <span className="text-xs tracking-[0.2em] uppercase font-medium">Save The Date</span>
        </motion.a>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="h-[1px] bg-wedding-white/50 mt-8"
        />
      </div>
    </section>
  );
}
