import { Disc3, Pause } from 'lucide-react';

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
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40">
      <button
        onClick={togglePlay}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-wedding-gray/80 backdrop-blur-md border border-wedding-white/10 shadow-lg text-wedding-white hover:bg-wedding-gray transition-colors group"
      >
        {isPlaying ? (
          <Disc3 className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
        ) : (
          <Pause className="w-5 h-5 text-wedding-white/60" />
        )}
      </button>
    </div>
  );
}
