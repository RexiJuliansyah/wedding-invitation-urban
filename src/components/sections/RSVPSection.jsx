import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

export default function RSVPSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', attendance: '', guests: '1', wishes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.name || !formData.attendance) return;
      setStep(2);
    } else if (step === 2) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(3);
      }, 1500);
    }
  };

  return (
    <section id="rsvp" className="w-full py-16 bg-wedding-gray relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-wedding-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="w-full px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-white/50 mb-3 block">Kehadiran</span>
          <h2 className="text-3xl font-heading text-wedding-white">RSVP</h2>
        </motion.div>

        <div className="bg-wedding-white/5 backdrop-blur-xl border border-wedding-white/10 rounded-sm p-6 shadow-2xl relative min-h-[380px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-wedding-white/70 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-transparent border-b border-wedding-white/20 py-3 text-sm text-wedding-white focus:border-wedding-white transition-colors outline-none placeholder:text-wedding-white/30"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-wedding-white/70 mb-3 mt-6">Apakah Anda akan hadir?</label>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setFormData({ ...formData, attendance: 'Hadir' })} className={`flex-1 py-3.5 text-[10px] font-semibold tracking-widest uppercase border rounded-sm transition-all ${formData.attendance === 'Hadir' ? 'bg-wedding-white text-wedding-gray border-wedding-white shadow-lg' : 'border-wedding-white/20 text-wedding-white hover:bg-wedding-white/10'}`}>Hadir</button>
                    <button type="button" onClick={() => setFormData({ ...formData, attendance: 'Tidak' })} className={`flex-1 py-3.5 text-[10px] font-semibold tracking-widest uppercase border rounded-sm transition-all ${formData.attendance === 'Tidak' ? 'bg-wedding-white text-wedding-gray border-wedding-white shadow-lg' : 'border-wedding-white/20 text-wedding-white hover:bg-wedding-white/10'}`}>Maaf, Tidak</button>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.attendance === 'Hadir' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="pt-3 overflow-hidden">
                      <label className="block text-[10px] uppercase tracking-widest text-wedding-white/70 mb-2">Jumlah Tamu</label>
                      <select value={formData.guests} onChange={e => setFormData({ ...formData, guests: e.target.value })} className="w-full bg-transparent border-b border-wedding-white/20 py-3 text-sm text-wedding-white focus:border-wedding-white transition-colors outline-none appearance-none cursor-pointer">
                        <option value="1" className="text-wedding-gray">1 Orang</option>
                        <option value="2" className="text-wedding-gray">2 Orang</option>
                      </select>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-3">
                  <motion.button
                    type="submit"
                    disabled={!formData.name || !formData.attendance}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-wedding-white text-wedding-gray py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-wedding-white/90 disabled:opacity-50 transition-all flex items-center justify-center disabled:cursor-not-allowed shadow-md"
                  >
                    Selanjutnya
                  </motion.button>
                </div>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5 flex flex-col h-full"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-heading text-wedding-white mb-1.5">Pesan & Doa (Opsional)</h3>
                  <p className="text-xs font-light text-wedding-white/60 mb-5">Tinggalkan pesan manis untuk kedua mempelai.</p>
                  <textarea
                    value={formData.wishes}
                    onChange={e => setFormData({ ...formData, wishes: e.target.value })}
                    placeholder="Tulis ucapan selamat atau doa..."
                    rows="4"
                    className="w-full bg-wedding-white/5 border border-wedding-white/10 rounded-sm p-4 text-sm text-wedding-white focus:border-wedding-white transition-colors outline-none resize-none placeholder:text-wedding-white/30"
                  />
                </div>
                <div className="flex gap-3 pt-3">
                  <motion.button
                    type="button"
                    onClick={() => setStep(1)}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-3.5 border border-wedding-white/20 text-wedding-white rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-wedding-white/10 transition-all"
                  >
                    Kembali
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-wedding-white text-wedding-gray py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-wedding-white/90 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    {isSubmitting ? <span className="animate-pulse tracking-[0.2em]">Mengirim...</span> : <><Send className="w-4 h-4" /> Konfirmasi</>}
                  </motion.button>
                </div>
              </motion.form>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="mb-6"
                >
                  <CheckCircle className="w-20 h-20 text-wedding-white drop-shadow-xl" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-heading text-wedding-white mb-3">Terima Kasih, {formData.name.split(' ')[0]}!</h3>
                  <p className="text-sm text-wedding-white/70 font-light max-w-sm mx-auto leading-relaxed">
                    {formData.attendance === 'Hadir'
                      ? "Konfirmasi kehadiran Anda telah kami terima. Kami menantikan kehadiran Anda di hari bahagia kami."
                      : "Terima kasih atas konfirmasi dan doa restu Anda."}
                  </p>
                </div>
                <button type="button" onClick={() => { setStep(1); setFormData({ name: '', attendance: '', guests: '1', wishes: '' }); }} className="mt-8 text-[10px] font-medium uppercase tracking-[0.2em] text-wedding-white border-b border-wedding-white/30 pb-1 hover:border-wedding-white transition-all">
                  Kirim Konfirmasi Lain
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
