function Films() {
  return (
    <section className="films films-page">

      <div className="section-header">

        <div>
          <p className="section-label">
            01 — FILMS
          </p>

          <h2>
            STORIES
            <br />
            <span>IN MOTION.</span>
          </h2>
        </div>

        <p className="section-description">
          Films, experiments and moments captured
          along the way.
        </p>

      </div>


      <div className="film-card">

        <div className="film-placeholder">

          <div className="play-button">
            ▶
          </div>

          <p>
            WATCH FEATURED FILM
          </p>

        </div>


        <div className="film-info">

          <div>

            <p className="film-category">
              FEATURED FILM
            </p>

            <h3>
              DO WHAT YOU
              <br />
              CAN'T.
            </h3>

          </div>

          <a
            href="https://www.youtube.com/@CaseyNeistat"
            target="_blank"
            rel="noreferrer"
            className="watch-link"
          >
            WATCH ON YOUTUBE ↗
          </a>

        </div>

      </div>

    </section>
  );
}

export default Films;