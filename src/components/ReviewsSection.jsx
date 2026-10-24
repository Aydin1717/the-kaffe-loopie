import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

export const ReviewsSection = ({ currentLang, t }) => {
  return (
    <section className="section-padding" id="reviews" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Star size={14} fill="#C87D55" />
            <span>{t.reviews.badge}</span>
          </div>
          <h2 className="section-title">{t.reviews.title}</h2>
          <p className="section-subtitle">{t.reviews.subtitle}</p>

          <div style={{ marginTop: '20px' }}>
            <a 
              href="https://www.google.com/maps/place/The+Kaffe+Loopie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            >
              <span>{t.reviews.leaveReview}</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <div className="reviews-grid">
          {reviewsData.map((review) => {
            const trans = review.translations[currentLang] || review.translations.en;

            return (
              <div key={review.id} className="review-card">
                <div>
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#E29E38" color="#E29E38" />
                    ))}
                  </div>
                  <p className="review-text">"{trans.text}"</p>
                </div>

                <div className="review-author-row">
                  <div>
                    <h5 className="author-name">{review.author}</h5>
                    <p className="author-role">{review.role} • {review.date}</p>
                  </div>
                  <div className="verified-tag">
                    <CheckCircle size={12} />
                    <span>{t.reviews.verifiedGuest}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
