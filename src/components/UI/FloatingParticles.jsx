import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 12 soft light orbs
    const newParticles = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-wedding-white/20 backdrop-blur-[1px]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            bottom: '-5%'
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, Math.random() * 15 - 7, Math.random() * -15 + 7, 0],
            opacity: [0, 0.3, 0.6, 0]
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
