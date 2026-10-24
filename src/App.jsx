import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import { initialOrders, initialReservations } from './data/initialStaffData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { AtmospherePillars } from './components/AtmospherePillars';
import { MenuSection } from './components/MenuSection';
import { CatHavenSection } from './components/CatHavenSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { ReservationModal } from './components/ReservationModal';
import { TakeawayCartDrawer } from './components/TakeawayCartDrawer';
import { StaffLoginModal } from './components/StaffLoginModal';
import { StaffKitchenDashboard } from './components/StaffKitchenDashboard';
import { Footer } from './components/Footer';

export function App() {
  const [currentLang, setCurrentLang] = useState('az');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  // Staff / Kitchen (Mətbəx) Portal State
  const [isStaffLoggedIn, setIsStaffLoggedIn] = useState(false);
  const [isStaffLoginModalOpen, setIsStaffLoginModalOpen] = useState(false);
  const [isStaffDashboardOpen, setIsStaffDashboardOpen] = useState(false);

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('loopie_orders');
      return saved ? JSON.parse(saved) : initialOrders;
    } catch {
      return initialOrders;
    }
  });

  const [reservations, setReservations] = useState(() => {
    try {
      const saved = localStorage.getItem('loopie_reservations');
      return saved ? JSON.parse(saved) : initialReservations;
    } catch {
      return initialReservations;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('loopie_orders', JSON.stringify(orders));
    } catch {
      // ignore
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('loopie_reservations', JSON.stringify(reservations));
    } catch {
      // ignore
    }
  }, [reservations]);

  const t = translations[currentLang] || translations.az;

  // Cart operations
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity: newQty } : i))
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Staff & Kitchen Portal Operations
  const handleOpenStaffPortal = () => {
    if (isStaffLoggedIn) {
      setIsStaffDashboardOpen(true);
    } else {
      setIsStaffLoginModalOpen(true);
    }
  };

  const handleStaffLoginSuccess = () => {
    setIsStaffLoggedIn(true);
    setIsStaffDashboardOpen(true);
  };

  const handleStaffLogout = () => {
    setIsStaffLoggedIn(false);
    setIsStaffDashboardOpen(false);
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const handleUpdateReservationStatus = (resId, newStatus) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === resId ? { ...r, status: newStatus } : r))
    );
  };

  // Add new order placed from customer site
  const handlePlaceOrder = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  // Add new reservation booked from customer site
  const handleAddReservation = (newRes) => {
    setReservations((prev) => [newRes, ...prev]);
  };

  // Simulate an incoming order for live demonstration to the cafe owner
  const handleAddTestOrder = () => {
    const demoItems = [
      { name: "Artisan Flat White", quantity: 2, price: 6.50 },
      { name: "House Syrniki with Wild Berry Coulis", quantity: 1, price: 10.50 },
      { name: "San Sebastián Burnt Cheesecake", quantity: 1, price: 8.50 }
    ];
    const newDemoOrder = {
      id: `KL-${Math.floor(100 + Math.random() * 900)}`,
      customerName: "Leyla M. (Canlı Demo Sifarişi)",
      phone: "+994 50 212 34 56",
      type: Math.random() > 0.5 ? "takeaway" : "dinein",
      tableNumber: "Masa 2",
      items: demoItems.slice(0, Math.floor(Math.random() * 2) + 1),
      total: 17.00,
      notes: "Zəhmət olmasa yulaf südü ilə və isti verilsin ☕",
      status: "new",
      timeAgo: "İndicə daxil oldu",
      timestamp: Date.now()
    };
    setOrders((prev) => [newDemoOrder, ...prev]);
  };

  return (
    <div className="app-root">
      {/* Main Navbar */}
      <Navbar 
        currentLang={currentLang}
        setLang={setCurrentLang}
        t={t}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReserve={() => setIsReserveOpen(true)}
        isStaffLoggedIn={isStaffLoggedIn}
        onOpenStaffPortal={handleOpenStaffPortal}
      />

      {/* Main Content */}
      <main>
        <Hero 
          t={t} 
          onOpenReserve={() => setIsReserveOpen(true)} 
        />

        <StatsBanner t={t} />

        <AtmospherePillars t={t} />

        <MenuSection 
          currentLang={currentLang}
          t={t}
          onAddToCart={handleAddToCart}
        />

        <CatHavenSection t={t} />

        <GallerySection t={t} />

        <ReviewsSection 
          currentLang={currentLang}
          t={t}
        />

        <LocationHoursSection t={t} />
      </main>

      {/* Footer */}
      <Footer 
        t={t} 
        onOpenReserve={() => setIsReserveOpen(true)} 
        onOpenStaffPortal={handleOpenStaffPortal}
      />

      {/* Modals & Drawers */}
      <ReservationModal 
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
        t={t}
        onAddReservation={handleAddReservation}
      />

      <TakeawayCartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currentLang={currentLang}
        t={t}
        onPlaceOrder={handlePlaceOrder}
      />

      {/* Staff Login Modal */}
      <StaffLoginModal 
        isOpen={isStaffLoginModalOpen}
        onClose={() => setIsStaffLoginModalOpen(false)}
        onLoginSuccess={handleStaffLoginSuccess}
      />

      {/* Staff / Kitchen (Mətbəx) Portal Dashboard */}
      {isStaffDashboardOpen && (
        <StaffKitchenDashboard 
          orders={orders}
          reservations={reservations}
          onUpdateOrderStatus={handleUpdateOrderStatus}
          onUpdateReservationStatus={handleUpdateReservationStatus}
          onAddTestOrder={handleAddTestOrder}
          onClose={() => setIsStaffDashboardOpen(false)}
          onLogout={handleStaffLogout}
        />
      )}
    </div>
  );
}

export default App;
