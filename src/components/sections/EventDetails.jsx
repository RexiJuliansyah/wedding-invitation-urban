import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="events" className="w-full py-24 bg-wedding-gray text-wedding-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-white/50 mb-4 block">Rangkaian Acara</span>
          <h2 className="text-4xl md:text-5xl font-heading text-wedding-white">Detail Acara</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center p-10 bg-wedding-white/5 backdrop-blur-sm border border-wedding-white/10 rounded-sm"
          >
            <h3 className="text-3xl font-heading mb-6 tracking-wide text-wedding-white">Akad Nikah</h3>
            <div className="flex flex-col gap-4 mb-8 text-wedding-white/80 font-light">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-wedding-blue" />
                <p>Sabtu, 14 Februari 2026</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-wedding-blue" />
                <p>08:00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 mt-4 text-sm bg-wedding-white/5 p-4 rounded-sm border border-wedding-white/5">
                <MapPin className="w-4 h-4 text-wedding-blue mb-1" />
                <p className="font-medium text-wedding-white">Gedung Sate Bandung</p>
                <p className="opacity-80">Jalan Diponegoro No.22, Bandung</p>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center p-10 bg-wedding-white/5 backdrop-blur-sm border border-wedding-white/10 rounded-sm"
          >
            <h3 className="text-3xl font-heading mb-6 tracking-wide text-wedding-white">Resepsi</h3>
            <div className="flex flex-col gap-4 mb-8 text-wedding-white/80 font-light">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4 text-wedding-blue" />
                <p>Sabtu, 14 Februari 2026</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-wedding-blue" />
                <p>11:00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 mt-4 text-sm bg-wedding-white/5 p-4 rounded-sm border border-wedding-white/5">
                <MapPin className="w-4 h-4 text-wedding-blue mb-1" />
                <p className="font-medium text-wedding-white">Gedung Sate Bandung</p>
                <p className="opacity-80">Jalan Diponegoro No.22, Bandung</p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Lihat Lokasi Button */}
        <div className="w-full flex justify-center mt-12">
          <a
            href="#"
            target="_blank"
            className="inline-flex items-center justify-center px-10 py-4 border border-wedding-blue text-wedding-blue hover:bg-wedding-blue hover:text-wedding-white transition-colors text-xs tracking-[0.2em] uppercase rounded-full"
          >
            Lihat Lokasi
          </a>
        </div>
      </div>
    </section>
  );
}
