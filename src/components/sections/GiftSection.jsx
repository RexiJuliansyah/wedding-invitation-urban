import { motion } from 'framer-motion';
import { Copy, CreditCard, Gift } from 'lucide-react';
import { useState } from 'react';

export default function GiftSection() {
  const [copiedBank, setCopiedBank] = useState('');

  const handleCopy = (text, bank) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(bank);
    setTimeout(() => setCopiedBank(''), 2000);
  };

  return (
    <section id="gift" className="w-full py-24 bg-wedding-gray text-wedding-white relative overflow-hidden">
      <div className="absolute inset-0 bg-wedding-white/5" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Gift className="w-8 h-8 opacity-50 mx-auto mb-6 text-wedding-blue-light" />
          <span className="text-xs tracking-[0.3em] uppercase text-wedding-white/50 mb-4 block">Tanda Kasih</span>
          <h2 className="text-4xl md:text-5xl font-heading text-wedding-white">Digital Gift</h2>
          <p className="mt-6 text-wedding-white/70 font-light max-w-lg mx-auto text-sm leading-relaxed">
            Kehadiran dan doa restu Anda adalah anugerah terbesar bagi kami. Namun, apabila Anda hendak memberikan tanda kasih, Anda dapat mengirimkannya melalui:
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[1.6/1] bg-wedding-white rounded-2xl p-6 flex flex-col justify-between shadow-xl overflow-hidden border border-wedding-gray/5"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-[10%] left-[-20%] w-[70%] h-[80%] rounded-full bg-wedding-gray blur-3xl"></div>
            </div>
            
            <div className="relative z-10 flex justify-end items-start h-8">
              {/* SVG Logo BCA */}
              <div className="flex items-center h-8">
                <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6">
                   <path d="M 5 25 L 12 5 L 22 5 L 15 25 Z" fill="#003399"/>
                   <path d="M 18 25 L 25 5 L 35 5 L 28 25 Z" fill="#003399"/>
                   <text x="38" y="22" fontFamily="Arial, sans-serif" fontWeight="900" fontStyle="italic" fontSize="22" fill="#003399">BCA</text>
                </svg>
              </div>
            </div>

            <div className="relative z-10 text-left mt-auto mb-2 text-wedding-gray">
              <p className="text-xl md:text-2xl tracking-[0.2em] font-mono mb-1">1234567890</p>
              <p className="text-sm tracking-widest uppercase font-semibold opacity-80">RAMA WIJAYA</p>
            </div>

            <div className="relative z-10 flex justify-end">
              <button
                onClick={() => handleCopy('1234567890', 'BCA')}
                className="inline-flex items-center justify-center px-4 py-1.5 bg-wedding-gray/10 hover:bg-wedding-gray/20 transition-colors rounded-lg text-xs font-bold text-wedding-gray shadow-sm"
              >
                {copiedBank === 'BCA' ? 'Tersalin' : (
                  <><Copy className="w-3.5 h-3.5 mr-1.5" /> Copy</>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 2: DANA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[1.6/1] bg-wedding-white rounded-2xl p-6 flex flex-col justify-between shadow-xl overflow-hidden border border-wedding-gray/5"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-[10%] left-[-20%] w-[70%] h-[80%] rounded-full bg-wedding-gray blur-3xl"></div>
            </div>
            
            <div className="relative z-10 flex justify-end items-start h-8">
              {/* SVG Logo DANA */}
              <div className="flex items-center h-8">
                <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6">
                   <circle cx="15" cy="15" r="14" fill="#118EEA"/>
                   <path d="M 11 9 L 11 21 L 14.5 21 C 18 21 21 18.5 21 15 C 21 11.5 18 9 14.5 9 Z" fill="white"/>
                   <text x="35" y="21" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="18" fill="#118EEA" letterSpacing="1">DANA</text>
                </svg>
              </div>
            </div>

            <div className="relative z-10 text-left mt-auto mb-2 text-wedding-gray">
              <p className="text-xl md:text-2xl tracking-[0.2em] font-mono mb-1">081234567890</p>
              <p className="text-sm tracking-widest uppercase font-semibold opacity-80">SHINTA DEWI</p>
            </div>

            <div className="relative z-10 flex justify-end">
              <button
                onClick={() => handleCopy('081234567890', 'DANA')}
                className="inline-flex items-center justify-center px-4 py-1.5 bg-wedding-gray/10 hover:bg-wedding-gray/20 transition-colors rounded-lg text-xs font-bold text-wedding-gray shadow-sm"
              >
                {copiedBank === 'DANA' ? 'Tersalin' : (
                  <><Copy className="w-3.5 h-3.5 mr-1.5" /> Copy</>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
