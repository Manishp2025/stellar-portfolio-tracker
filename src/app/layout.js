import './globals.css'

export const metadata = {
  title: 'LumenSight | Premium Stellar Portfolio',
  description: 'The next-generation portfolio tracker for the Stellar network.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        
        <div className="container">
          <nav>
            <a href="/" className="nav-logo-container">
              <img src="/assets/logo.png" alt="LumenSight Logo" className="logo-icon" />
              <span className="logo">LumenSight</span>
            </a>
            <div className="nav-links">
              <a href="/dashboard" className="nav-link">Dashboard</a>
              <a href="https://stellar.org" target="_blank" rel="noreferrer" className="nav-link">Stellar.org</a>
            </div>
          </nav>
        </div>

        {children}
      </body>
    </html>
  )
}
