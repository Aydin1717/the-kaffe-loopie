import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';

export const TakeawayCartDrawer = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart, 
  currentLang, 
  t,
  onPlaceOrder
}) => {
  const [orderType, setOrderType] = useState('takeaway');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const generateWhatsAppOrder = () => {
    if (onPlaceOrder) {
      onPlaceOrder({
        id: `KL-${Math.floor(100 + Math.random() * 900)}`,
        customerName: "Qonaq (Müştəri)",
        phone: "+994 50 000 00 00",
        type: orderType,
        items: cartItems.map(item => {
          const trans = item.translations[currentLang] || item.translations.en;
          return {
            name: trans.name,
            quantity: item.quantity,
            price: item.price
          };
        }),
        total: totalAmount,
        notes: orderNotes,
        status: "new",
        timeAgo: "İndicə daxil oldu",
        timestamp: Date.now()
      });
    }

    let orderText = `☕ *New Order for The Kaffe Loopie*\n\n`;
    orderText += `*Type:* ${orderType === 'takeaway' ? '🥡 Takeaway Pickup' : '🍽️ Dine-in'}\n\n`;
    orderText += `*Items:*\n`;

    cartItems.forEach((item) => {
      const trans = item.translations[currentLang] || item.translations.en;
      orderText += `• ${item.quantity}x ${trans.name} — ${(item.price * item.quantity).toFixed(2)} ₼\n`;
    });

    orderText += `\n*Total:* ${totalAmount.toFixed(2)} ₼\n`;
    if (orderNotes.trim()) {
      orderText += `*Special Notes:* ${orderNotes}\n`;
    }
    orderText += `\nPlease confirm if ready for pickup! Thank you!`;

    window.open(`https://wa.me/994500000000?text=${encodeURIComponent(orderText)}`, '_blank');
  };

  return (
    <div className="cart-drawer-backdrop" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} style={{ color: 'var(--accent-warm)' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{t.cart.bagTitle}</h3>
            {cartItems.length > 0 && (
              <span style={{ 
                fontSize: '0.8rem', 
                background: 'var(--accent-light)', 
                color: 'var(--accent-warm)', 
                padding: '2px 8px', 
                borderRadius: 'var(--radius-full)',
                fontWeight: '700'
              }}>
                {cartItems.length}
              </span>
            )}
          </div>
          <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: 'var(--text-muted)'
              }}>
                <ShoppingBag size={28} />
              </div>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>{t.cart.emptyBag}</h4>
              <p style={{ fontSize: '0.88rem' }}>{t.cart.addItems}</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cartItems.map((item) => {
                const trans = item.translations[currentLang] || item.translations.en;
                return (
                  <div 
                    key={item.id} 
                    style={{
                      display: 'flex',
                      gap: '12px',
                      padding: '12px',
                      borderRadius: '12px',
                      background: 'var(--bg-secondary)',
                      alignItems: 'center'
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={trans.name} 
                      style={{ width: '56px', height: '56px', borderRadius: '10px', objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1 }}>
                      <h5 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>
                        {trans.name}
                      </h5>
                      <p style={{ fontSize: '0.85rem', color: 'var(--accent-warm)', fontWeight: '700' }}>
                        {(item.price * item.quantity).toFixed(2)} {t.menu.currency}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 'var(--shadow-sm)'
                        }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: '0.9rem', fontWeight: '700', width: '20px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 'var(--shadow-sm)'
                        }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      style={{ color: 'var(--text-light)', padding: '4px' }}
                      title="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                );
              })}

              {/* Order Options */}
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                <label className="form-label">{t.cart.dineInTakeaway}</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                  <button 
                    className={`btn-secondary ${orderType === 'takeaway' ? 'active' : ''}`}
                    style={orderType === 'takeaway' ? { background: 'var(--accent-warm)', color: '#FFFFFF', borderColor: 'var(--accent-warm)' } : {}}
                    onClick={() => setOrderType('takeaway')}
                  >
                    {t.cart.takeaway}
                  </button>
                  <button 
                    className={`btn-secondary ${orderType === 'dinein' ? 'active' : ''}`}
                    style={orderType === 'dinein' ? { background: 'var(--accent-warm)', color: '#FFFFFF', borderColor: 'var(--accent-warm)' } : {}}
                    onClick={() => setOrderType('dinein')}
                  >
                    {t.cart.dineIn}
                  </button>
                </div>

                <div className="form-group">
                  <label className="form-label">{t.cart.orderNotes}</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder={t.cart.orderNotesPlaceholder}
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with WhatsApp checkout */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                {t.cart.total}
              </span>
              <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)' }}>
                {totalAmount.toFixed(2)} {t.menu.currency}
              </span>
            </div>

            <button 
              onClick={generateWhatsAppOrder}
              className="btn-primary" 
              style={{ width: '100%', padding: '14px', background: '#25D366', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)' }}
            >
              <MessageCircle size={20} />
              <span>{t.cart.sendWhatsAppOrder}</span>
            </button>

            <button 
              onClick={onClearCart}
              style={{ 
                width: '100%', 
                textAlign: 'center', 
                fontSize: '0.82rem', 
                color: 'var(--text-light)', 
                marginTop: '12px',
                padding: '6px'
              }}
            >
              {t.cart.clearBag}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
