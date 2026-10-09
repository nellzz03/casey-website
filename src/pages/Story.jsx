import { Link } from 'react-router-dom';

const CHAPTERS = [
  {
    number: 'CHAPTER 01',
    label: '1998 — 2000 &bull; THE BEGINNING',
    title: 'THE DISHWASHER IN MYSTIC',
    paragraphs: [
      'At 17, Casey Neistat dropped out of high school and found himself living in a trailer park with his infant son. He took a job washing dishes in a seafood restaurant in Mystic, Connecticut, making $8 an hour.',
      'He had no connections, no film school degree, and no safety net. But he had an obsessive work ethic and an insatiable desire to tell stories through moving images. In 2001, he packed everything he owned into a truck and headed straight to New York City.'
    ],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Moody New York restaurant and kitchen setting'
  },
  {
    number: 'CHAPTER 02',
    label: '2001 — 2010 &bull; GUERRILLA FILMMAKING',
    title: "IPOD'S DIRTY SECRET & HBO",
    paragraphs: [
      'Teaming up with his brother Van Neistat and contemporary artist Tom Sachs, Casey began creating handmade short films. In 2003, frustrated by Apple refusing to replace an iPod battery, they spray-painted warnings across NYC bus ads and uploaded a 3-minute video to the nascent internet.',
      'The video racked up over six million views in days—before YouTube even existed. That uncompromising, guerrilla storytelling caught the attention of HBO, who purchased an eight-episode series titled "The Neistat Brothers" for a seven-figure deal in 2008.'
    ],
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=80',
    alt: 'Vintage cameras and film production gear'
  },
  {
    number: 'CHAPTER 03',
    label: '2010 — PRESENT &bull; THE TEMPLE',
    title: '368 BROADWAY',
    paragraphs: [
      'In Lower Manhattan, 368 Broadway became more than just a studio—it became a physical manifesto. Every tool had an outlined silhouette on pegboards. Red toolbox drawers were labeled in bold stencil font. Broken skateboards hung alongside customized camera rigs.',
      'The studio proved that high-level creativity does not require pristine corporate polish; it demands speed, resourcefulness, and a workspace organized for instantaneous execution.'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    alt: 'Industrial workshop with organized tools and creative gear'
  },
  {
    number: 'CHAPTER 04',
    label: '2015 — 2016 &bull; THE EXPERIMENT',
    title: 'THE DAILY VLOG REVOLUTION',
    paragraphs: [
      'On March 25, 2015, Casey embarked on an audacious challenge: produce, shoot, edit, and publish a cinematic movie every single day, without fail.',
      'For over 800 consecutive days, he captured Manhattan on boosted boards, engineered revolutionary timelapse techniques, and normalized drone cinematography in daily vlogging. He fundamentally changed how the world understood digital video narrative, amassing over 12 million subscribers.'
    ],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
    alt: 'Filmmaker operating drone and capturing cityscapes'
  },
  {
    number: 'CHAPTER 05',
    label: '2017 — BEYOND &bull; THE ETHOS',
    title: "DO WHAT YOU CAN'T",
    paragraphs: [
      'From co-founding multimedia app Beme and selling it to CNN, to snowboarding through Times Square during a blizzard, Casey’s overarching thesis has remained resolute:',
      'Do not ask for permission. Do not wait for ideal conditions. When someone tells you that your vision is impossible, treat it as confirmation that you are aiming in the right direction.'
    ],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    alt: 'New York City urban landscape with glowing city lights'
  }
];

const TIMELINE = [
  {
    year: '2001',
    title: 'Arrival in New York City',
    description: 'Arrives in NYC with few possessions and starts editing short films on an early iMac DV.'
  },
  {
    year: '2003',
    title: "iPod's Dirty Secret",
    description: 'Guerrilla consumer advocacy video goes viral globally, forcing tech policy reform.'
  },
  {
    year: '2008',
    title: 'HBO Series Deal',
    description: 'HBO acquires and broadcasts The Neistat Brothers, an eight-part autobiographical series.'
  },
  {
    year: '2012',
    title: 'Make It Count',
    description: 'Spends commercial budget traveling around 13 countries in 10 days; becomes an instant viral classic.'
  },
  {
    year: '2015',
    title: 'The Daily Vlog Begins',
    description: 'Launches unbroken daily film production schedule, redefining YouTube aesthetics and pacing.'
  },
  {
    year: '2016',
    title: 'CNN Acquisition & YouTuber of the Year',
    description: 'Beme acquired by CNN for $25M; honored as YouTuber of the Year at the Shorty Awards.'
  },
  {
    year: 'PRESENT',
    title: 'Independent Filmmaking & Studio 368',
    description: 'Continues directing independent documentary projects and inspiring a new generation of creators.'
  }
];

function Story() {
  return (
    <div className="story-page">
      {/* Story Hero */}
      <section className="story-hero" aria-label="Story Introduction">
        <div className="story-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80"
            alt="Atmospheric dark city silhouette"
            loading="eager"
          />
        </div>
        <div className="story-hero-overlay" />

        <div className="story-hero-content">
          <div className="section-header-row">
            <span className="section-number">02</span>
            <span className="section-label">BIOGRAPHY &bull; CHRONICLES</span>
          </div>

          <h1 className="story-hero-title">
            THE PURSUIT OF
            <br />
            <span className="accent">EXECUTION.</span>
          </h1>

          <p className="story-hero-subtitle">
            From washing dishes in Mystic, Connecticut to rewriting the rules
            of visual documentation from an iconic workshop in Lower Manhattan.
          </p>
        </div>
      </section>

      {/* Chapters */}
      {CHAPTERS.map((chapter, index) => {
        const isAlt = index % 2 === 1;
        const isReverse = index % 2 === 1;

        return (
          <section
            key={chapter.number}
            className={`story-section ${isAlt ? 'story-section-alt' : ''}`}
            aria-label={chapter.title}
          >
            <div className={`story-section-grid ${isReverse ? 'reverse' : ''}`}>
              <div className="story-section-text">
                <span className="section-label">{chapter.label}</span>
                <h2 className="story-section-heading">
                  {chapter.title}
                </h2>
                <div className="story-section-body">
                  {chapter.paragraphs.map((p, pIndex) => (
                    <p key={pIndex}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="story-section-image">
                <img
                  src={chapter.image}
                  alt={chapter.alt}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        );
      })}

      {/* Timeline */}
      <section className="story-timeline" aria-label="Career Milestones Timeline">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span className="section-label">CHRONOLOGY</span>
        </div>
        <h2 className="story-timeline-heading">
          KEY <span className="accent">MILESTONES.</span>
        </h2>

        <div className="timeline-items">
          {TIMELINE.map((item) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <Link to="/films" className="cta-button">
            EXPLORE THE COMPLETE FILM ARCHIVE →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Story;