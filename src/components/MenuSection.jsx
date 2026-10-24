import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, Coffee, Utensils, Cake, Wine } from 'lucide-react';
import { menuData } from '../data/menuData';

export const MenuSection = ({ currentLang, t, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState({});

  const categories = [
    { key: 'all', label: t.menu.all, icon: null },
    { key: 'coffee', label: t.menu.coffee, icon: <Coffee size={15} /> },
    { key: 'breakfast', label: t.menu.breakfast, icon: <Utensils size={15} /> },
    { key: 'desserts', label: t.menu.desserts, icon: <Cake size={15} /> },
    { key: 'tea_drinks', label: t.menu.tea_drinks, icon: <Wine size={15} /> },
  ];

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const trans = item.translations[currentLang] || item.translations.en;
      const matchesQuery = searchQuery.trim() === '' || 
        trans.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trans.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trans.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery, currentLang]);

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const getBadgeLabel = (badgeKey) => {
    switch(badgeKey) {
      case 'signature': return t.menu.signature;
      case 'bestseller': return t.menu.bestseller;
      case 'catFavorite': return t.menu.catFavorite;
      case 'vegan': return t.menu.vegan;
      default: return null;
    }
  };

  return (
    <section className="section-padding" id="menu">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Specialty & Kitchen</span>
          </div>
          <h2 className="section-title">{t.menu.title}</h2>
          <p className="section-subtitle">{t.menu.subtitle}</p>
        </div>

        {/* Controls: Search & Categories */}
        <div className="menu-controls">
          <div className="menu-search-wrapper">
            <Search size={18} className="search-icon-pos" />
            <input 
              type="text" 
              className="menu-search-input"
              placeholder={t.menu.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`category-tab-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.icon && <span style={{ display: 'inline-flex', marginRight: '6px' }}>{cat.icon}</span>}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-light)' }}>
            <p style={{ fontSize: '1.1rem' }}>{t.menu.emptySearch}</p>
          </div>
        ) : (
          <div className="menu-grid">
            {filteredItems.map((item) => {
              const trans = item.translations[currentLang] || item.translations.en;
              const isAdded = !!addedItemIds[item.id];
              const badgeText = getBadgeLabel(item.badge);

              return (
                <div key={item.id} className="menu-item-card">
                  <div className="item-thumb-col">
                    <img src={item.image} alt={trans.name} loading="lazy" />
                  </div>

                  <div className="item-content-col">
                    <div className="item-header-row">
                      <h4 className="item-name">{trans.name}</h4>
                      <span className="item-price">{item.price.toFixed(2)} {t.menu.currency}</span>
                    </div>

                    <p className="item-desc">{trans.desc}</p>

                    <div className="item-tags-row">
                      {badgeText && (
                        <span className="item-badge-signature">{badgeText}</span>
                      )}
                      {trans.tags.map((tag, i) => (
                        <span key={i} className="item-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="item-footer-row">
                      <button 
                        className="add-bag-btn"
                        onClick={() => handleAdd(item)}
                        style={isAdded ? { background: 'var(--accent-sage)', color: '#FFFFFF', borderColor: 'var(--accent-sage)' } : {}}
                      >
                        {isAdded ? (
                          <>
                            <Check size={14} />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus size={14} />
                            <span>{t.menu.addToBag}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
