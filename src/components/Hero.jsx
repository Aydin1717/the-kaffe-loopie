import React from 'react';
import { Star, MapPin, Clock, Coffee, Heart, ArrowDown, Sparkles } from 'lucide-react';

export const Hero = ({ t, onOpenReserve }) => {
  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-bg-accent"></div>
      
      <div className="container">
        <div className="hero-grid">
          {/* Text Column */}
          <div className="hero-text-col">
            <div className="hero-badge-pill">
              <Star size={16} fill="#C87D55" color="#C87D55" />
              <span>{t.hero.ratingBadge}</span>
              <span style={{ color: 'var(--text-light)', margin: '0 4px' }}>•</span>
              <MapPin size={14} />
              <span>{t.hero.locationBadge}</span>
            </div>

            <h1 className="hero-title">
              {t.hero.headline}
            </h1>

            <p className="hero-desc">
              {t.hero.subheadline}
            </p>

            <div className="hero-cta-group">
              <a href="#menu" className="btn-primary">
                <span>{t.hero.exploreMenu}</span>
                <ArrowDown size={18} />
              </a>
              <button onClick={onOpenReserve} className="btn-secondary">
                <Coffee size={18} />
                <span>{t.hero.bookTable}</span>
              </button>
            </div>

            <div className="hero-quick-meta">
              <div className="quick-meta-item">
                <Clock size={18} />
                <span>{t.hero.openHours}</span>
              </div>
              <div className="quick-meta-item">
                <Coffee size={18} />
                <span>{t.hero.curatedBeans}</span>
              </div>
              <div className="quick-meta-item">
                <Heart size={18} />
                <span>Rescue Cat Friendly</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="hero-visual-col">
            <div className="hero-visual-card">
              <img 
                src="/assets/hero.jpg" 
                alt="The Kaffe Loopie interior in Baku with resident cat by the window"
                loading="eager"
              />
              <div className="hero-floating-badge">
                <div>
                  <h4 className="floating-badge-title">The Kaffe Loopie</h4>
                  <p className="floating-badge-sub">45 Istiqlaliyyat St, Baku (near Icherisheher)</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--accent-light)', padding: '6px 12px', borderRadius: 'var(--radius-full)' }}>
                  <Star size={16} fill="#C87D55" color="#C87D55" />
                  <span style={{ fontWeight: '800', color: 'var(--accent-warm)', fontSize: '0.9rem' }}>4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
