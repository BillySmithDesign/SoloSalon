import './landing.css';

const github = 'https://github.com/BillySmithDesign/SoloSalon';
const demo = 'https://solo-salon-flame.vercel.app/book';

export default function Home() {
  return (
    <main className="landing">
      <nav className="topbar" aria-label="Primary">
        <a className="identity" href="/" aria-label="SoloSalon home">
          <img src="/solosalon-logo.png" alt="" />
          <span>SOLOSALON</span>
        </a>

        <div className="navActions">
          <a className="textLink" href={github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a className="navButton" href={demo} target="_blank" rel="noreferrer">
            Try the demo
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="copy">
          <div className="eyebrow">
            <span className="statusDot" />
            FREE · OPEN SOURCE · SELF-HOSTED
          </div>

          <h1>
            Your bookings.
            <br />
            <em>Your business.</em>
          </h1>

          <p className="lead">
            SoloSalon exists because running a small home salon shouldn&apos;t
            require another expensive monthly software subscription.
          </p>

          <p className="support">
            A beautifully simple booking system for independent and home-based
            salon operators. Take appointments, control your availability and
            manage your services — without becoming trapped inside an enormous
            salon-management platform.
          </p>

          <div className="actions">
            <a className="primary" href={github} target="_blank" rel="noreferrer">
              Get the code on GitHub
              <span>↗</span>
            </a>
            <a className="secondary" href={demo} target="_blank" rel="noreferrer">
              See it working
              <span>→</span>
            </a>
          </div>

          <div className="principles" aria-label="SoloSalon principles">
            <span>No subscriptions</span>
            <span>No marketplace</span>
            <span>No lock-in</span>
          </div>

          <p className="manifesto">
            Use it. Change it. Host it yourself.
            <strong> Make it your own.</strong>
          </p>
        </div>

        <div className="productStage" aria-label="SoloSalon booking interface preview">
          <div className="glow" />
          <div className="browser">
            <div className="browserChrome">
              <div className="dots"><i /><i /><i /></div>
              <div className="address">your-salon.vercel.app/book</div>
              <div className="secure">●</div>
            </div>

            <div className="booking">
              <div className="bookingBrand">
                <div>
                  <span className="miniLabel">SOLOSALON</span>
                  <h2>Book your appointment</h2>
                  <p>Simple booking. No account required.</p>
                </div>
                <div className="avatar">SS</div>
              </div>

              <div className="stepLabel">01 · CHOOSE A SERVICE</div>

              <div className="serviceCards">
                <button className="serviceCard selected" type="button">
                  <span>
                    <b>Cut &amp; Blow Dry</b>
                    <small>60 minutes</small>
                  </span>
                  <strong>$95</strong>
                </button>

                <button className="serviceCard" type="button">
                  <span>
                    <b>Full Head Foils</b>
                    <small>2 hr 15 min</small>
                  </span>
                  <strong>$255</strong>
                </button>
              </div>

              <div className="stepLabel second">02 · AVAILABLE TIMES</div>

              <div className="dates">
                <button type="button"><small>TUE</small><b>11</b></button>
                <button className="activeDate" type="button"><small>WED</small><b>12</b></button>
                <button type="button"><small>THU</small><b>13</b></button>
                <button type="button"><small>FRI</small><b>14</b></button>
              </div>

              <div className="times">
                <button type="button">9:00 am</button>
                <button className="activeTime" type="button">10:30 am</button>
                <button type="button">1:00 pm</button>
              </div>

              <div className="bookingFooter">
                <span>Wed 12 · 10:30 am</span>
                <button type="button">Continue →</button>
              </div>
            </div>
          </div>

          <div className="openSourceCard">
            <span className="codeIcon">&lt;/&gt;</span>
            <div>
              <b>Open by design.</b>
              <small>Apache 2.0 · Fork it. Own it.</small>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>Built for the solo operators doing it themselves.</span>
        <a href={github} target="_blank" rel="noreferrer">
          github.com/BillySmithDesign/SoloSalon
        </a>
      </footer>
    </main>
  );
}
