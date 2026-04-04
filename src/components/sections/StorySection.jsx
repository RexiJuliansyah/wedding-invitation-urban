import { motion } from 'framer-motion';
import heroImage from '../../assets/images/image2.png'; 

export default function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-wedding-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Framed Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[60vh] md:h-[80vh] relative rounded-sm overflow-hidden"
          >
             <motion.img 
               src={heroImage} 
               alt="Kisah Kami" 
               loading="lazy" 
               initial={{ filter: 'grayscale(100%)', scale: 1.05 }}
               whileInView={{ filter: 'grayscale(0%)', scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 2.5, delay: 0.4, ease: "easeOut" }}
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" 
             />
             <div className="absolute inset-0 border border-wedding-white/20 m-4 pointer-events-none mix-blend-overlay"></div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-wedding-gray/50 mb-4 block">Perjalanan</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl text-wedding-gray mb-6">Kisah<br/>Kami</h2>
            <div className="w-12 h-[1px] bg-wedding-blue mb-10"></div>
            
            <p className="text-wedding-gray-light leading-relaxed text-balance text-lg tracking-wide font-light mb-6">
              Perjalanan kami dimulai dari sebuah pertemuan sederhana di tengah kota. Waktu demi waktu berlalu, kami merajut mimpi dan menyatukan visi.
            </p>
            <p className="text-wedding-gray-light leading-relaxed text-balance text-lg tracking-wide font-light">
               Hingga akhirnya memutuskan untuk melangkah bersama dalam ikatan pernikahan yang suci. Setiap detik menjadi bermakna.
            </p>
            
            <div className="mt-12 opacity-50 font-heading text-3xl italic text-wedding-gray">R & S</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
