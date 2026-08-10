import './landing.css';

const github = 'https://github.com/BillySmithDesign/SoloSalon';
const demo = '/book';

const values = [
  {
    icon: '↗',
    title: 'One booking link',
    text: 'Your own direct booking URL. Add it anywhere your clients already find you.',
    demo: <div className="miniUrl"><span>solosalon.app</span><b>/your-salon/book</b><i>↗</i></div>
  },
  {
    icon: '◎',
    title: 'Made for social',
    text: 'Drop your booking link straight into Instagram, Facebook, Linktree or Google Business.',
    demo: <div className="socialDemo"><span>◎ Instagram</span><span>✦ Linktree</span><span>f Facebook</span></div>
  },
  {
    icon: '</>',
    title: 'Lives on your website',
    text: 'Already have a site? Embed your booking page with a tiny iframe snippet.',
    demo: <div className="codeDemo"><code>&lt;iframe src=&quot;.../book&quot; /&gt;</code><span>Copy</span></div>
  }
];

export default function Home() {
  return (
    <main className="landing">
      <nav className="topbar">
        <a className="identity" href="/">
          <img src="/solosalon-logo.png" alt="" />
          <span>SOLOSALON</span>
        </a>
        <div className="navActions">
          <a className="textLink" href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="navButton" href={demo}>Try the demo</a>
        </div>
      </nav>

      <section className="hero">
        <div className="copy">
          <div className="eyebrow"><span className="statusDot" />FREE · OPEN SOURCE · SELF-HOSTED</div>
          <h1>Your bookings.<br/><em>Your business.</em></h1>
          <p className="lead">Running a small salon shouldn&apos;t require another expensive monthly software subscription.</p>
          <p className="support">SoloSalon gives independent stylists, home salons and chair renters the essentials to take online appointments — without the enormous salon-management platform around it.</p>

          <div className="actions">
            <a className="primary" href={github} target="_blank" rel="noreferrer">Get SoloSalon free <span>↗</span></a>
            <a className="secondary" href={demo}>See it working <span>→</span></a>
          </div>

          <div className="quickFacts">
            <div><strong>~5 min</strong><span>guided setup</span></div>
            <div><strong>$0</strong><span>SoloSalon subscription</span></div>
            <div><strong>100%</strong><span>your deployment</span></div>
          </div>
        </div>

        <div className="productStage">
          <div className="glow" />
          <div className="browser">
            <div className="browserChrome"><div className="dots"><i/><i/><i/></div><div className="address">your-salon.vercel.app/book</div><div className="secure">●</div></div>
            <div className="booking">
              <div className="bookingBrand"><div><span className="miniLabel">YOUR SALON</span><h2>Book your appointment</h2><p>Choose a service and a time that suits you.</p></div><div className="avatar">YS</div></div>
              <div className="stepLabel">01 · CHOOSE A SERVICE</div>
              <div className="serviceCards">
                <button className="serviceCard selected"><span><b>Cut &amp; Blow Dry</b><small>60 minutes</small></span><strong>$95</strong></button>
                <button className="serviceCard"><span><b>Full Head Foils</b><small>2 hr 15 min</small></span><strong>$255</strong></button>
              </div>
              <div className="stepLabel second">02 · AVAILABLE TIMES</div>
              <div className="dates"><button><small>TUE</small><b>11</b></button><button className="activeDate"><small>WED</small><b>12</b></button><button><small>THU</small><b>13</b></button><button><small>FRI</small><b>14</b></button></div>
              <div className="times"><button>9:00 am</button><button className="activeTime">10:30 am</button><button>1:00 pm</button></div>
              <div className="bookingFooter"><span>Wed 12 · 10:30 am</span><button>Continue →</button></div>
            </div>
          </div>
          <div className="operatorTag">✂ Built for <b>solo operators + chair renters</b></div>
        </div>
      </section>

      <section className="valueStrip">
        <div className="valueIntro">
          <span>ONE SIMPLE JOB</span>
          <h2>Be bookable<br/>everywhere.</h2>
          <p>Your clients shouldn&apos;t have to hunt for the appointment button.</p>
        </div>
        <div className="valueGrid">
          {values.map((v) => <article className="valueCard" key={v.title}>
            <div className="valueIcon">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
            {v.demo}
          </article>)}
        </div>
      </section>

      <section className="philosophy">
        <div className="philosophyMark">&ldquo;</div>
        <p>Use it. Change it. Host it yourself. <strong>Make it your own.</strong></p>
        <div className="principles"><span>No subscription</span><span>No marketplace</span><span>No lock-in</span></div>
        <a href={github} target="_blank" rel="noreferrer">View the open-source project on GitHub ↗</a>
      </section>

      <footer className="footer">
        <span>Built to help small independent salons succeed.</span>
        <span>Apache 2.0 · Open source</span>
      </footer>
    </main>
  );
}
