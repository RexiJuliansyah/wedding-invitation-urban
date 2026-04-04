import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingData } from '../../config/weddingData';

import groomImage from '../../assets/images/cpp.png';
import brideImage from '../../assets/images/cpw.png';

export default function CoupleSection() {
  const { groom, bride } = weddingData.couple;

  return (
    <section id="couple" className="w-full py-24 bg-wedding-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-gray/50 mb-4 block">Mempelai</span>
          <h2 className="text-4xl md:text-5xl font-heading text-wedding-gray">Rama & Shinta</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center relative">
          
          {/* Decorative Divider Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-wedding-gray/10 -translate-x-1/2"></div>
          
          {/* Heart Icon for Desktop */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-wedding-white z-10 text-wedding-gray shadow-sm">
            <Heart className="w-4 h-4 fill-wedding-gray/5" strokeWidth={1} />
          </div>

          {/* Groom */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center px-4 group"
          >
            <div className="w-full aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-sm relative shadow-md">
              <img src={groomImage} alt="Mempelai Pria" loading="lazy" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" />
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-heading text-wedding-gray mb-2">{groom.name}</h3>
              <p className="text-sm font-light text-wedding-gray/70 mb-4">Putra Pertama dari<br/>{groom.father} & {groom.mother}</p>
              <a href={`https://instagram.com/${groom.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-wedding-blue hover:text-wedding-blue-dark transition-colors inline-block">{groom.instagram}</a>
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center px-4 group"
          >
             <div className="w-full aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-sm relative shadow-md">
              <img src={brideImage} alt="Mempelai Wanita" loading="lazy" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" />
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-heading text-wedding-gray mb-2">{bride.name}</h3>
              <p className="text-sm font-light text-wedding-gray/70 mb-4">Putri Kedua dari<br/>{bride.father} & {bride.mother}</p>
              <a href={`https://instagram.com/${bride.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-wedding-blue hover:text-wedding-blue-dark transition-colors inline-block">{bride.instagram}</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
