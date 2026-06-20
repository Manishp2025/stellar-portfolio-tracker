"use client";

import { useState } from 'react';
import { setAllowed, getUserInfo, getNetworkDetails } from '@stellar/freighter-api';

export default function Dashboard() {
  const [publicKey, setPublicKey] = useState('');
  const [network, setNetwork] = useState('');
  const [balance, setBalance] = useState('0.00');
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    try {
      setLoading(true);
      if (await setAllowed()) {
        const userInfo = await getUserInfo();
        const networkInfo = await getNetworkDetails();
        
        if (userInfo.publicKey) {
          setPublicKey(userInfo.publicKey);
          setNetwork(networkInfo.network);
          // In a production app, we would fetch the live balance from the Stellar Horizon API here
          setBalance('0.00'); 
        }
      }
    } catch (e) {
      console.error(e);
      alert('Make sure Freighter extension is installed and unlocked!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <div className="dashboard-header">
        <h1 className="animate-fade-in">Portfolio Overview</h1>
        {publicKey ? (
          <div className="glass px-4 py-2 text-sm text-accent" style={{ display: 'flex', alignItems: 'center', height: '40px', borderRadius: '8px' }}>
            {publicKey.slice(0, 6)}...{publicKey.slice(-4)}
          </div>
        ) : (
          <button className="btn btn-primary animate-fade-in" onClick={connectWallet} disabled={loading}>
            {loading ? 'Connecting...' : 'Connect Freighter'}
          </button>
        )}
      </div>

      {publicKey ? (
        <div className="balance-card glass animate-fade-in delay-100">
          <div className="balance-label">Total Balance</div>
          <div>
            <span className="balance-value">{balance}</span>
            <span className="balance-asset">XLM</span>
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#a1a1aa' }}>Network: {network || 'Mainnet'}</div>
        </div>
      ) : (
        <div className="glass animate-fade-in delay-100" style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Welcome Founder</h2>
          <p>Please connect your Freighter wallet to view your Stellar assets.</p>
        </div>
      )}

      {publicKey && (
        <div className="glass animate-fade-in delay-200" style={{ padding: '2rem', marginTop: '2rem' }}>
          <h2>Mainnet Verification</h2>
          <p>To fulfill Level 7 requirements, ensure your wallet is on <strong>Mainnet</strong> and perform a transaction to show active usage.</p>
          <div className="code-block">
            {`// Transaction Proof Area\nUser: ${publicKey}\nNetwork: ${network || 'Unknown'}\nStatus: Ready for growth!`}
          </div>
        </div>
      )}
    </main>
  );
}
