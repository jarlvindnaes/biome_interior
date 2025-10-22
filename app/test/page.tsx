'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TestPage() {
  const [mounted, setMounted] = useState(false);
  const [jsWorks, setJsWorks] = useState(false);
  const [timestamp, setTimestamp] = useState('');
  const [windowAvailable, setWindowAvailable] = useState(false);
  const [framerMotionTest, setFramerMotionTest] = useState('Not tested');

  useEffect(() => {
    setMounted(true);
    setJsWorks(true);
    setTimestamp(new Date().toISOString());
    setWindowAvailable(typeof window !== 'undefined');

    // Test framer-motion import
    import('framer-motion').then(() => {
      setFramerMotionTest('✅ Loaded');
    }).catch((err) => {
      setFramerMotionTest(`❌ Failed: ${err.message}`);
    });
  }, []);

  const testInfo = {
    'React Hydrated': mounted ? '✅ Yes' : '❌ No',
    'JavaScript Running': jsWorks ? '✅ Yes' : '❌ No',
    'Window Available': windowAvailable ? '✅ Yes' : '❌ No',
    'Framer Motion': framerMotionTest,
    'Timestamp': timestamp,
    'Node ENV': process.env.NODE_ENV,
    'Next.js Version': '15.5.5',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {mounted ? '✅' : '⏳'} Debug Page
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
            {mounted ? 'All systems operational!' : 'Loading...'}
          </p>
        </div>

        {/* Debug Info Grid */}
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>System Status</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {Object.entries(testInfo).map(([key, value]) => (
              <div key={key} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.75rem',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '0.5rem',
                fontSize: '0.9rem'
              }}>
                <span style={{ fontWeight: 'bold' }}>{key}:</span>
                <span style={{ fontFamily: 'monospace' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <Link 
            href="/biome" 
            style={{
              display: 'block',
              padding: '1.5rem',
              background: 'white',
              color: '#667eea',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: '1.1rem'
            }}
          >
            🎯 Go to /biome
          </Link>
          <Link 
            href="/" 
            style={{
              display: 'block',
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: '1.1rem',
              border: '2px solid rgba(255,255,255,0.3)'
            }}
          >
            🏠 Go to Root
          </Link>
        </div>

        {/* Console Test */}
        <div style={{
          background: 'rgba(0,0,0,0.2)',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          fontSize: '0.85rem'
        }}>
          <p style={{ marginBottom: '0.5rem', opacity: 0.7 }}>
            💡 Tip: Open browser console (F12) to see detailed logs
          </p>
          <p style={{ opacity: 0.7 }}>
            If this page loads but /biome doesn&apos;t, the issue is with BIOME components
          </p>
        </div>
      </div>
    </div>
  );
}

