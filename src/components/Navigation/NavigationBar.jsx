import { useState, useEffect } from 'react';
import { Home, Calendar, Image as ImageIcon, Gift, MessageSquare } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function NavigationBar({ containerRef }) {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sectionIds = ['home', 'events', 'gallery', 'gift', 'wishes'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Calendar, label: 'Acara', href: '#events' },
    { icon: ImageIcon, label: 'Galeri', href: '#gallery' },
    { icon: Gift, label: 'Kado', href: '#gift' },
    { icon: MessageSquare, label: 'Ucapan', href: '#wishes' },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-[460px] px-4">
      <div className="flex items-center justify-between gap-1 px-3 py-2.5 rounded-full bg-wedding-gray/85 backdrop-blur-md border border-wedding-white/10 shadow-2xl">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href;
          return (
            <a
              key={index}
              href={item.href}
              className={cn(
                "group relative flex flex-col items-center justify-center w-11 h-11 transition-all duration-300 rounded-full",
                isActive ? "scale-105" : "hover:scale-110 active:scale-95"
              )}
            >
              <div className={cn(
                "absolute inset-0 rounded-full transition-all duration-300",
                isActive ? "bg-wedding-white shadow-md shadow-black/20" : "bg-transparent group-hover:bg-wedding-white/10"
              )} />
              <Icon className={cn(
                "w-[18px] h-[18px] relative z-10 transition-colors duration-300",
                isActive ? "text-wedding-gray" : "text-wedding-white/80 group-hover:text-wedding-white"
              )} />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
