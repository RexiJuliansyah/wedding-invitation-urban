import { motion } from 'framer-motion';

export default function ClosingSection() {
  return (
    <section className="w-full py-24 bg-wedding-gray text-wedding-white text-center flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-wedding-gray to-[#3A4E62]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 max-w-sm px-6"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-12 h-[1px] bg-wedding-white/30 mx-auto mb-8"
        />
        <p className="font-light text-wedding-white/80 mb-8 leading-relaxed text-sm italic">
          "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu."
        </p>
        <h2 className="text-4xl font-heading mb-6 font-medium">Terima Kasih</h2>
        <div className="w-10 h-[1px] bg-wedding-white/30 mx-auto mb-6"></div>
        <p className="text-[10px] tracking-[0.4em] uppercase text-wedding-white/60 mb-1.5">
          Kami yang berbahagia
        </p>
        <p className="text-base font-heading text-wedding-white">
          Rama & Shinta
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-12 h-[1px] bg-wedding-white/30 mx-auto mt-8"
        />
      </motion.div>
    </section>
  );
}
