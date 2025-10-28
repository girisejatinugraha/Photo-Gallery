import React, { useState } from 'react';
import Modal from './Modal';

const Gallery = ({ photos, sectionTitle }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleNext = () => {
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
  };

  return (
    <main className="gallery-container">
      <h2 className="gallery-title">{sectionTitle}</h2>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="gallery-item"
            onClick={() => handlePhotoClick(photo)}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="gallery-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
              }}
            />
            <div className="gallery-overlay">
              <span className="view-text">View</span>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <Modal 
          photo={selectedPhoto}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </main>
  );
};

export default Gallery;