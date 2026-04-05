import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../../config/weddingData';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.event.targetDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds }
  ];

  return (
    <section className="w-full py-14 bg-wedding-white flex justify-center items-center">
      <div className="w-full px-5 text-center">
        <div className="grid grid-cols-4 gap-2.5">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center py-5 px-2 bg-wedding-white-soft border border-wedding-gray/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] rounded-sm"
            >
              <span className="text-3xl font-heading text-wedding-gray mb-2">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-wedding-gray/40 font-semibold">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
