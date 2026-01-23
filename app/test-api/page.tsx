'use client';

import { useState } from 'react';

export default function TestApiPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const testApi = async () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('Testing API...');
      const response = await fetch('http://localhost:5000/api/dashboard/stats');
      const data = await response.json();
      
      console.log('API Response:', data);
      setResult(data);
      
    } catch (err: any) {
      console.error('Test failed:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>API Test Page</h1>
      
      <button 
        onClick={testApi}
        style={{ 
          background: '#1CA7A6', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px',
          fontSize: '16px',
          marginBottom: '20px'
        }}
      >
        Test Backend API
      </button>
      
      {loading && <p>Testing connection to http://localhost:5000...</p>}
      
      {error && (
        <div style={{ background: '#fee', color: '#c00', padding: '15px', margin: '15px 0' }}>
          <h3>❌ Error</h3>
          <p>{error}</p>
          <p>Please check:</p>
          <ol>
            <li>Backend server running? (Port 5000)</li>
            <li>Open <a href="http://localhost:5000/api/health" target="_blank">http://localhost:5000/api/health</a></li>
          </ol>
        </div>
      )}
      
      {result && (
        <div style={{ background: '#eef', padding: '15px', margin: '15px 0' }}>
          <h3>✅ API Response</h3>
          <pre style={{ background: 'white', padding: '10px' }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}