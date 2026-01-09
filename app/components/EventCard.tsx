'use client'
import { useState } from 'react'
import Navbar from './navbar'

interface Event {
  type: string
  title: string
  subtitle: string
  featured?: boolean
  description: string
  date: string
  time: string
  location: string
  venue: string
  tags: string[]
}

const EventCard = ({ event }: { event: Event }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getEventColor = () => {
    switch (event.type) {
      case 'camp': return '#2b6cb0'
      case 'global': return '#38a169'
      case 'clinical': return '#805ad5'
      case 'yoga': return '#319795'
      case 'hospital': return '#e53e3e'
      default: return '#2c5282'
    }
  }

  const getEventIcon = () => {
    switch (event.type) {
      case 'camp': return '🏕️'
      case 'global': return '🌍'
      case 'clinical': return '🏥'
      case 'yoga': return '🧘'
      case 'hospital': return '🚑'
      default: return '📅'
    }
  }

  return (
    <div 
      className="event-card"
      style={{
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)' 
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e2e8f0',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        height: '100%',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Event Header */}
      <div 
        className="event-header"
        style={{
          background: `linear-gradient(135deg, ${getEventColor()}, ${event.type === 'camp' ? '#1a365d' : getEventColor() + 'cc'})`,
          color: 'white',
          padding: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              marginRight: '1rem',
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '0.75rem',
              borderRadius: '8px',
            }}>
              {getEventIcon()}
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>
                {event.title}
              </h3>
              <p style={{ opacity: 0.9, fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {event.subtitle}
              </p>
            </div>
          </div>
          {event.featured && (
            <span style={{
              backgroundColor: '#fbbf24',
              color: '#92400e',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
            }}>
              FEATURED
            </span>
          )}
        </div>
      </div>

      {/* Event Content */}
      <div style={{ padding: '1.5rem' }}>
        <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
          {event.description}
        </p>
        
        {/* Details */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ marginRight: '0.75rem', fontSize: '1.25rem' }}>📅</span>
            <div>
              <div style={{ fontWeight: '500', color: '#2d3748' }}>{event.date}</div>
              <div style={{ fontSize: '0.875rem', color: '#718096' }}>{event.time}</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '0.75rem', fontSize: '1.25rem' }}>📍</span>
            <div>
              <div style={{ fontWeight: '500', color: '#2d3748' }}>{event.location}</div>
              <div style={{ fontSize: '0.875rem', color: '#718096' }}>{event.venue}</div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}>
          {event.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                backgroundColor: '#ebf8ff',
                color: '#2c5282',
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <button
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            backgroundColor: isHovered ? getEventColor() : '#ebf8ff',
            color: isHovered ? 'white' : '#2c5282',
          }}
        >
          View Details →
        </button>
      </div>
    </div>
  )
}

export default EventCard