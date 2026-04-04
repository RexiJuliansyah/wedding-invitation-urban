import { motion } from 'framer-motion';

export default function ClosingSection() {
  return (
    <section className="w-full py-32 md:py-48 bg-wedding-gray text-wedding-white text-center flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-wedding-gray to-[#3A4E62]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 max-w-lg px-6"
      >
        <p className="font-light text-wedding-white/80 mb-8 leading-relaxed text-sm italic">
          "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu."
        </p>
        <h2 className="text-5xl md:text-6xl font-heading mb-8 font-medium">Terima Kasih</h2>
        <div className="w-12 h-[1px] bg-wedding-white/30 mx-auto mb-8"></div>
        <p className="text-xs tracking-[0.4em] uppercase text-wedding-white/60 mb-2">
          Kami yang berbahagia
        </p>
        <p className="text-lg font-heading text-wedding-white">
          Rama & Shinta
        </p>
      </motion.div>
    </section>
  );
}
