import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingData } from '../../config/weddingData';

import groomImage from '../../assets/images/cpp.jpg';
import brideImage from '../../assets/images/cpw.jpg';

export default function CoupleSection() {
  const { groom, bride } = weddingData.couple;

  return (
    <section id="couple" className="w-full py-16 bg-wedding-white overflow-hidden relative">
      <div className="w-full px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-gray/50 mb-3 block">Mempelai</span>
          <h2 className="text-3xl font-heading text-wedding-gray">Rama & Shinta</h2>
        </motion.div>

        <div className="flex flex-col gap-10 items-center relative">

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center w-full group"
          >
            <div className="w-full aspect-[3/4] max-w-[280px] mx-auto overflow-hidden rounded-sm relative shadow-md">
              <motion.img
                src={groomImage}
                alt="Mempelai Pria"
                loading="lazy"
                initial={{ filter: 'grayscale(100%)', scale: 1.05 }}
                whileInView={{ filter: 'grayscale(0%)', scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-heading text-wedding-gray mb-1.5">{groom.name}</h3>
              <p className="text-xs font-light text-wedding-gray/70 mb-3">Putra Pertama dari<br />{groom.father} & {groom.mother}</p>
              <a href={`https://instagram.com/${groom.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-wedding-blue hover:text-wedding-blue-dark transition-colors inline-block">{groom.instagram}</a>
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col text-center w-full group"
          >
            <div className="w-full aspect-[3/4] max-w-[280px] mx-auto overflow-hidden rounded-sm relative shadow-md">
              <motion.img
                src={brideImage}
                alt="Mempelai Wanita"
                loading="lazy"
                initial={{ filter: 'grayscale(100%)', scale: 1.05 }}
                whileInView={{ filter: 'grayscale(0%)', scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-heading text-wedding-gray mb-1.5">{bride.name}</h3>
              <p className="text-xs font-light text-wedding-gray/70 mb-3">Putri Kedua dari<br />{bride.father} & {bride.mother}</p>
              <a href={`https://instagram.com/${bride.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-wedding-blue hover:text-wedding-blue-dark transition-colors inline-block">{bride.instagram}</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
