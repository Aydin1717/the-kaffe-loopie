import React from 'react';
import { Coffee, UtensilsCrossed, HeartHandshake, Sparkles } from 'lucide-react';

export const AtmospherePillars = ({ t }) => {
  const pillars = [
    {
      icon: <Coffee size={28} />,
      title: t.pillars.p1Title,
      desc: t.pillars.p1Desc,
    },
    {
      icon: <UtensilsCrossed size={28} />,
      title: t.pillars.p2Title,
      desc: t.pillars.p2Desc,
    },
    {
      icon: <HeartHandshake size={28} />,
      title: t.pillars.p3Title,
      desc: t.pillars.p3Desc,
    },
    {
      icon: <Sparkles size={28} />,
      title: t.pillars.p4Title,
      desc: t.pillars.p4Desc,
    },
  ];

  return (
    <section className="section-padding" id="atmosphere" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>The Kaffe Loopie Way</span>
          </div>
          <h2 className="section-title">{t.pillars.title}</h2>
          <p className="section-subtitle">{t.pillars.subtitle}</p>
        </div>

        <div className="pillars-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon-wrap">{item.icon}</div>
              <h3 className="pillar-title">{item.title}</h3>
              <p className="pillar-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
