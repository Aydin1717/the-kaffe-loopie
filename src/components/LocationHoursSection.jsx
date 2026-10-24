import React, { useState } from 'react';
import { MapPin, Clock, Phone, Copy, Check, ExternalLink, Navigation, Compass, Share2 } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const LocationHoursSection = ({ t }) => {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const address = "45 Istiqlaliyyat Street, Baku, Azerbaijan";
  const mapsPlaceUrl = "https://www.google.com/maps/place/The+Kaffe+Loopie/@40.3774095,49.7758888,14z";
  const directionsUrl = "https://www.google.com/maps/dir//The+Kaffe+Loopie,+Baku,+Azerbaijan";
  // Responsive Google Maps embed URL
  const mapEmbedUrl = "https://maps.google.com/maps?q=The+Kaffe+Loopie,+Istiqlaliyyat+Street,+Baku&t=&z=16&ie=UTF8&iwloc=&output=embed";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "The Kaffe Loopie Baku",
        text: "Check out The Kaffe Loopie on Istiqlaliyyat St in Baku! ☕🐾",
        url: mapsPlaceUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(mapsPlaceUrl);
      setShared(true);
      setTimeout(() => setShared(false), 2200);
    }
  };

  return (
    <section className="section-padding" id="location">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <MapPin size={14} />
            <span>{t.location.badge}</span>
          </div>
          <h2 className="section-title">{t.location.title}</h2>
          <p className="section-subtitle">{t.location.subtitle}</p>
        </div>

        {/* Location Master Card */}
        <div className="location-master-card">
          {/* Left Details Column */}
          <div className="location-info-panel">
            {/* Address */}
            <div className="location-block">
              <div className="location-block-icon">
                <MapPin size={22} />
              </div>
              <div className="location-block-content">
                <span className="location-block-tag">City Center • Old City Walls</span>
                <h4 className="location-block-title">{t.location.addressTitle}</h4>
                <p className="location-block-text">{address}</p>
                <div className="metro-badge-box">
                  <Compass size={14} style={{ color: 'var(--accent-warm)' }} />
                  <span>{t.location.metroNote}</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="location-block">
              <div className="location-block-icon">
                <Clock size={22} />
              </div>
              <div className="location-block-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h4 className="location-block-title">{t.location.hoursTitle}</h4>
                  <span className="open-status-badge">
                    <span className="open-status-dot"></span>
                    <span>{t.location.statusOpen}</span>
                  </span>
                </div>
                <p className="location-block-text">
                  <strong>{t.location.mondaySunday}:</strong> {t.location.hoursTime}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  Kitchen & Specialty Espresso Bar open all day
                </p>
              </div>
            </div>

            {/* Social & Contact */}
            <div className="location-block">
              <div className="location-block-icon">
                <InstagramIcon size={22} />
              </div>
              <div className="location-block-content">
                <h4 className="location-block-title">{t.location.instagramTitle}</h4>
                <p className="location-block-text">
                  <a 
                    href="https://www.instagram.com/thekaffe.baku" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="instagram-link-highlight"
                  >
                    @thekaffe.baku
                  </a>
                  {" "}— Follow our daily brews, cozy cat stories, and Sunday workshops!
                </p>
              </div>
            </div>

            {/* Interactive Action Bar */}
            <div className="location-actions-row">
              <button 
                onClick={handleCopyAddress} 
                className="btn-secondary location-action-btn"
                title="Copy full address"
              >
                {copied ? <Check size={16} style={{ color: 'var(--accent-sage)' }} /> : <Copy size={16} />}
                <span>{copied ? t.location.copied : t.location.copyAddress}</span>
              </button>

              <button 
                onClick={handleShare} 
                className="btn-secondary location-action-btn"
                title="Share Google Maps link"
              >
                {shared ? <Check size={16} style={{ color: 'var(--accent-sage)' }} /> : <Share2 size={16} />}
                <span>{shared ? "Link Copied!" : "Share Location"}</span>
              </button>
            </div>

            {/* Primary Google Maps CTA Buttons */}
            <div className="location-primary-cta-box">
              <a 
                href={mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, padding: '14px 20px', fontSize: '0.92rem' }}
              >
                <MapPin size={18} />
                <span>{t.location.openInMaps}</span>
                <ExternalLink size={16} />
              </a>

              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '14px 20px', fontSize: '0.92rem' }}
              >
                <Navigation size={18} />
                <span>{t.location.getDirections}</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Google Maps Embed Column */}
          <div className="location-map-panel">
            <div className="map-frame-wrapper">
              <iframe
                title="The Kaffe Loopie Baku Location on Google Maps"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '460px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating verified badge on map */}
              <div className="map-floating-overlay">
                <div className="map-floating-inner">
                  <div className="map-floating-brand">
                    <div className="map-floating-pin-dot"></div>
                    <div>
                      <h5 className="map-floating-name">The Kaffe Loopie</h5>
                      <span className="map-floating-sub">45 Istiqlaliyyat St • Baku</span>
                    </div>
                  </div>
                  <div className="map-floating-meta">
                    <span className="map-rating-badge">⭐ 4.9 (324+ reviews)</span>
                    <a 
                      href={mapsPlaceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-direct-link"
                    >
                      View on Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
