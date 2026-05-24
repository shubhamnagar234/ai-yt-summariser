import { itemVariants } from '@/utils/constants';
import { MotionDiv } from '../common/motion-wrapper';
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
      <MotionDiv
        variants={itemVariants as any}
        style={{
          padding: '1px',
          borderRadius: '9999px',
          backgroundImage:
            'linear-gradient(to right, #fecdd3, #f43f5e, #9f1239)',
        }}
      >
        <Badge
          variant="secondary"
          style={{
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 500,
            backgroundColor: 'white',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
          }}
        >
          <Sparkles
            style={{
              width: '1.5rem',
              height: '1.5rem',
              marginRight: '0.5rem',
              color: '#e11d48',
            }}
          />
          <p style={{ color: '#e11d48', margin: 0 }}>
            AI-Powered Content Extraction
          </p>
        </Badge>
      </MotionDiv>

      <MotionDiv
        variants={itemVariants as any}
        style={{
          textTransform: 'capitalize',
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#111827',
          margin: 0,
        }}
      >
        Start Pasting{' '}
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <span
            style={{ position: 'relative', zIndex: 10, padding: '0 0.5rem' }}
          >
            YouTube Links
          </span>
          <span
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(254, 205, 211, 0.5)',
              borderRadius: '0.5rem',
              transform: 'rotate(-2deg) skewY(-1deg)',
            }}
            aria-hidden="true"
          ></span>
        </span>
      </MotionDiv>

      <MotionDiv
        variants={itemVariants as any}
        style={{
          marginTop: '0.5rem',
          fontSize: '1.125rem',
          color: '#4b5563',
          maxWidth: '42rem',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: 0 }}>
          Drop your YouTube URL below and let our AI extract the executive
          insights!
        </p>
      </MotionDiv>
    </div>
  );
}
