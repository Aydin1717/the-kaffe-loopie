import React, { useState } from 'react';
import { 
  ChefHat, 
  Calendar, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Phone, 
  Coffee, 
  Utensils, 
  ArrowLeft, 
  Plus, 
  Bell, 
  MessageCircle, 
  LogOut,
  ShoppingBag,
  Sparkles
} from 'lucide-react';

export const StaffKitchenDashboard = ({ 
  orders, 
  reservations, 
  onUpdateOrderStatus, 
  onUpdateReservationStatus, 
  onAddTestOrder, 
  onClose, 
  onLogout 
}) => {
  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'reservations' | 'analytics'
  const [filterStatus, setFilterStatus] = useState('all');

  const pendingOrdersCount = orders.filter(o => o.status !== 'ready').length;
  const pendingReservationsCount = reservations.filter(r => r.status === 'pending').length;

  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);

  const filteredOrders = orders.filter(order => {
    if (filterStatus === 'all') return true;
    return order.status === filterStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'new':
        return <span className="admin-status-badge badge-new">🟡 Yeni Sifariş</span>;
      case 'preparing':
        return <span className="admin-status-badge badge-prep">🔵 Hazırlanır</span>;
      case 'ready':
        return <span className="admin-status-badge badge-ready">🟢 Hazırdır</span>;
      default:
        return null;
    }
  };

  const getReservationBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return <span className="admin-status-badge badge-ready">🟢 Təsdiqləndi</span>;
      case 'pending':
        return <span className="admin-status-badge badge-new">🟡 Gözləyir</span>;
      case 'cancelled':
        return <span className="admin-status-badge badge-cancelled">🔴 Ləğv edildi</span>;
      default:
        return null;
    }
  };

  const handleSendWhatsAppConfirmation = (res) => {
    const text = encodeURIComponent(
      `Salam ${res.name}! 👋\n` +
      `The Kaffe Loopie-dən yazırıq.\n` +
      `Sizin ${res.date} tarixi, saat ${res.time} üçün (${res.guests} nəfərlik, ${res.zone}) rezervasiyanız TƏSDİQLƏNDİ! 🎉\n` +
      `Sizi gözləyirik! ☕🐾`
    );
    window.open(`https://wa.me/${res.phone.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="admin-dashboard-overlay">
      {/* Admin Top Header */}
      <header className="admin-topbar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="brand-icon-box" style={{ width: '40px', height: '40px' }}>
              <ChefHat size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>
                  The Kaffe Loopie
                </h2>
                <span style={{ 
                  background: 'rgba(76, 175, 80, 0.25)', 
                  color: '#81C784', 
                  fontSize: '0.72rem', 
                  fontWeight: '700', 
                  padding: '2px 8px', 
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#81C784' }}></span>
                  Mətbəx & Bar Canlı
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#A3968F', margin: 0 }}>
                45 İstiqlaliyyət küçəsi • Heyət & İdarəetmə Paneli
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={onAddTestOrder} 
              className="btn-secondary" 
              style={{ padding: '8px 14px', fontSize: '0.8rem', background: '#3C2A21', color: '#EBD3BE', borderColor: 'rgba(235, 211, 190, 0.2)' }}
              title="Test sifarişi əlavə edərək sistemin işini nümayiş etdirin"
            >
              <Plus size={15} />
              <span>+ Test Sifariş Əlavə Et</span>
            </button>

            <button 
              onClick={onClose} 
              className="btn-primary" 
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <ArrowLeft size={15} />
              <span>Müştəri Saytına Qayıt</span>
            </button>

            <button 
              onClick={onLogout} 
              style={{ color: '#A3968F', padding: '8px' }}
              title="Çıxış"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Tabs Row */}
      <div className="admin-nav-tabs-bar">
        <div className="container">
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className={`admin-tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <Utensils size={16} />
              <span>Mətbəx & Bar Sifarişləri</span>
              {pendingOrdersCount > 0 && (
                <span className="admin-tab-counter">{pendingOrdersCount}</span>
              )}
            </button>

            <button 
              className={`admin-tab-btn ${activeTab === 'reservations' ? 'active' : ''}`}
              onClick={() => setActiveTab('reservations')}
            >
              <Calendar size={16} />
              <span>Masa & Vorkşop Rezervləri</span>
              {pendingReservationsCount > 0 && (
                <span className="admin-tab-counter">{pendingReservationsCount}</span>
              )}
            </button>

            <button 
              className={`admin-tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <TrendingUp size={16} />
              <span>Gündəlik İcmal & Kassa</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="container" style={{ padding: '32px 24px', flex: 1 }}>
        {/* TAB 1: KITCHEN ORDERS */}
        {activeTab === 'orders' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  🍳 Mətbəx & Bar Canlı Biletləri
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Saytdan və səbətdən daxil olan sifarişlərin real vaxtda idarə edilməsi
                </p>
              </div>

              {/* Status Filter */}
              <div style={{ display: 'flex', gap: '6px', background: 'var(--bg-secondary)', padding: '4px', borderRadius: 'var(--radius-full)' }}>
                <button 
                  onClick={() => setFilterStatus('all')}
                  className={`admin-filter-pill ${filterStatus === 'all' ? 'active' : ''}`}
                >
                  Hamısı ({orders.length})
                </button>
                <button 
                  onClick={() => setFilterStatus('new')}
                  className={`admin-filter-pill ${filterStatus === 'new' ? 'active' : ''}`}
                >
                  Yeni ({orders.filter(o => o.status === 'new').length})
                </button>
                <button 
                  onClick={() => setFilterStatus('preparing')}
                  className={`admin-filter-pill ${filterStatus === 'preparing' ? 'active' : ''}`}
                >
                  Hazırlanır ({orders.filter(o => o.status === 'preparing').length})
                </button>
                <button 
                  onClick={() => setFilterStatus('ready')}
                  className={`admin-filter-pill ${filterStatus === 'ready' ? 'active' : ''}`}
                >
                  Hazırdır ({orders.filter(o => o.status === 'ready').length})
                </button>
              </div>
            </div>

            {/* Orders Cards Grid */}
            {filteredOrders.length === 0 ? (
              <div className="admin-empty-state">
                <Utensils size={40} style={{ color: 'var(--text-light)', marginBottom: '12px' }} />
                <h4>Hazırda bu kateqoriyada sifariş yoxdur</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Yuxarıdakı "+ Test Sifariş Əlavə Et" düyməsi ilə nümunə sifariş göndərə bilərsiniz.
                </p>
              </div>
            ) : (
              <div className="admin-orders-grid">
                {filteredOrders.map((order) => (
                  <div key={order.id} className={`admin-order-card status-${order.status}`}>
                    {/* Header */}
                    <div className="admin-order-card-header">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                            #{order.id}
                          </span>
                          <span className={`admin-order-type-badge type-${order.type}`}>
                            {order.type === 'takeaway' ? '🥡 Takeaway (Özünlə Apar)' : `🍽️ Masada (${order.tableNumber || 'Zal'})`}
                          </span>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
                          {order.timeAgo || 'İndicə'}
                        </span>
                      </div>
                      <div>
                        {getStatusBadge(order.status)}
                      </div>
                    </div>

                    {/* Customer */}
                    <div style={{ margin: '14px 0', padding: '10px 14px', background: 'var(--bg-secondary)', borderRadius: '10px', fontSize: '0.86rem' }}>
                      <p style={{ fontWeight: '700', color: 'var(--text-main)' }}>👤 {order.customerName}</p>
                      <p style={{ color: 'var(--text-muted)' }}>📞 {order.phone}</p>
                    </div>

                    {/* Items */}
                    <div className="admin-order-items-list">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="admin-order-item-row">
                          <span style={{ fontWeight: '700', color: 'var(--accent-warm)', width: '28px' }}>
                            {item.quantity}x
                          </span>
                          <span style={{ flex: 1, color: 'var(--text-main)', fontWeight: '600' }}>
                            {item.name}
                          </span>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            {(item.price * item.quantity).toFixed(2)} ₼
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Notes */}
                    {order.notes && (
                      <div className="admin-order-note-box">
                        <strong>Qeyd:</strong> {order.notes}
                      </div>
                    )}

                    {/* Footer / Total & Actions */}
                    <div className="admin-order-card-footer">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ümumi Məbləğ:</span>
                        <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)' }}>
                          {order.total.toFixed(2)} ₼
                        </span>
                      </div>

                      {/* Action buttons to progress order status */}
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {order.status === 'new' && (
                          <button 
                            onClick={() => onUpdateOrderStatus(order.id, 'preparing')}
                            className="btn-primary"
                            style={{ flex: 1, padding: '10px', fontSize: '0.85rem' }}
                          >
                            <span>Hazırlamağa Başla</span>
                          </button>
                        )}
                        {order.status === 'preparing' && (
                          <button 
                            onClick={() => onUpdateOrderStatus(order.id, 'ready')}
                            className="btn-primary"
                            style={{ flex: 1, padding: '10px', fontSize: '0.85rem', background: '#2E7D32' }}
                          >
                            <CheckCircle size={15} />
                            <span>Hazırdır / Müştəriyə Ver</span>
                          </button>
                        )}
                        {order.status === 'ready' && (
                          <button 
                            disabled
                            className="btn-secondary"
                            style={{ flex: 1, padding: '10px', fontSize: '0.85rem', background: '#E8F5E9', color: '#2E7D32', borderColor: '#C8E6C9' }}
                          >
                            <CheckCircle size={15} />
                            <span>Tamamlanmış Sifariş</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: RESERVATIONS */}
        {activeTab === 'reservations' && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                📅 Masa və Vorkşop Rezervləri
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Qonaqların saytdan etdiyi masa sifarişləri və Bazar günü toxuma vorkşopu qeydiyyatları
              </p>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Rezerv ID</th>
                    <th>Qonaq</th>
                    <th>Telefon</th>
                    <th>Tarix & Saat</th>
                    <th>Qonaq Sayı</th>
                    <th>Seçilmiş Zal</th>
                    <th>Məqsəd</th>
                    <th>Status</th>
                    <th>Əməliyyatlar</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((res) => (
                    <tr key={res.id}>
                      <td style={{ fontWeight: '700', color: 'var(--accent-warm)' }}>#{res.id}</td>
                      <td>
                        <strong>{res.name}</strong>
                        {res.notes && (
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '2px' }}>
                            Qeyd: {res.notes}
                          </div>
                        )}
                      </td>
                      <td>
                        <a href={`tel:${res.phone}`} style={{ color: 'inherit' }}>
                          {res.phone}
                        </a>
                      </td>
                      <td>
                        <strong>{res.date}</strong>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{res.time}</div>
                      </td>
                      <td style={{ textAlign: 'center', fontWeight: '700' }}>{res.guests} nəfər</td>
                      <td>
                        <span style={{ fontSize: '0.85rem', background: 'var(--bg-secondary)', padding: '3px 8px', borderRadius: 'var(--radius-full)' }}>
                          {res.zone}
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: '0.82rem', fontWeight: '600' }}>{res.type}</span>
                      </td>
                      <td>{getReservationBadge(res.status)}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {res.status === 'pending' && (
                            <button 
                              onClick={() => onUpdateReservationStatus(res.id, 'confirmed')}
                              className="btn-secondary"
                              style={{ padding: '6px 10px', fontSize: '0.75rem', color: '#2E7D32', borderColor: '#A5D6A7' }}
                              title="Təsdiqlə"
                            >
                              <CheckCircle size={14} />
                              <span>Təsdiqlə</span>
                            </button>
                          )}
                          <button 
                            onClick={() => handleSendWhatsAppConfirmation(res)}
                            className="btn-secondary"
                            style={{ padding: '6px 10px', fontSize: '0.75rem', background: '#E8F5E9', color: '#1B5E20', borderColor: '#81C784' }}
                            title="WhatsApp ilə müştəriyə təsdiq göndər"
                          >
                            <MessageCircle size={14} />
                            <span>WhatsApp</span>
                          </button>
                          {res.status !== 'cancelled' && (
                            <button 
                              onClick={() => onUpdateReservationStatus(res.id, 'cancelled')}
                              className="btn-secondary"
                              style={{ padding: '6px 10px', fontSize: '0.75rem', color: '#C62828', borderColor: '#FFCDD2' }}
                              title="Ləğv et"
                            >
                              <XCircle size={14} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: ANALYTICS & SUMMARY */}
        {activeTab === 'analytics' && (
          <div>
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                📊 Gündəlik İdarəetmə & Kassa İcmalı
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                The Kaffe Loopie canlı fəaliyyət göstəriciləri
              </p>
            </div>

            {/* KPI Cards */}
            <div className="admin-kpi-grid">
              <div className="admin-kpi-card">
                <span className="kpi-label">Bugünkü Sifariş Dövriyyəsi</span>
                <span className="kpi-value">{totalRevenue.toFixed(2)} ₼</span>
                <span className="kpi-note">0% komissiya (birbaşa kafeyə çatır)</span>
              </div>
              <div className="admin-kpi-card">
                <span className="kpi-label">Toplam Sifariş Sayı</span>
                <span className="kpi-value">{orders.length}</span>
                <span className="kpi-note">{pendingOrdersCount} aktiv hazırlanır</span>
              </div>
              <div className="admin-kpi-card">
                <span className="kpi-label">Masa Rezervləri</span>
                <span className="kpi-value">{reservations.length}</span>
                <span className="kpi-note">{pendingReservationsCount} təsdiq gözləyən</span>
              </div>
              <div className="admin-kpi-card">
                <span className="kpi-label">Orta Çek (Average Ticket)</span>
                <span className="kpi-value">
                  {orders.length > 0 ? (totalRevenue / orders.length).toFixed(2) : '0.00'} ₼
                </span>
                <span className="kpi-note">Specialty kofe & səhər yeməkləri</span>
              </div>
            </div>

            {/* Business value note for the cafe owner */}
            <div style={{
              marginTop: '32px',
              padding: '28px',
              borderRadius: '20px',
              background: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Sparkles size={22} style={{ color: 'var(--accent-warm)' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700' }}>
                  Kafe Sahibi Üçün Rəqəmsal Üstünlük:
                </h4>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                Bu portal vasitəsilə mətbəx və barista heyəti daxil olan sifarişləri dərhal ekranda görür, statusunu dəyişir və müştəriyə WhatsApp vasitəsilə 1 kliklə xəbər verir. Wolt və ya Bolt Food-a <strong>25%–30% komissiya</strong> ödəmədən qonaqlar birbaşa kafedən takeaway və ya stol sifarişi edə bilir.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
