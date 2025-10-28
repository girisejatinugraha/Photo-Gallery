import React, { useEffect } from 'react';

const Modal = ({ photo, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <button className="modal-nav modal-prev" onClick={onPrev}>
          ‹
        </button>
        
        <img 
          src={photo.src} 
          alt={photo.alt}
          className="modal-image"
        />
        
        <button className="modal-nav modal-next" onClick={onNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Modal;