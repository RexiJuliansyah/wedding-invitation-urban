import { motion } from 'framer-motion';
import { weddingData } from '../../config/weddingData';

export default function WishesSection() {
  return (
    <section id="wishes" className="w-full py-16 bg-wedding-white border-t border-wedding-gray/5">
      <div className="w-full px-5 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-8"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-gray/50 mb-3 block">Buku Tamu</span>
          <h2 className="text-3xl font-heading text-wedding-gray">Doa & Ucapan</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-h-[400px] overflow-y-auto pr-1 space-y-3 text-left">
            {weddingData.wishes.map((wish, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-wedding-white-soft/50 p-5 border border-wedding-gray/5 shadow-sm rounded-sm hover:-translate-y-0.5 transition-transform"
              >
                <h4 className="font-heading text-base font-bold text-wedding-gray mb-1">{wish.name}</h4>
                <p className="font-light text-xs text-wedding-gray/80 leading-relaxed italic">"{wish.text}"</p>
              </motion.div>
            ))}
            <div className="text-center py-3 mt-4">
              <span className="text-[10px] tracking-widest uppercase text-wedding-gray/40">Akhir ucapan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
