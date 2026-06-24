import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="animate-fade-in">
            Unlock the true potential of your <br/>
            <span className="text-gradient">Stellar Assets</span>
          </h1>
          <p className="hero-subtitle animate-fade-in delay-100">
            LumenSight is the premium portfolio tracker designed for the next generation of web3 founders and investors on the Stellar network.
          </p>
          <div className="cta-group animate-fade-in delay-200">
            <Link href="/dashboard" className="btn btn-primary">
              Launch Dashboard
            </Link>
            <a href="#features" className="btn btn-secondary">
              View Features
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-200">
          <img src="/assets/hero.png" alt="Hero Background" className="hero-image" />
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="stats-grid animate-fade-in delay-200">
          <div className="stat-card glass hover-glow">
            <div className="stat-value">50+</div>
            <div className="stat-label">Active Founders</div>
          </div>
          <div className="stat-card glass hover-glow">
            <div className="stat-value">&lt; 3s</div>
            <div className="stat-label">Tx Speed</div>
          </div>
          <div className="stat-card glass hover-glow">
            <div className="stat-value">$0.0001</div>
            <div className="stat-label">Avg Fee</div>
          </div>
        </div>
      </section>
    </main>
  );
}
