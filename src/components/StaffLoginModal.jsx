import React, { useState } from 'react';
import { X, Lock, ShieldCheck, ChefHat, KeyRound } from 'lucide-react';

export const StaffLoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === '1234' || pin.toLowerCase() === 'admin' || pin === 'loopie') {
      setError('');
      onLoginSuccess();
      onClose();
    } else {
      setError('Yanlış PIN kod! Demo PIN: 1234');
    }
  };

  const handleQuickDemoLogin = () => {
    setError('');
    onLoginSuccess();
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-box" style={{ maxWidth: '440px', padding: '36px 30px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'var(--accent-light)',
            color: 'var(--accent-warm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <ChefHat size={30} />
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '6px' }}>
            Mətbəx & Admin Girişi
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            The Kaffe Loopie heyəti və mətbəxi üçün idarəetmə paneli
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Personal PIN Kodu</span>
              <span style={{ color: 'var(--accent-warm)', fontSize: '0.78rem' }}>Demo: 1234</span>
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type="password"
                className="form-input"
                placeholder="PIN daxil edin (məs: 1234)"
                value={pin}
                onChange={(e) => { setPin(e.target.value); setError(''); }}
                autoFocus
              />
              <KeyRound size={18} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
            </div>
            {error && (
              <p style={{ color: '#D32F2F', fontSize: '0.82rem', marginTop: '6px' }}>{error}</p>
            )}
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', padding: '12px', fontSize: '0.95rem', marginBottom: '10px' }}
          >
            <Lock size={16} />
            <span>Giriş Et</span>
          </button>

          <button 
            type="button" 
            onClick={handleQuickDemoLogin}
            className="btn-secondary" 
            style={{ width: '100%', padding: '11px', fontSize: '0.88rem', background: 'var(--bg-secondary)', borderColor: 'var(--border-gold)' }}
          >
            <ShieldCheck size={16} style={{ color: 'var(--accent-warm)' }} />
            <span>1-Kliklə Demo Girişi (Admin / Mətbəx)</span>
          </button>
        </form>
      </div>
    </div>
  );
};
