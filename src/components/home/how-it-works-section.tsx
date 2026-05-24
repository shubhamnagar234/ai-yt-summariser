import { SquarePlay, BrainCircuit, FileText, MoveRight } from 'lucide-react';
import { ReactNode } from 'react';
import { MotionDiv, MotionH2, MotionH3 } from '../common/motion-wrapper';

type Step = {
  icon: ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: (
      <SquarePlay style={{ width: '2rem', height: '2rem', color: '#e11d48' }} />
    ),
    title: '1. Paste Video URL',
    description:
      'Simply paste the link to any public YouTube video you want to summarize.',
  },
  {
    icon: (
      <BrainCircuit
        style={{ width: '2rem', height: '2rem', color: '#e11d48' }}
      />
    ),
    title: '2. AI Analysis',
    description:
      'Our AI extracts the transcript and identifies the core executive insights.',
  },
  {
    icon: (
      <FileText style={{ width: '2rem', height: '2rem', color: '#e11d48' }} />
    ),
    title: '3. Get Summary',
    description:
      'Get a clean, interactive breakdown of the video to save hours of watch time.',
  },
];

const StepItem = ({ icon, title, description }: Step) => (
  <div
    style={{
      flex: 1,
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '1rem',
      border: '1px solid #fce7f3',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
    }}
  >
    <div
      style={{
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: '#fff1f2',
        borderRadius: '50%',
      }}
    >
      {icon}
    </div>
    <h4
      style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '#111827',
        marginBottom: '0.5rem',
      }}
    >
      {title}
    </h4>
    <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{description}</p>
  </div>
);

export default function HowItWorksSection() {
  return (
    <section
      style={{ padding: '6rem 1rem', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <MotionH2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontWeight: 700,
              fontSize: '1.25rem',
              textTransform: 'uppercase',
              color: '#f43f5e',
              marginBottom: '1rem',
            }}
          >
            How it Works
          </MotionH2>
          <MotionH3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontWeight: 800,
              fontSize: '2.5rem',
              color: '#111827',
              maxWidth: '42rem',
              margin: '0 auto',
            }}
          >
            Transform any YouTube Video into an easy-to-digest summary in three
            simple steps
          </MotionH3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            position: 'relative',
          }}
        >
          {steps.map((step, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              style={{ position: 'relative', display: 'flex' }}
            >
              <StepItem {...step} />
              {idx < steps.length - 1 && (
                <MotionDiv
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-1.5rem',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                  }}
                >
                  <MoveRight
                    style={{
                      width: '2rem',
                      height: '2rem',
                      color: '#fb7185',
                      display:
                        'none' /* Enable via media query in real CSS if needed, hidden inline for mobile safety */,
                    }}
                  />
                </MotionDiv>
              )}
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
