import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ReservationModal = ({ isOpen, onClose, t, onAddReservation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '11:00',
    guests: '2',
    zone: 'Window Nook (Near the Cats)',
    type: 'Casual Coffee & Hangout',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onAddReservation) {
      onAddReservation({
        id: `RES-${Math.floor(200 + Math.random() * 800)}`,
        name: formData.name,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        zone: formData.zone,
        type: formData.type,
        notes: formData.notes,
        status: 'pending',
        timestamp: Date.now()
      });
    }
    // Fire celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C87D55', '#EBD3BE', '#537559', '#D9822B']
      });
    } catch {
      // ignore
    }
  };

  const getWhatsAppBookingText = () => {
    return encodeURIComponent(
      `Hello The Kaffe Loopie! 👋\nI would like to book a table:\n\n• Name: ${formData.name}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Guests: ${formData.guests}\n• Area: ${formData.zone}\n• Purpose: ${formData.type}\n• Notes: ${formData.notes || 'None'}\n\nPlease confirm my reservation. Thank you!`
    );
  };

  const handleWhatsAppSend = () => {
    window.open(`https://wa.me/994500000000?text=${getWhatsAppBookingText()}`, '_blank');
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose}>
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div className="section-badge" style={{ margin: '0 auto 12px' }}>
                <Calendar size={14} />
                <span>{t.reservation.badge}</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '6px' }}>
                {t.reservation.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                {t.reservation.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">{t.reservation.nameLabel} *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    required
                    placeholder="e.g. Aydin"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.reservation.phoneLabel} *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    required
                    placeholder="+994 50 123 45 67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">{t.reservation.dateLabel}</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.reservation.timeLabel}</label>
                  <input 
                    type="time" 
                    className="form-input" 
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.reservation.guestsLabel}</label>
                  <select 
                    className="form-select"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">{t.reservation.zoneLabel}</label>
                  <select 
                    className="form-select"
                    value={formData.zone}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                  >
                    <option value="Window Nook (Near the Cats)">{t.reservation.zoneWindow}</option>
                    <option value="Main Wooden Tables">{t.reservation.zoneCozy}</option>
                    <option value="Quiet Study Corner">{t.reservation.zoneQuiet}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">{t.reservation.typeLabel}</label>
                  <select 
                    className="form-select"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="Casual Coffee & Hangout">{t.reservation.typeCasual}</option>
                    <option value="Breakfast / Brunch">{t.reservation.typeBreakfast}</option>
                    <option value="Sunday Crochet Workshop">{t.reservation.typeWorkshop}</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t.reservation.notesLabel}</label>
                <textarea 
                  className="form-textarea" 
                  rows={2}
                  placeholder={t.reservation.notesPlaceholder}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '10px' }}
              >
                <span>{t.reservation.submitBtn}</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '50%', 
              background: '#E8F5E9', 
              color: '#2E7D32', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '8px' }}>
              {t.reservation.successTitle}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
              {t.reservation.successDesc}
            </p>

            <div style={{ 
              background: 'var(--bg-secondary)', 
              borderRadius: '16px', 
              padding: '16px', 
              textAlign: 'left', 
              fontSize: '0.88rem',
              marginBottom: '24px' 
            }}>
              <p><strong>Guest:</strong> {formData.name} ({formData.phone})</p>
              <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
              <p><strong>Guests:</strong> {formData.guests} guests</p>
              <p><strong>Zone:</strong> {formData.zone}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                onClick={handleWhatsAppSend}
                className="btn-primary"
                style={{ background: '#25D366', color: '#FFFFFF', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)' }}
              >
                <MessageCircle size={18} />
                <span>{t.reservation.sendWhatsApp}</span>
              </button>
              <button onClick={handleClose} className="btn-secondary">
                <span>{t.reservation.close}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
