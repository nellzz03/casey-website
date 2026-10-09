import { useState, useEffect } from 'react';

const FILMS_DATA = [
  {
    id: 'WxfZkMm3wcg',
    title: 'MAKE IT COUNT',
    year: '2012',
    category: 'DOCUMENTARY',
    categoryLabel: 'INDEPENDENT NARRATIVE',
    runtime: '4:37',
    gridClass: 'large',
    description: 'Nike gave a budget for a commercial. Casey spent the entire budget traveling around the world until the money ran out in 10 days.',
    thumbnail: 'https://img.youtube.com/vi/WxfZkMm3wcg/maxresdefault.jpg',
    fallbackThumb: 'https://img.youtube.com/vi/WxfZkMm3wcg/hqdefault.jpg'
  },
  {
    id: 'jG7dSXcfVqE',
    title: "DO WHAT YOU CAN'T",
    year: '2017',
    category: 'MANIFESTO',
    categoryLabel: 'CREATIVE MANIFESTO',
    runtime: '4:06',
    gridClass: 'medium',
    description: 'A visual proclamation to creators, misfits, and anyone told their dreams are unrealistic or illegitimate.',
    thumbnail: 'https://img.youtube.com/vi/jG7dSXcfVqE/maxresdefault.jpg',
    fallbackThumb: 'https://img.youtube.com/vi/jG7dSXcfVqE/hqdefault.jpg'
  },
  {
    id: 'qNYYMNAZkBw',
    title: 'SNOWBOARDING WITH THE NYPD',
    year: '2016',
    category: 'VIRAL',
    categoryLabel: 'NYC ADVENTURE',
    runtime: '2:41',
    gridClass: 'medium',
    description: 'During a historic historic blizzard that shut down NYC traffic, Casey snowboards through Times Square towed by a Jeep.',
    thumbnail: 'https://img.youtube.com/vi/qNYYMNAZkBw/maxresdefault.jpg',
    fallbackThumb: 'https://img.youtube.com/vi/qNYYMNAZkBw/hqdefault.jpg'
  },
  {
    id: 'bzE-IMaegzQ',
    title: 'BIKE LANES',
    year: '2011',
    category: 'VIRAL',
    categoryLabel: 'GUERRILLA ACTIVISM',
    runtime: '3:00',
    gridClass: 'large',
    description: 'Fined $50 for riding outside a bike lane blocked by police cars and obstacles, Casey demonstrates why by crashing into every obstruction.',
    thumbnail: 'https://img.youtube.com/vi/bzE-IMaegzQ/maxresdefault.jpg',
    fallbackThumb: 'https://img.youtube.com/vi/bzE-IMaegzQ/hqdefault.jpg'
  },
  {
    id: '84WIaK3bl_s',
    title: 'THE $21,000 FIRST CLASS AIRPLANE SEAT',
    year: '2016',
    category: 'TRAVEL',
    categoryLabel: 'EXPERIENTIAL STORY',
    runtime: '9:16',
    gridClass: 'wide',
    description: 'An upgraded transatlantic flight on Emirates turned into an exhaustive, witty documentary examining ultra-luxury air travel.',
    thumbnail: 'https://img.youtube.com/vi/84WIaK3bl_s/maxresdefault.jpg',
    fallbackThumb: 'https://img.youtube.com/vi/84WIaK3bl_s/hqdefault.jpg'
  },
  {
    id: 'At3xcj-pTjg',
    title: 'HUMAN FLYING DRONE',
    year: '2016',
    category: 'VIRAL',
    categoryLabel: 'HOLIDAY STUNT',
    runtime: '4:21',
    gridClass: 'narrow',
    description: 'Custom-built octocopter with 16 rotors pulls a snowboarder across Finnish snow peaks and lifts him 50 feet in the air.',
    thumbnail: 'https://img.youtube.com/vi/At3xcj-pTjg/maxresdefault.jpg',
    fallbackThumb: 'https://img.youtube.com/vi/At3xcj-pTjg/hqdefault.jpg'
  }
];

const CATEGORIES = ['ALL', 'MANIFESTO', 'DOCUMENTARY', 'VIRAL', 'TRAVEL'];

function Films() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedFilm, setSelectedFilm] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedFilm(null);
      }
    };
    if (selectedFilm) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedFilm]);

  const filteredFilms = activeCategory === 'ALL'
    ? FILMS_DATA
    : FILMS_DATA.filter((film) => film.category === activeCategory);

  return (
    <section className="films-page" aria-label="Films Archive">
      {/* Header */}
      <div className="films-page-header">
        <div className="section-header-row">
          <span className="section-number">01</span>
          <span className="section-label">SELECTED WORKS &bull; ARCHIVE</span>
        </div>

        <h1 className="films-page-title">
          STORIES IN
          <br />
          <span className="accent">MOTION.</span>
        </h1>

        <p className="films-page-description">
          A curated collection of independent films, viral investigations,
          cinematic manifestos, and urban stunts recorded across New York City and the world.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="films-filters" role="tablist" aria-label="Film categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Asymmetric Film Grid */}
      <div className="films-grid">
        {filteredFilms.map((film) => (
          <article
            key={film.id}
            className={`film-grid-item ${film.gridClass}`}
            onClick={() => setSelectedFilm(film)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedFilm(film);
              }
            }}
            aria-label={`Watch ${film.title}`}
          >
            <div className="film-grid-item-image">
              <img
                src={film.thumbnail}
                alt={film.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = film.fallbackThumb;
                }}
              />
              <div className="film-grid-item-overlay" />
              <div className="film-grid-item-play" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="film-grid-item-info">
              <div className="film-grid-item-category">
                {film.categoryLabel} &bull; {film.runtime}
              </div>
              <h3 className="film-grid-item-title">{film.title}</h3>
              <div className="film-grid-item-bottom">
                <span className="film-grid-item-year">{film.year}</span>
                <span className="film-grid-item-link">PLAY FILM ▶</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Video Modal */}
      {selectedFilm && (
        <div
          className="video-modal-backdrop"
          onClick={() => setSelectedFilm(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-film-title"
        >
          <div
            className="video-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-modal-header">
              <div>
                <span className="section-label" style={{ fontSize: '10px' }}>
                  NOW PLAYING &bull; {selectedFilm.categoryLabel}
                </span>
              </div>
              <button
                type="button"
                className="video-modal-close"
                onClick={() => setSelectedFilm(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="video-modal-iframe-wrapper">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedFilm.id}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedFilm.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="video-modal-info">
              <div>
                <h2 id="modal-film-title" style={{ fontSize: '24px', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                  {selectedFilm.title}
                </h2>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="film-year">{selectedFilm.year}</span>
                  <span className="film-dot" />
                  <span className="film-year">{selectedFilm.runtime}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', maxWidth: '640px' }}>
                  {selectedFilm.description}
                </p>
              </div>

              <a
                href={`https://www.youtube.com/watch?v=${selectedFilm.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                style={{ padding: '12px 20px', whiteSpace: 'nowrap', fontSize: '10px' }}
              >
                OPEN ON YOUTUBE ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Films;