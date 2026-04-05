import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import OpeningScreen from './components/sections/OpeningScreen';
import HeroSection from './components/sections/HeroSection';
import PrayerSection from './components/sections/PrayerSection';
import CoupleSection from './components/sections/CoupleSection';
import EventDetails from './components/sections/EventDetails';
import CountdownSection from './components/sections/CountdownSection';
import StorySection from './components/sections/StorySection';
import GallerySection from './components/sections/GallerySection';
import GiftSection from './components/sections/GiftSection';
import RSVPSection from './components/sections/RSVPSection';
import WishesSection from './components/sections/WishesSection';
import ClosingSection from './components/sections/ClosingSection';

import FloatingParticles from './components/UI/FloatingParticles';
import MusicPlayer from './components/UI/MusicPlayer';
import NavigationBar from './components/Navigation/NavigationBar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsMusicPlaying(true);
      }).catch(e => console.log("Auto-play prevented by browser policy:", e));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center w-full font-sans">
      {/* Mobile Wrapper for Desktop */}
      <div
        ref={containerRef}
        className="w-full max-w-[500px] min-h-screen relative shadow-2xl overflow-x-hidden bg-wedding-white"
      >
        <audio ref={audioRef} src="/music.m4a" loop />
        <FloatingParticles />

        <AnimatePresence>
          {!isOpen && (
            <OpeningScreen guestName={guestName} onOpen={handleOpen} />
          )}
        </AnimatePresence>

        {isOpen && (
          <>
            <MusicPlayer audioRef={audioRef} isPlaying={isMusicPlaying} setIsPlaying={setIsMusicPlaying} containerRef={containerRef} />
            <NavigationBar containerRef={containerRef} />

            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
              className="relative z-0 scroll-smooth pb-24"
            >
              <HeroSection />
              <PrayerSection />
              <CoupleSection />
              <EventDetails />
              <CountdownSection />
              <StorySection />
              <GallerySection />
              <GiftSection />
              <RSVPSection />
              <WishesSection />
              <ClosingSection />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
