import React from 'react';
import { X, Sparkles, TrendingUp, Globe, Heart, CalendarCheck, CheckCircle } from 'lucide-react';

export const PitchModal = ({ isOpen, onClose, t }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="pitch-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-badge" style={{ margin: '0 auto 12px' }}>
            <Sparkles size={14} />
            <span>{t.pitch.badge}</span>
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '8px' }}>
            {t.pitch.title}
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            {t.pitch.subtitle}
          </p>
        </div>

        <div>
          {/* Point 1 */}
          <div className="pitch-point-row">
            <div className="pitch-point-num">1</div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px', color: 'var(--text-main)' }}>
                {t.pitch.point1Title}
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {t.pitch.point1Desc}
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="pitch-point-row">
            <div className="pitch-point-num">2</div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px', color: 'var(--text-main)' }}>
                {t.pitch.point2Title}
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {t.pitch.point2Desc}
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="pitch-point-row">
            <div className="pitch-point-num">3</div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px', color: 'var(--text-main)' }}>
                {t.pitch.point3Title}
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {t.pitch.point3Desc}
              </p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="pitch-point-row">
            <div className="pitch-point-num">4</div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px', color: 'var(--text-main)' }}>
                {t.pitch.point4Title}
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {t.pitch.point4Desc}
              </p>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '32px',
          padding: '20px',
          borderRadius: '16px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-gold)',
          textAlign: 'center'
        }}>
          <p style={{ fontWeight: '700', color: 'var(--text-main)', marginBottom: '8px' }}>
            🎯 Pitching Strategy for the Cafe Owner:
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Show them this demo running on a phone or laptop. Let them test switching languages (AZ / EN / RU), adding items to the takeaway bag, and generating a test WhatsApp order. It instantly demonstrates how modern and professional their brand can look online!
          </p>
          <div style={{ marginTop: '16px' }}>
            <button onClick={onClose} className="btn-primary" style={{ padding: '10px 24px' }}>
              <span>Got it, Explore Website</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
