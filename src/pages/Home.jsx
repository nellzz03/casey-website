import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const curatedFilms = [
    {
      id: 'jG7dSXcfVqE',
      title: "DO WHAT YOU CAN'T",
      year: '2017',
      category: 'MANIFESTO',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      ytThumbnail: 'https://img.youtube.com/vi/jG7dSXcfVqE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=jG7dSXcfVqE'
    },
    {
      id: 'qNYYMNAZkBw',
      title: 'SNOWBOARDING WITH THE NYPD',
      year: '2016',
      category: 'NYC • DOCUMENTARY',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      ytThumbnail: 'https://img.youtube.com/vi/qNYYMNAZkBw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=qNYYMNAZkBw'
    },
    {
      id: 'bzE-IMaegzQ',
      title: 'BIKE LANES',
      year: '2011',
      category: 'VIRAL INVESTIGATION',
      thumbnail: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
      ytThumbnail: 'https://img.youtube.com/vi/bzE-IMaegzQ/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=bzE-IMaegzQ'
    }
  ];

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="hero" aria-label="Hero Introduction">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80"
            alt="Cinematic street scene with film grain atmosphere"
            loading="eager"
          />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-eyebrow">
            00 — PROLOGUE &bull; FILMMAKER &bull; STORYTELLER &bull; NEW YORK CITY
          </p>

          <h1 className="hero-title">
            THE STORY
            <br />
            <span className="accent">NEVER STOPS.</span>
          </h1>

          <p className="hero-description">
            A relentless pursuit of visual storytelling, everyday adventure,
            unconventional filmmaking, and the moments that demand we stop and look again.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/films" className="hero-cta" id="hero-explore-films-cta">
              EXPLORE FILMS →
            </Link>
            <a
              href="#featured"
              className="text-link"
              style={{ color: 'var(--text-secondary)' }}
            >
              WATCH FEATURED FILM ↓
            </a>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>SCROLL</span>
          <div className="scroll-indicator-line" />
        </div>
      </section>

      {/* ==================== FEATURED FILM ==================== */}
      <section className="featured-film" id="featured" aria-label="Featured Film">
        <div className="featured-film-header">
          <div className="section-header-row">
            <span className="section-number">01</span>
            <span className="section-label">FEATURED FILM</span>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: '0.9', letterSpacing: '-0.04em' }}>
            MAKE IT <span className="accent">COUNT.</span>
          </h2>
        </div>

        {/* Cinematic Video Player Container */}
        <div className="film-player" id="featured-film-player">
          {isPlaying ? (
            <div className="film-player-iframe">
              <iframe
                src="https://www.youtube-nocookie.com/embed/WxfZkMm3wcg?autoplay=1&rel=0&modestbranding=1"
                title="Make It Count - Casey Neistat"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                type="button"
                className="film-player-close"
                onClick={() => setIsPlaying(false)}
                aria-label="Close video player"
              >
                ✕
              </button>
            </div>
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsPlaying(true);
                }
              }}
              aria-label="Play featured film: Make It Count"
            >
              <img
                src="https://img.youtube.com/vi/WxfZkMm3wcg/maxresdefault.jpg"
                alt="Make It Count film preview"
                className="film-player-thumbnail"
                onError={(e) => {
                  e.currentTarget.src = 'https://img.youtube.com/vi/WxfZkMm3wcg/hqdefault.jpg';
                }}
              />
              <div className="film-player-overlay" />
              <div className="film-player-play">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Film Meta Information */}
        <div className="featured-film-info">
          <div>
            <h3 className="featured-film-title">MAKE IT COUNT</h3>
            <div className="featured-film-meta">
              <span className="film-year">2012</span>
              <span className="film-dot" />
              <span className="film-category-label">INDEPENDENT SHORT FILM</span>
              <span className="film-dot" />
              <span className="film-year">4:37 RUNTIME</span>
            </div>
            <p style={{ maxWidth: '640px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginTop: '16px' }}>
              Nike provided a production budget to make a film about what it means to #MakeItCount.
              Instead of making a commercial, Casey and Max Joseph spent the entire budget traveling
              around the globe until the money ran out. 10 days, 13 countries, 3 continents.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <a
              href="https://www.youtube.com/watch?v=WxfZkMm3wcg"
              target="_blank"
              rel="noopener noreferrer"
              className="featured-film-watch"
              id="watch-youtube-link"
            >
              WATCH ON YOUTUBE ↗
            </a>
            {!isPlaying && (
              <button
                type="button"
                className="cta-button"
                onClick={() => setIsPlaying(true)}
                style={{ padding: '12px 24px', fontSize: '10px' }}
              >
                PLAY IN BROWSER ▶
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ==================== MORE FILMS PREVIEW ==================== */}
      <section className="more-films" aria-label="Curated Archives">
        <div className="more-films-header">
          <div>
            <span className="section-label">CURATED ARCHIVES</span>
            <h3 className="more-films-title" style={{ marginTop: '8px' }}>
              SIGNATURE <span className="accent">RELEASES.</span>
            </h3>
          </div>
          <Link to="/films" className="text-link" id="view-all-films-link">
            VIEW ALL 06 FILMS →
          </Link>
        </div>

        <div className="more-films-grid">
          {curatedFilms.map((film) => (
            <article key={film.id} className="more-film-card">
              <div className="more-film-card-image">
                <img
                  src={film.ytThumbnail}
                  alt={film.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = film.thumbnail;
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <span className="film-category-label">{film.category}</span>
                <span className="more-film-card-year">{film.year}</span>
              </div>
              <h4 className="more-film-card-title">{film.title}</h4>
              <a
                href={film.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
                style={{ fontSize: '10px', marginTop: '12px', display: 'inline-block' }}
              >
                WATCH FILM ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ==================== INTRO / MANIFESTO ==================== */}
      <section className="home-intro" aria-label="Creator Philosophy">
        <div className="home-intro-content">
          <p className="section-label">PHILOSOPHY &bull; 368 BROADWAY</p>
          <h2>
            DO WHAT YOU
            <br />
            <span className="accent">CAN'T.</span>
          </h2>
          <p className="home-intro-text">
            Every story begins as an idea most people consider unreasonable.
            From guerrilla filming on rollerblades through Manhattan traffic to documented
            journeys across sixty countries, the work is grounded in one rule: do not wait for
            permission. Ideas are cheap; execution is the currency.
          </p>
          <Link to="/story" className="cta-button" id="read-story-cta">
            READ THE FULL STORY →
          </Link>
        </div>

        <div className="home-intro-image">
          <img
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80"
            alt="Filmmaker workspace with gear, cameras, and creative equipment"
            loading="lazy"
          />
        </div>
      </section>

      {/* ==================== DUAL TEASERS ==================== */}
      <section className="home-teasers" aria-label="Exploration Teasers">
        <div className="home-teaser home-teaser-story">
          <span className="home-teaser-number">02</span>
          <p className="section-label">ORIGIN &bull; THE DOCUMENTARY</p>
          <h3 className="home-teaser-title">
            THE CHRONICLES
            <br />
            <span className="accent">OF 368.</span>
          </h3>
          <p className="home-teaser-description">
            From washing dishes at 17 to building an independent studio on Broadway,
            HBO documentary commissions, and creating the modern video diary.
          </p>
          <Link to="/story" className="text-link" style={{ alignSelf: 'flex-start' }}>
            EXPLORE THE TIMELINE →
          </Link>
        </div>

        <div className="home-teaser home-teaser-community">
          <span className="home-teaser-number">03</span>
          <p className="section-label">NETWORK &bull; JOIN THE DISPATCH</p>
          <h3 className="home-teaser-title">
            NEVER STOP
            <br />
            <span className="accent">CREATING.</span>
          </h3>
          <p className="home-teaser-description">
            Direct dispatches from behind the edit bay. New film drops, creative essays,
            unreleased behind-the-scenes notes, and community updates.
          </p>
          <Link to="/community" className="text-link" style={{ alignSelf: 'flex-start' }}>
            JOIN THE COMMUNITY →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;