import React from 'react';
import { Coffee, MapPin, Clock, Heart, Wifi } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer = ({ t, onOpenReserve, onOpenStaffPortal }) => {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div className="brand-icon-box" style={{ width: '38px', height: '38px' }}>
                <Coffee size={20} />
              </div>
              <span className="brand-name" style={{ color: '#FFFFFF' }}>THE KAFFE LOOPIE</span>
            </div>
            <p className="footer-tagline">
              {t.footer.tagline}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#B3A49C', fontSize: '0.85rem' }}>
              <Wifi size={16} style={{ color: 'var(--accent-warm)' }} />
              <span>{t.footer.wifiNotice}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">{t.footer.quickLinks}</h4>
            <ul className="footer-links">
              <li><a href="#menu">{t.nav.menu}</a></li>
              <li><a href="#atmosphere">{t.nav.atmosphere}</a></li>
              <li><a href="#cats">{t.nav.cats}</a></li>
              <li><a href="#gallery">{t.nav.gallery}</a></li>
              <li><a href="#reviews">{t.nav.reviews}</a></li>
              <li><a href="#location">{t.nav.visit}</a></li>
              <li>
                <button 
                  onClick={onOpenStaffPortal} 
                  style={{ color: '#EBD3BE', fontSize: '0.86rem', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>🔒 Mətbəx & Admin Girişi</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="footer-col-title">{t.footer.openingHours}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#B3A49C', fontSize: '0.9rem' }}>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block' }}>{t.location.mondaySunday}</strong>
                <span>08:30 AM – 10:30 PM</span>
              </div>
              <div style={{ marginTop: '8px' }}>
                <span style={{ 
                  background: 'rgba(46, 125, 50, 0.2)', 
                  color: '#81C784', 
                  fontSize: '0.75rem', 
                  fontWeight: '700', 
                  padding: '3px 8px', 
                  borderRadius: 'var(--radius-full)' 
                }}>
                  ● Dine-In & Takeaway
                </span>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="footer-col-title">{t.footer.contactUs}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#B3A49C', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--accent-warm)', flexShrink: 0, marginTop: '2px' }} />
                <span>45 Istiqlaliyyat Street, Baku, Azerbaijan</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <InstagramIcon size={18} style={{ color: 'var(--accent-warm)', flexShrink: 0 }} />
                <a 
                  href="https://www.instagram.com/thekaffe.baku" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#FFFFFF', fontWeight: '600' }}
                >
                  @thekaffe.baku
                </a>
              </div>
              <div style={{ marginTop: '12px' }}>
                <button 
                  onClick={onOpenReserve}
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  {t.nav.reserve}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Brewed with</span>
            <Heart size={14} fill="#C87D55" color="#C87D55" />
            <span>in Baku, Azerbaijan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
