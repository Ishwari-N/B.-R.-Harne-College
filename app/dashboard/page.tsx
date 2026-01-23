'use client';

import { useState, useEffect } from 'react';

export default function SimpleDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/dashboard/stats');
      const data = await response.json();
      
      if (data.success) {
        setStats(data.data);
      } else {
        setError(data.message || 'Failed to load data');
      }
    } catch (err: any) {
      setError(err.message || 'Cannot connect to backend');
    } finally {
      setLoading(false);
    }
  };

  // Inline styles
  const styles = {
    page: {
      backgroundColor: '#F3F4F6',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      color: '#0F2A44',
      fontSize: '32px',
      fontWeight: 'bold' as 'bold',
      marginBottom: '10px'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'inline-block',
      width: '200px'
    },
    cardTitle: {
      color: '#666',
      fontSize: '14px',
      marginBottom: '10px'
    },
    cardValue: {
      color: '#0F2A44',
      fontSize: '32px',
      fontWeight: 'bold' as 'bold'
    },
    button: {
      backgroundColor: '#1CA7A6',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer' as 'pointer',
      fontSize: '16px'
    }
  };

  if (loading) {
    return (
      <div style={styles.page}>
        <h1 style={styles.header}>College Dashboard</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.page}>
        <h1 style={styles.header}>College Dashboard</h1>
        <div style={{color: 'red', padding: '10px', border: '1px solid red'}}>
          <p>Error: {error}</p>
          <button onClick={fetchData} style={styles.button}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>College Admin Dashboard</h1>
      <p style={{color: '#666', marginBottom: '20px'}}>Manage your college data</p>
      
      <div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Total Users</div>
          <div style={styles.cardValue}>{stats?.counts.totalUsers || 0}</div>
        </div>
        
        <div style={styles.card}>
          <div style={styles.cardTitle}>Total Faculty</div>
          <div style={styles.cardValue}>{stats?.counts.totalFaculty || 0}</div>
        </div>
        
        <div style={styles.card}>
          <div style={styles.cardTitle}>Total Courses</div>
          <div style={styles.cardValue}>{stats?.counts.totalCourses || 0}</div>
        </div>
      </div>
      
      <button onClick={fetchData} style={{...styles.button, marginTop: '20px'}}>
        Refresh
      </button>
    </div>
  );
}