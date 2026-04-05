import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="events" className="w-full py-16 bg-wedding-gray text-wedding-white">
      <div className="w-full px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-white/50 mb-3 block">Rangkaian Acara</span>
          <h2 className="text-3xl font-heading text-wedding-white">Detail Acara</h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center p-8 bg-wedding-white/5 backdrop-blur-sm border border-wedding-white/10 rounded-sm"
          >
            <h3 className="text-2xl font-heading mb-5 tracking-wide text-wedding-white">Akad Nikah</h3>
            <div className="flex flex-col gap-3 mb-6 text-wedding-white/80 font-light text-sm">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-wedding-blue shrink-0" />
                <p>Sabtu, 14 Februari 2026</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-wedding-blue shrink-0" />
                <p>08:00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 mt-3 text-sm bg-wedding-white/5 p-4 rounded-sm border border-wedding-white/5">
                <MapPin className="w-4 h-4 text-wedding-blue mb-1 shrink-0" />
                <p className="font-medium text-wedding-white">Gedung Sate Bandung</p>
                <p className="opacity-80 text-xs">Jalan Diponegoro No.22, Bandung</p>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col items-center text-center p-8 bg-wedding-white/5 backdrop-blur-sm border border-wedding-white/10 rounded-sm"
          >
            <h3 className="text-2xl font-heading mb-5 tracking-wide text-wedding-white">Resepsi</h3>
            <div className="flex flex-col gap-3 mb-6 text-wedding-white/80 font-light text-sm">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-wedding-blue shrink-0" />
                <p>Sabtu, 14 Februari 2026</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-wedding-blue shrink-0" />
                <p>11:00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 mt-3 text-sm bg-wedding-white/5 p-4 rounded-sm border border-wedding-white/5">
                <MapPin className="w-4 h-4 text-wedding-blue mb-1 shrink-0" />
                <p className="font-medium text-wedding-white">Gedung Sate Bandung</p>
                <p className="opacity-80 text-xs">Jalan Diponegoro No.22, Bandung</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lihat Lokasi Button */}
        <div className="w-full flex justify-center mt-8">
          <motion.a
            href="#"
            target="_blank"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-10 py-3 border border-wedding-white/30 text-wedding-white/80 hover:bg-wedding-white/10 hover:border-wedding-white/50 transition-all duration-300 text-[11px] tracking-[0.35em] uppercase rounded-full font-body"
          >
            Lihat Lokasi
          </motion.a>
        </div>
      </div>
    </section>
  );
}
