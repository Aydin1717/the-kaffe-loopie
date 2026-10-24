export const initialOrders = [
  {
    id: "KL-101",
    customerName: "Murad Rəhimov",
    phone: "+994 50 443 21 09",
    type: "takeaway", // 'takeaway' | 'dinein'
    items: [
      { name: "Artisan Flat White", quantity: 2, price: 6.50 },
      { name: "House Syrniki with Wild Berry Coulis", quantity: 1, price: 10.50 }
    ],
    total: 23.50,
    notes: "Yulaf südü ilə olsun, darçın az olsun zəhmət olmasa.",
    status: "preparing", // 'new' | 'preparing' | 'ready'
    timeAgo: "6 dəqiqə əvvəl",
    timestamp: Date.now() - 360000
  },
  {
    id: "KL-102",
    customerName: "Aysel Qasımova",
    phone: "+994 55 980 12 34",
    type: "dinein",
    tableNumber: "Masa 4 (Pəncərə)",
    items: [
      { name: "V60 Hand Pour-Over (Ethiopia)", quantity: 1, price: 8.00 },
      { name: "San Sebastián Burnt Cheesecake", quantity: 1, price: 8.50 }
    ],
    total: 16.50,
    notes: "Kofe isti qrafində ayrıca verilsin.",
    status: "ready",
    timeAgo: "14 dəqiqə əvvəl",
    timestamp: Date.now() - 840000
  },
  {
    id: "KL-103",
    customerName: "Camal Tağızadə",
    phone: "+994 70 312 90 88",
    type: "takeaway",
    items: [
      { name: "Ceremonial Uji Matcha Latte", quantity: 1, price: 7.50 },
      { name: "French Almond Croissant", quantity: 1, price: 5.50 }
    ],
    total: 13.00,
    notes: "Gəlirəm götürməyə (5 dəqiqəyə)",
    status: "new",
    timeAgo: "İndicə daxil oldu",
    timestamp: Date.now() - 60000
  }
];

export const initialReservations = [
  {
    id: "RES-201",
    name: "Nigar Həsənova",
    phone: "+994 50 711 22 33",
    date: "Bugün (Today)",
    time: "18:30",
    guests: "2",
    zone: "Window Nook (Pişiklərə yaxın)",
    type: "Casual Coffee & Hangout",
    notes: "Pişiklərə yaxın pəncərə önü masası xahiş olunur.",
    status: "confirmed", // 'confirmed' | 'pending' | 'cancelled'
    timestamp: Date.now() - 7200000
  },
  {
    id: "RES-202",
    name: "Eldar Məmmədli",
    phone: "+994 55 600 44 88",
    date: "Sabah (Tomorrow)",
    time: "11:00",
    guests: "4",
    zone: "Main Wooden Tables",
    type: "Breakfast / Brunch",
    notes: "Uşaq stulu lazımdır.",
    status: "pending",
    timestamp: Date.now() - 3600000
  },
  {
    id: "RES-203",
    name: "Lalə Əliyeva",
    phone: "+994 77 555 12 90",
    date: "Bazar günü (Sunday)",
    time: "14:00",
    guests: "2",
    zone: "Main Wooden Tables",
    type: "Sunday Crochet Workshop (Toxuma Vorkşopu)",
    notes: "Vorkşop qeydiyyatı.",
    status: "confirmed",
    timestamp: Date.now() - 10800000
  }
];
