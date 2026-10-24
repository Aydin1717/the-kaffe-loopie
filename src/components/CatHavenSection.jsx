import React from 'react';
import { Heart, Sparkles, ShieldCheck, Sun, CameraOff, Coffee } from 'lucide-react';

export const CatHavenSection = ({ t }) => {
  return (
    <section className="container" id="cats">
      <div className="cats-section">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-badge">
            <Heart size={14} fill="#C87D55" />
            <span>{t.catsSection.badge}</span>
          </div>
          <h2 className="section-title">{t.catsSection.title}</h2>
          <p className="section-subtitle">{t.catsSection.subtitle}</p>
        </div>

        {/* Cats Grid */}
        <div className="cats-grid">
          {/* Cat 1: Mila */}
          <div className="cat-profile-card">
            <div className="cat-photo-wrap">
              <img 
                src="/assets/cat.jpg" 
                alt="Mila, resident cat of The Kaffe Loopie"
                loading="lazy" 
              />
              <span className="cat-badge-overlay">🐾 Window Sill Resident</span>
            </div>
            <div className="cat-info-body">
              <h3 className="cat-name">{t.catsSection.cat1Name}</h3>
              <p className="cat-role">{t.catsSection.cat1Role}</p>
              <p className="cat-bio">{t.catsSection.cat1Desc}</p>
            </div>
          </div>

          {/* Cat 2: Simba */}
          <div className="cat-profile-card">
            <div className="cat-photo-wrap">
              <img 
                src="/assets/cat.jpg" 
                alt="Simba, resident cat of The Kaffe Loopie"
                style={{ filter: 'hue-rotate(-15deg)' }}
                loading="lazy" 
              />
              <span className="cat-badge-overlay">🐾 Armchair Guardian</span>
            </div>
            <div className="cat-info-body">
              <h3 className="cat-name">{t.catsSection.cat2Name}</h3>
              <p className="cat-role">{t.catsSection.cat2Role}</p>
              <p className="cat-bio">{t.catsSection.cat2Desc}</p>
            </div>
          </div>
        </div>

        {/* Etiquette Rules */}
        <div className="cat-rules-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={22} style={{ color: 'var(--accent-warm)' }} />
            <h4 style={{ fontSize: '1.15rem', fontWeight: '700' }}>{t.catsSection.etiquetteTitle}</h4>
          </div>

          <div className="rules-grid">
            <div className="rule-item">
              <Sun size={18} className="rule-icon" />
              <span>{t.catsSection.rule1}</span>
            </div>
            <div className="rule-item">
              <Coffee size={18} className="rule-icon" />
              <span>{t.catsSection.rule2}</span>
            </div>
            <div className="rule-item">
              <CameraOff size={18} className="rule-icon" />
              <span>{t.catsSection.rule3}</span>
            </div>
            <div className="rule-item">
              <Heart size={18} className="rule-icon" />
              <span>{t.catsSection.rule4}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
