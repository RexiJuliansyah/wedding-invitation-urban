import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Gift, CheckCircle2, CreditCard, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function GiftSection() {
  const [copiedId, setCopiedId] = useState(null);
  const [showAmplop, setShowAmplop] = useState(false);
  const [showKado, setShowKado] = useState(false);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const CopyButton = ({ id, text, label }) => (
    <motion.button
      onClick={() => handleCopy(text, id)}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden group inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide text-[12px] rounded-xl px-5 py-2.5 transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, #F8F9FA 0%, #e8ecf0 50%, #F8F9FA 100%)',
        boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
        color: '#2C3E50',
        border: '1px solid rgba(168,185,198,0.3)',
      }}
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-wedding-blue/10 skew-x-12 pointer-events-none" />
      {copiedId === id
        ? <><CheckCircle2 size={14} className="text-green-600" /> Tersalin</>
        : <><Copy size={14} /> {label}</>
      }
    </motion.button>
  );

  return (
    <section id="gift" className="w-full py-16 bg-wedding-gray text-wedding-white relative overflow-hidden">
      <div className="absolute inset-0 bg-wedding-white/5" />
      <div className="w-full px-5 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <Gift className="w-7 h-7 opacity-50 mx-auto mb-5 text-wedding-blue-light" />
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-white/50 mb-3 block">Tanda Kasih</span>
          <h2 className="text-3xl font-heading text-wedding-white">Digital Gift</h2>
          <p className="mt-5 text-wedding-white/70 font-light max-w-lg mx-auto text-xs leading-relaxed">
            Kehadiran dan doa restu Anda adalah anugerah terbesar bagi kami. Namun, apabila Anda hendak memberikan tanda kasih, Anda dapat mengirimkannya melalui:
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-4 w-full max-w-[380px] mx-auto">

          {/* Button Amplop Online */}
          <motion.button
            onClick={() => setShowAmplop(!showAmplop)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-10 py-3 border border-wedding-white/30 text-wedding-white/80 hover:bg-wedding-white/10 hover:border-wedding-white/50 transition-all duration-300 text-[11px] tracking-[0.35em] uppercase rounded-full font-body"
          >
            <CreditCard size={15} /> Amplop Online
          </motion.button>

          {/* Expandable Amplop Content */}
          <AnimatePresence>
            {showAmplop && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="w-full overflow-hidden flex flex-col gap-4 mt-2 mb-2"
              >
                {/* Card BRI — Credit Card Style */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl p-6 text-center border border-white/10"
                  style={{
                    background: 'linear-gradient(135deg, #2C3E50 0%, #1a2a3a 40%, #0f1c2a 100%)',
                  }}
                >
                  {/* Dot pattern overlay */}
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-[0.12] pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(123,149,166,0.8) 10%, transparent 10.01%)',
                      backgroundSize: '10px 10px',
                    }}
                  />
                  {/* Bank name top-right */}
                  <h3 className="absolute top-4 right-5 text-white font-bold text-2xl italic tracking-wider font-heading">BRI</h3>
                  {/* Chip left-center */}
                  <div className="w-12 h-9 rounded bg-gradient-to-br from-[#7B95A6] to-[#4A6B8C] p-1 flex items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 opacity-90 shadow-inner">
                    <div className="w-full h-full border border-white/20 rounded-sm" />
                  </div>
                  {/* Account details centered */}
                  <div className="mt-8 mb-4 relative z-10">
                    <p className="text-white text-xl tracking-[0.2em] font-mono mb-4">0000 0000 000</p>
                    <CopyButton id="bri" text="00000000000" label="Salin No. Rekening" />
                  </div>
                  <p className="text-white font-bold text-sm tracking-wide relative z-10">A/n Nama Mempelai</p>
                </div>

                {/* Card BCA — Credit Card Style */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl p-6 text-center border border-white/10"
                  style={{
                    background: 'linear-gradient(135deg, #2C3E50 0%, #1a2a3a 40%, #0f1c2a 100%)',
                  }}
                >
                  {/* Dot pattern overlay */}
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-[0.12] pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(123,149,166,0.8) 10%, transparent 10.01%)',
                      backgroundSize: '10px 10px',
                    }}
                  />
                  {/* Bank name top-right */}
                  <h3 className="absolute top-4 right-5 text-white font-bold text-2xl italic tracking-wider font-heading">BCA</h3>
                  {/* Chip left-center */}
                  <div className="w-12 h-9 rounded bg-gradient-to-br from-[#7B95A6] to-[#4A6B8C] p-1 flex items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 opacity-90 shadow-inner">
                    <div className="w-full h-full border border-white/20 rounded-sm" />
                  </div>
                  {/* Account details centered */}
                  <div className="mt-8 mb-4 relative z-10">
                    <p className="text-white text-xl tracking-[0.2em] font-mono mb-4">0000 0000 000</p>
                    <CopyButton id="bca" text="00000000000" label="Salin No. Rekening" />
                  </div>
                  <p className="text-white font-bold text-sm tracking-wide relative z-10">A/n Nama Mempelai</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button Kirim Kado */}
          <motion.button
            onClick={() => setShowKado(!showKado)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-10 py-3 border border-wedding-white/30 text-wedding-white/80 hover:bg-wedding-white/10 hover:border-wedding-white/50 transition-all duration-300 text-[11px] tracking-[0.35em] uppercase rounded-full font-body"
          >
            <Gift size={15} /> Kirim Kado
          </motion.button>

          {/* Expandable Kado Content */}
          <AnimatePresence>
            {showKado && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="w-full overflow-hidden mt-2"
              >
                <div
                  className="w-full rounded-2xl p-6 text-center text-white shadow-xl relative border-2 border-dashed border-white/30"
                  style={{
                    background: 'linear-gradient(135deg, #4A6B8C 0%, #3a5a75 100%)',
                  }}
                >
                  <MapPin size={18} className="mx-auto mb-2 opacity-70" />
                  <p className="text-xs font-medium mb-1">Kediaman Mempelai Wanita</p>
                  <p className="text-[13px] leading-relaxed mb-6">Jl. Sudimoro No. 5 Kota Pelabuhan Ratu</p>
                  <CopyButton id="alamat" text="Jl. Sudimoro No. 5 Kota Pelabuhan Ratu" label="Salin Alamat" />
                  <p className="font-bold text-sm tracking-wide mt-5">A/n Nama Mempelai</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-20 h-px mt-6"
            style={{
              background: 'linear-gradient(90deg, transparent, #7B95A6, transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}

