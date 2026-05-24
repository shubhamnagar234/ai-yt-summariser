import { SquarePlay } from 'lucide-react';
import { MotionDiv, MotionH3 } from '../common/motion-wrapper';
import { SummaryViewer } from '../summaries/summary-viewer';

const DEMO_SUMMARY = `# Introduction to Next.js
• Next.js is a React framework for production.
• It provides features like server-side rendering and static site generation.

# Why Use Next.js?
• Excellent for SEO and initial page load speed.
• Built-in routing system based on the file system.
• API routes let you build full-stack applications.`;

export default function DemoSection() {
  return (
    <section style={{ padding: '4rem 1rem', backgroundColor: '#fdf2f8' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              marginBottom: '1.5rem',
            }}
          >
            <SquarePlay
              style={{ width: '2rem', height: '2rem', color: '#f43f5e' }}
            />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <MotionH3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontWeight: 700,
                fontSize: '2.25rem',
                maxWidth: '42rem',
                margin: '0 auto',
                color: '#111827',
                lineHeight: 1.3,
              }}
            >
              Watch how AI YT Summariser transforms{' '}
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #f43f5e, #be123c)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                this Next.js course video
              </span>{' '}
              into an easy-to-read summary!
            </MotionH3>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', maxWidth: '800px' }}
          >
            <SummaryViewer summary={DEMO_SUMMARY} />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
