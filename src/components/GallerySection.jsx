import React, { useState } from 'react';
import { Camera, Eye, X } from 'lucide-react';

export const GallerySection = ({ t }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    {
      src: "/assets/hero.jpg",
      title: "Morning Light on Istiqlaliyyat",
      category: "Interior & Vibes",
    },
    {
      src: "/assets/coffee.jpg",
      title: "Artisan Rosetta Latte Art",
      category: "Specialty Brews",
    },
    {
      src: "/assets/breakfast.jpg",
      title: "Golden Syrniki with Fresh Berries",
      category: "All-Day Kitchen",
    },
    {
      src: "/assets/cat.jpg",
      title: "Resident Cat on Window Sill",
      category: "Cozy Moments",
    },
  ];

  return (
    <section className="section-padding" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Camera size={14} />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="gallery-item"
              onClick={() => setSelectedImg(item)}
            >
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#EED7C5', letterSpacing: '0.08em', fontWeight: '700' }}>
                    {item.category}
                  </span>
                  <p className="gallery-caption">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="modal-backdrop" onClick={() => setSelectedImg(null)}>
            <div 
              className="glass-panel"
              style={{
                maxWidth: '800px',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                background: '#FFFFFF',
                boxShadow: 'var(--shadow-lg)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedImg(null)}
              >
                <X size={20} />
              </button>
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                style={{ width: '100%', maxHeight: '70vh', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '20px 24px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-warm)', fontWeight: '700', textTransform: 'uppercase' }}>
                  {selectedImg.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '4px' }}>{selectedImg.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
