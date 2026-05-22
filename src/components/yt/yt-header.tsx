import { Badge } from '../ui/badge';
import { Sparkles } from 'lucide-react';

export default function YtHeader() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          padding: '1px',
          overflow: 'hidden',
          borderRadius: '9999px',
          background: 'linear-gradient(to right, #fecdd3, #f43f5e, #9f1239)',
        }}
      >
        <Badge
          variant={'secondary'}
          style={{
            position: 'relative',
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 500,
            backgroundColor: '#ffffff',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'default',
          }}
        >
          <Sparkles
            style={{
              height: '1.5rem',
              width: '1.5rem',
              marginRight: '0.5rem',
              color: '#e11d48',
            }}
          />
          <p style={{ fontSize: '1rem', color: '#e11d48', margin: 0 }}>
            AI-Powered Video Summaries
          </p>
        </Badge>
      </div>

      <div
        style={{
          textTransform: 'capitalize',
          fontSize: '2.25rem',
          fontWeight: 'bold',
          letterSpacing: '-0.025em',
          color: '#111827',
        }}
      >
        Start Analyzing{' '}
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <span
            style={{ position: 'relative', zIndex: 10, padding: '0 0.5rem' }}
          >
            YouTube Links
          </span>
          <span
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(254, 205, 211, 0.5)',
              transform: 'rotate(-2deg) skewY(-1deg)',
              borderRadius: '0.5rem',
            }}
            aria-hidden="true"
          ></span>
        </span>
      </div>

      <div
        style={{
          marginTop: '0.5rem',
          fontSize: '1.125rem',
          lineHeight: '2rem',
          color: '#4b5563',
          maxWidth: '42rem',
          textAlign: 'center',
        }}
      >
        <p>Paste a YouTube URL and let our AI do the magic!</p>
      </div>
    </div>
  );
}
