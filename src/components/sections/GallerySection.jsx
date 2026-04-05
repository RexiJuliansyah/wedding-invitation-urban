import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { weddingData } from '../../config/weddingData';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = weddingData.gallery;

  return (
    <section id="gallery" className="w-full py-16 bg-wedding-white relative">
      <div className="w-full px-5 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-gray/50 mb-3 block">Momen Indah</span>
          <h2 className="text-3xl font-heading text-wedding-gray">Galeri Kami</h2>
        </motion.div>

        {/* 2-column masonry for mobile container */}
        <div className="columns-2 gap-2 space-y-2">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="w-full overflow-hidden rounded-sm group relative bg-wedding-gray break-inside-avoid block cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-wedding-gray/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-wedding-gray/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 p-2 text-wedding-white/70 hover:text-wedding-white transition-colors z-10">
              <X className="w-7 h-7" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm cursor-default"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
