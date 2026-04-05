import { motion } from 'framer-motion';
import heroImage from '../../assets/images/image2.png'; 

export default function StorySection() {
  return (
    <section className="py-16 bg-wedding-white">
      <div className="w-full px-5">
        {/* Image - Full width within container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[50vh] relative rounded-sm overflow-hidden mb-10"
        >
           <motion.img 
             src={heroImage} 
             alt="Kisah Kami" 
             loading="lazy" 
             initial={{ filter: 'grayscale(100%)', scale: 1.05 }}
             whileInView={{ filter: 'grayscale(0%)', scale: 1 }}
             viewport={{ once: true, margin: "-80px" }}
             transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
             className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" 
           />
           <div className="absolute inset-0 border border-wedding-white/20 m-3 pointer-events-none mix-blend-overlay"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-gray/50 mb-3 block">Perjalanan</span>
          <h2 className="font-heading text-3xl text-wedding-gray mb-4">Kisah Kami</h2>
          <div className="w-10 h-[1px] bg-wedding-blue mb-8"></div>
          
          <p className="text-wedding-gray-light leading-relaxed text-balance text-sm tracking-wide font-light mb-4">
            Perjalanan kami dimulai dari sebuah pertemuan sederhana di tengah kota. Waktu demi waktu berlalu, kami merajut mimpi dan menyatukan visi.
          </p>
          <p className="text-wedding-gray-light leading-relaxed text-balance text-sm tracking-wide font-light">
             Hingga akhirnya memutuskan untuk melangkah bersama dalam ikatan pernikahan yang suci. Setiap detik menjadi bermakna.
          </p>
          
          <div className="mt-8 opacity-50 font-heading text-2xl italic text-wedding-gray">R & S</div>
        </motion.div>
      </div>
    </section>
  );
}
