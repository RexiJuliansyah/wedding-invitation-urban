import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';

export const weddingData = {
  couple: {
    groom: {
      name: "Rama Wijaya",
      father: "Bapak Fulan",
      mother: "Ibu Fulanah",
      instagram: "@ramawijaya"
    },
    bride: {
      name: "Shinta Dewi",
      father: "Bapak Fulan",
      mother: "Ibu Fulanah",
      instagram: "@shintadewi"
    }
  },
  event: {
    targetDate: "2026-12-20T08:00:00+07:00", 
    formattedDate: "20 . 12 . 2026",
    calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Rama+dan+Shinta&dates=20261220T010000Z/20261220T060000Z&details=Acara+pernikahan+Rama+dan+Shinta"
  },
  gallery: [
    { id: 1, src: image1, alt: "Momen Indah 1" },
    { id: 2, src: image2, alt: "Momen Indah 2" },
    { id: 3, src: image3, alt: "Momen Indah 3" },
    { id: 4, src: image4, alt: "Momen Indah 4" },
    { id: 5, src: image5, alt: "Momen Indah 5" },
    { id: 6, src: image6, alt: "Momen Indah 6" }
  ],
  wishes: [
    { name: 'Budi Santoso', text: 'Selamat menempuh hidup baru! Semoga samawa selalu.' },
    { name: 'Siti Aminah', text: 'Lancar sampai hari H. Doa terbaik untuk kalian.' },
    { name: 'Andi & Keluarga', text: 'Happy wedding! May your life be filled with love and laughter.' },
    { name: 'Keluarga Reyhan', text: 'Semoga menjadi keluarga yang harmonis dan bahagia selamanya.' },
    { name: 'Tiara', text: 'Selamat ya! Doa terbaik untuk perjalanan baru ini.' }
  ]
};
