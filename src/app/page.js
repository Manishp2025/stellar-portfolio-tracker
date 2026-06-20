import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1 className="animate-fade-in">
          Unlock the true potential of your <br/>
          <span style={{ color: 'var(--primary)' }}>Stellar Assets</span>
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

        <div className="stats-grid animate-fade-in delay-200">
          <div className="stat-card glass">
            <div className="stat-value">50+</div>
            <div className="stat-label">Active Founders</div>
          </div>
          <div className="stat-card glass">
            <div className="stat-value">&lt; 3s</div>
            <div className="stat-label">Tx Speed</div>
          </div>
          <div className="stat-card glass">
            <div className="stat-value">$0.0001</div>
            <div className="stat-label">Avg Fee</div>
          </div>
        </div>
      </section>
    </main>
  );
}
