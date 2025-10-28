import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('me');

  const galleryData = {
    me: [
      { id: 1, src: '/images/me/saya1.webp', alt: 'Me 1' },
      { id: 2, src: '/images/me/saya2.jpg', alt: 'Me 2' },
      { id: 3, src: '/images/me/saya3.jpg', alt: 'Me 3' },
    ],
    gym: [
      { id: 1, src: '/images/gym/gym1.jpg', alt: 'Gym 1' },
      { id: 2, src: '/images/gym/gym2.jpg', alt: 'Gym 2' },
    ],
    run: [
      { id: 1, src: '/images/run/run1.jpg', alt: 'run 1' },
      { id: 2, src: '/images/run/run2.jpg', alt: 'run 2' },
      { id: 3, src: '/images/run/run3.jpg', alt: 'run 3' },
      { id: 4, src: '/images/run/run4.jpg', alt: 'run 4' },
      { id: 5, src: '/images/run/run5.jpg', alt: 'run 5' },
      { id: 6, src: '/images/run/run6.jpg', alt: 'run 6' },
      { id: 7, src: '/images/run/run7.jpg', alt: 'run 7' },
    ],
    random: [
      { id: 1, src: '/images/random/random1.jpg', alt: 'random 1' },
      { id: 2, src: '/images/random/random2.jpg', alt: 'random 2' },
      { id: 3, src: '/images/random/random3.jpg', alt: 'random 3' },
      { id: 4, src: '/images/random/random4.jpg', alt: 'random 4' },
      { id: 5, src: '/images/random/random5.jpg', alt: 'random 5' },
      { id: 6, src: '/images/random/random6.jpg', alt: 'random 6' },
      { id: 7, src: '/images/random/random7.jpg', alt: 'random 7' },
      { id: 8, src: '/images/random/random8.jpg', alt: 'random 8' },
      { id: 9, src: '/images/random/random9.jpg', alt: 'random 9' },
      { id: 10, src: '/images/random/random10.jpg', alt: 'random 10' },
    ],
  };

  const sections = [
    { id: 'me', label: 'Me', icon: '👤' },
    { id: 'gym', label: 'Gym', icon: '💪' },
    { id: 'run', label: 'Run', icon: '🏃🏻‍♂️' },
    { id: 'random', label: 'Random', icon: '📷' },
  ];

  return (
    <div className="app">
      <Header />
      <Navigation 
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <Gallery 
        photos={galleryData[activeSection]}
        sectionTitle={sections.find(s => s.id === activeSection)?.label}
      />
    </div>
  );
}

export default App;