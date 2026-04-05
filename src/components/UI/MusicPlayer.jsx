import { Disc3, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicPlayer({ audioRef, isPlaying, setIsPlaying }) {
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-40 md:right-auto md:left-1/2 md:translate-x-[200px]">
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-11 h-11 rounded-full bg-wedding-gray/80 backdrop-blur-md border border-wedding-white/10 shadow-lg text-wedding-white hover:bg-wedding-gray transition-colors group"
      >
        {isPlaying ? (
          <Disc3 className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
        ) : (
          <Pause className="w-4 h-4 text-wedding-white/60" />
        )}
      </motion.button>
    </div>
  );
}
