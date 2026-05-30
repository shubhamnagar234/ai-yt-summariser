'use client';

import { useState } from 'react';
import { parseSection } from '@/utils/summary-helpers';
import ProgressBar from './progress-bar';
import { NavigationControls } from './navigation-controls';
import { MotionDiv } from '../common/motion-wrapper';
import ContentSection from './content-section';

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginBottom: '1.5rem',
      }}
    >
      <h2
        style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          textAlign: 'center',
          margin: 0,
          background: 'linear-gradient(135deg, #be123c, #e11d48, #fb7185)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: '3rem',
          height: '3px',
          background: 'linear-gradient(to right, #e11d48, #fb7185)',
          borderRadius: '9999px',
          margin: '0 auto',
        }}
      />
    </div>
  );
};

export function SummaryViewer({ summary }: { summary: string }) {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = summary
    .split('\n# ')
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection);

  const handlePrevious = () =>
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div
      style={{
        position: 'relative',
        height: '520px',
        width: '100%',
        maxWidth: '780px',
        margin: '0 auto',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(145deg, #ffffff 0%, #fff1f2 100%)',
        borderRadius: '1.75rem',
        boxShadow:
          '0 25px 50px -12px rgba(225, 29, 72, 0.15), 0 0 0 1px rgba(252, 231, 243, 0.8)',
        border: '1px solid rgba(252, 231, 243, 0.8)',
      }}
    >
      {/* Decorative top-right orb */}
      <div
        style={{
          position: 'absolute',
          top: '-4rem',
          right: '-4rem',
          width: '12rem',
          height: '12rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,113,133,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <ProgressBar sections={sections} currentSection={currentSection} />

      <MotionDiv
        key={currentSection}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingTop: '3.5rem',
          paddingBottom: '5.5rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          scrollbarWidth: 'none',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <SectionTitle title={sections[currentSection]?.title} />

        <ContentSection
          title={sections[currentSection]?.title}
          points={sections[currentSection]?.points || []}
        />
      </MotionDiv>

      <NavigationControls
        currentSection={currentSection}
        totalSections={sections.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSectionSelect={setCurrentSection}
      />
    </div>
  );
}
