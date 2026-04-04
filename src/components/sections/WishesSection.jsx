import { motion } from 'framer-motion';
import { weddingData } from '../../config/weddingData';

export default function WishesSection() {
  return (
    <section id="wishes" className="w-full py-24 bg-wedding-white border-t border-wedding-gray/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-gray/50 mb-4 block">Buku Tamu</span>
          <h2 className="text-4xl md:text-5xl font-heading text-wedding-gray">Doa & Ucapan</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-h-[500px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-wedding-gray/10 hover:scrollbar-thumb-wedding-gray/30 text-left">
            {weddingData.wishes.map((wish, i) => (
              <div key={i} className="bg-wedding-white-soft/50 p-6 border border-wedding-gray/5 shadow-sm rounded-sm hover:-translate-y-0.5 transition-transform">
                <h4 className="font-heading text-lg font-bold text-wedding-gray mb-1">{wish.name}</h4>
                <p className="font-light text-sm text-wedding-gray/80 leading-relaxed italic">"{wish.text}"</p>
              </div>
            ))}
            <div className="text-center py-4 mt-6">
              <span className="text-xs tracking-widest uppercase text-wedding-gray/40">Akhir ucapan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
