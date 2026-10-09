import { useState } from 'react';

function Community() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(
        'https://casey-website-api.onrender.com/api/community',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Thank you for subscribing to the dispatch.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Unable to join at this time. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Something went wrong. Please check your connection and try again.');
    }
  };

  const dispatchPerks = [
    {
      num: '01',
      title: 'EARLY FILM DISPATCHES',
      desc: 'Exclusive first looks at upcoming documentary projects and video essays before public release.'
    },
    {
      num: '02',
      title: 'BEHIND THE EDIT BAY',
      desc: 'Breakdowns of editing timelines, camera rigs, audio tricks, and storytelling philosophies.'
    },
    {
      num: '03',
      title: 'STUDIO 368 ARCHIVES',
      desc: 'Unreleased footage, vintage workshop designs, gear schematics, and candid journal entries.'
    }
  ];

  return (
    <section className="community-page" aria-label="Community Newsletter">
      <div className="community-inner">
        <div className="section-header-row">
          <span className="section-number">03</span>
          <span className="section-label">COMMUNITY &bull; DIRECT DISPATCH</span>
        </div>

        <div className="community-accent-line" />

        <h1 className="community-title">
          NEVER STOP
          <br />
          <span className="accent">CREATING.</span>
        </h1>

        <p className="community-description">
          Receive unreleased film dispatches, behind-the-scenes editing insights,
          creative manifestos, and studio notes straight from 368 Broadway. No spam,
          no sponsored fluff—only real stories and filmmaker perspective.
        </p>

        {/* Newsletter Form */}
        <form
          className="newsletter-form"
          onSubmit={handleSubmit}
          noValidate={false}
          aria-label="Join community form"
        >
          <input
            type="email"
            id="community-email-input"
            placeholder="YOUR EMAIL ADDRESS"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={status === 'loading'}
            required
            aria-label="Email Address"
          />

          <button
            type="submit"
            id="community-submit-button"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'JOINING...' : 'JOIN →'}
          </button>
        </form>

        {/* Status Message */}
        <div
          role="status"
          aria-live="polite"
          className={`form-message ${
            status === 'success'
              ? 'form-message-success'
              : status === 'error'
              ? 'form-message-error'
              : ''
          }`}
          style={{ minHeight: '20px', marginTop: '12px' }}
        >
          {message}
        </div>

        <p className="form-hint">
          PROTECTED BY ZERO-TRACKING &bull; UNSUBSCRIBE AT ANY TIME
        </p>

        {/* Perks Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginTop: '80px',
            paddingTop: '48px',
            borderTop: '1px solid var(--border)'
          }}
        >
          {dispatchPerks.map((perk) => (
            <div key={perk.num}>
              <span className="section-number" style={{ fontSize: '11px' }}>
                {perk.num}
              </span>
              <h3
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.05em',
                  margin: '8px 0 8px',
                  color: 'var(--text-heading)'
                }}
              >
                {perk.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)'
                }}
              >
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Community;