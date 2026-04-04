import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 15 soft light orbs
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage string
      size: Math.random() * 4 + 2, // size between 2px and 6px
      duration: Math.random() * 8 + 10, // 10-18s duration
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-wedding-white/30 backdrop-blur-[1px]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            bottom: '-5%'
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, Math.random() * 20 - 10, Math.random() * -20 + 10, 0],
            opacity: [0, 0.4, 0.8, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
