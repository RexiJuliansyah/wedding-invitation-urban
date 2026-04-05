import { motion } from 'framer-motion';

export default function PrayerSection() {
  return (
    <section id="prayer" className="w-full py-16 px-5 bg-wedding-white flex justify-center items-center">
      <div className="w-full text-center border-y border-wedding-gray/10 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-12 h-[1px] bg-wedding-blue/50 mx-auto mb-6"
          />
          <h2 className="text-lg font-heading text-wedding-gray/80 mb-6 italic">Maha Suci Allah</h2>
          <p className="font-body font-light text-wedding-gray leading-relaxed text-sm mb-6 text-balance italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
          </p>
          <p className="font-heading font-medium text-wedding-blue-dark text-xs uppercase tracking-widest">
            QS. Ar-Rum: 21
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-12 h-[1px] bg-wedding-blue/50 mx-auto mt-6"
          />
        </motion.div>
      </div>
    </section>
  );
}
