function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            FILMMAKER • STORYTELLER • CREATOR
          </p>

          <h1>
            THE STORY
            <br />
            <span>NEVER STOPS.</span>
          </h1>

          <p className="hero-description">
            A journey through filmmaking, creativity,
            adventure and the stories that make us stop
            and look again.
          </p>

          <a href="/films" className="primary-button">
            EXPLORE FILMS →
          </a>

        </div>

        <div className="scroll-indicator">
          SCROLL ↓
        </div>

      </section>


      {/* SHORT INTRO */}
      <section className="home-intro">

        <p className="section-label">
          THE CREATOR
        </p>

        <h2>
          MAKE SOMETHING
          <br />
          <span>YOU CARE ABOUT.</span>
        </h2>

        <p>
          Casey Neistat is a filmmaker, storyteller and creator
          known for turning everyday life into compelling stories.
        </p>

        <a href="/story" className="watch-link">
          READ THE STORY →
        </a>

      </section>
    </>
  );
}

export default Home;