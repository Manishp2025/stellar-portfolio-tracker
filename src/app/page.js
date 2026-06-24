import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-content">
          <div className="badge animate-fade-in">🌟 V2.0 Now Live on Mainnet</div>
          <h1 className="animate-fade-in delay-100">
            The Ultimate <br/>
            <span className="text-gradient">Stellar Founder</span> <br/>
            Dashboard
          </h1>
          <p className="hero-subtitle animate-fade-in delay-200">
            LumenSight provides institutional-grade portfolio tracking, smart contract management, and real-time on-chain analytics for the Stellar ecosystem.
          </p>
          <div className="cta-group animate-fade-in delay-300">
            <Link href="/dashboard" className="btn btn-primary btn-glow">
              Launch App
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a href="#features" className="btn btn-secondary">
              Explore Features
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-200">
          <div className="glass-overlay"></div>
          <img src="/assets/hero.png" alt="Hero Background" className="hero-image" />
          
          {/* Floating UI Elements for 3D effect */}
          <div className="floating-card fc-1 glass">
            <div className="fc-icon">💎</div>
            <div>
              <div className="fc-label">Total Volume</div>
              <div className="fc-value text-gradient">$1.2M+</div>
            </div>
          </div>
          <div className="floating-card fc-2 glass">
            <div className="fc-icon">🚀</div>
            <div>
              <div className="fc-label">Active Users</div>
              <div className="fc-value text-gradient">50+</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Why Choose LumenSight?</h2>
          <p>Built for the Level 7 Founder Belt requirements and beyond.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card glass hover-glow animate-fade-in">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Experience sub-3 second transaction finality powered by the Stellar consensus protocol.</p>
          </div>
          <div className="feature-card glass hover-glow animate-fade-in delay-100">
            <div className="feature-icon">🛡️</div>
            <h3>Soroban Smart Contracts</h3>
            <p>Interact with cutting-edge Rust-based smart contracts deployed directly on the network.</p>
          </div>
          <div className="feature-card glass hover-glow animate-fade-in delay-200">
            <div className="feature-icon">📊</div>
            <h3>Advanced Analytics</h3>
            <p>Track your portfolio performance with real-time charts and deep on-chain metrics.</p>
          </div>
        </div>
      </section>

      <section className="cta-section glass hover-glow animate-fade-in">
        <div className="cta-content">
          <h2>Ready to scale your Web3 Startup?</h2>
          <p>Join 50+ founders already tracking their assets on LumenSight.</p>
          <Link href="/dashboard" className="btn btn-primary btn-large">
            Connect Freighter Wallet Now
          </Link>
        </div>
      </section>
    </main>
  );
}
