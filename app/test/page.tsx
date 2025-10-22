export default function TestPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅ Vercel Works!</h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>
          If you see this, the deployment is working
        </p>
        <p style={{ fontSize: '1rem', opacity: 0.7, marginTop: '2rem' }}>
          Now we can debug why /biome isn&apos;t loading
        </p>
        <a 
          href="/biome" 
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: 'white',
            color: '#667eea',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Try /biome →
        </a>
      </div>
    </div>
  );
}

