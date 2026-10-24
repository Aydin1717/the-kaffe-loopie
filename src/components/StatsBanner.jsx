import React from 'react';

export const StatsBanner = ({ t }) => {
  return (
    <div className="container">
      <div className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-col">
              <div className="stat-number">{t.stats.rating}</div>
              <div className="stat-desc">{t.stats.ratingDesc}</div>
            </div>
            <div className="stat-col">
              <div className="stat-number">{t.stats.reviews}</div>
              <div className="stat-desc">{t.stats.reviewsDesc}</div>
            </div>
            <div className="stat-col">
              <div className="stat-number">{t.stats.singleOrigin}</div>
              <div className="stat-desc">{t.stats.singleOriginDesc}</div>
            </div>
            <div className="stat-col">
              <div className="stat-number">{t.stats.cats}</div>
              <div className="stat-desc">{t.stats.catsDesc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
