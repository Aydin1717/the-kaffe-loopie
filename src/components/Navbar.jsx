import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu, X, Globe, Calendar, ChefHat } from 'lucide-react';

export const Navbar = ({ 
  currentLang, 
  setLang, 
  t, 
  cartCount, 
  onOpenCart, 
  onOpenReserve,
  isStaffLoggedIn,
  onOpenStaffPortal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#menu", label: t.nav.menu },
    { href: "#atmosphere", label: t.nav.atmosphere },
    { href: "#cats", label: t.nav.cats },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#location", label: t.nav.visit },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const getPortalLabel = () => {
    if (currentLang === 'az') return 'Mətbəx / Admin';
    if (currentLang === 'ru') return 'Кухня / Админ';
    return 'Kitchen / Admin';
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Brand */}
          <a href="#" className="nav-brand">
            <div className="brand-icon-box">
              <Coffee size={22} />
            </div>
            <div className="brand-text-col">
              <span className="brand-name">THE KAFFE LOOPIE</span>
              <span className="brand-sub">Specialty Coffee • Baku</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            {/* Language Switcher */}
            <div className="lang-switcher" title="Select Language">
              <button 
                className={`lang-btn ${currentLang === 'az' ? 'active' : ''}`}
                onClick={() => setLang('az')}
              >
                AZ
              </button>
              <button 
                className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button 
                className={`lang-btn ${currentLang === 'ru' ? 'active' : ''}`}
                onClick={() => setLang('ru')}
              >
                RU
              </button>
            </div>

            {/* Staff / Mətbəx Portal Entry Button */}
            <button 
              className="btn-secondary"
              style={{ padding: '8px 12px', fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: '6px', background: isStaffLoggedIn ? '#E8F5E9' : '#FFFFFF', borderColor: isStaffLoggedIn ? '#81C784' : 'var(--border-medium)' }}
              onClick={onOpenStaffPortal}
              title="Mətbəx və Admin İdarəetmə Paneli"
            >
              <ChefHat size={16} style={{ color: isStaffLoggedIn ? '#2E7D32' : 'var(--accent-warm)' }} />
              <span style={{ fontWeight: '700', color: isStaffLoggedIn ? '#2E7D32' : 'var(--text-main)' }}>
                {getPortalLabel()}
              </span>
            </button>

            {/* Bag Button */}
            <button 
              className="bag-btn" 
              onClick={onOpenCart} 
              title={t.nav.orderBag}
              aria-label={t.nav.orderBag}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="bag-badge">{cartCount}</span>}
            </button>

            {/* Reserve CTA */}
            <button 
              className="btn-primary" 
              style={{ padding: '10px 18px', fontSize: '0.86rem' }}
              onClick={onOpenReserve}
            >
              <Calendar size={15} />
              <span>{t.nav.reserve}</span>
            </button>

            {/* Mobile Hamburger */}
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div style={{
            background: '#FFFFFF',
            borderTop: '1px solid var(--border-light)',
            padding: '24px 16px',
            marginTop: '12px',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  color: 'var(--text-main)',
                  padding: '6px 0',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                {link.label}
              </a>
            ))}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '8px' }}>
              <button 
                className="btn-secondary"
                style={{ padding: '10px', fontSize: '0.9rem', justifyContent: 'center' }}
                onClick={() => { setMobileMenuOpen(false); onOpenStaffPortal(); }}
              >
                <ChefHat size={18} style={{ color: 'var(--accent-warm)' }} />
                <span>{getPortalLabel()}</span>
              </button>
              
              <button 
                className="btn-primary" 
                style={{ width: '100%', padding: '12px' }}
                onClick={() => { setMobileMenuOpen(false); onOpenReserve(); }}
              >
                <Calendar size={16} />
                <span>{t.nav.reserve}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
