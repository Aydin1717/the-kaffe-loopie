import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const PitchRibbon = ({ onOpenPitch, lang, t }) => {
  return (
    <div className="pitch-ribbon">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} style={{ color: '#EED7C5' }} />
          <span><strong>Client Presentation Mode:</strong> Tailored demo website for <em>The Kaffe Loopie (Baku)</em></span>
        </div>
        <button 
          onClick={onOpenPitch}
          className="pitch-ribbon-btn"
          title="See sales points for the cafe owner"
        >
          <span>{t.nav.pitchDemo}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
