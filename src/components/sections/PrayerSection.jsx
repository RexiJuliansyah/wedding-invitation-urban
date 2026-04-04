import { motion } from 'framer-motion';

export default function PrayerSection() {
  return (
    <section id="prayer" className="w-full py-24 px-6 bg-wedding-white flex justify-center items-center">
      <div className="max-w-2xl mx-auto text-center border-y border-wedding-gray/10 py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl font-heading text-wedding-gray/80 mb-8 italic">Maha Suci Allah</h2>
          <p className="font-body font-light text-wedding-gray leading-relaxed text-sm md:text-base mb-6 text-balance italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
          </p>
          <p className="font-heading font-medium text-wedding-blue-dark text-lg uppercase tracking-widest text-xs">
            QS. Ar-Rum: 21
          </p>
        </motion.div>
      </div>
    </section>
  );
}
