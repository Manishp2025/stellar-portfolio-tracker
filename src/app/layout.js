import './globals.css'

export const metadata = {
  title: 'LumenSight | Premium Stellar Portfolio',
  description: 'The next-generation portfolio tracker for the Stellar network. Connect your Freighter wallet and manage your assets.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        
        <div className="container">
          <nav>
            <a href="/" className="logo">LumenSight</a>
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
