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
        position: 'sticky',
        top: 0,
        paddingTop: '0.5rem',
        paddingBottom: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(4px)',
        zIndex: 10,
      }}
    >
      <h2
        style={{
          fontSize: '1.875rem',
          fontWeight: 700,
          textAlign: 'center',
          margin: 0,
          color: '#111827',
        }}
      >
        {title}
      </h2>
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
        height: '500px', // Standardized height
        width: '100%',
        maxWidth: '700px', // Contrains the width so it doesn't stretch
        margin: '0 auto',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff', // Solid white background
        borderRadius: '1.5rem', // Rounded corners
        boxShadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', // Heavy floating shadow
        border: '1px solid #fce7f3', // Light rose border
      }}
    >
      <ProgressBar sections={sections} currentSection={currentSection} />

      <MotionDiv
        key={currentSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        exit={{ opacity: 0 }}
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingTop: '2.5rem', // Clears the absolute progress bar
          paddingBottom: '5rem', // Clears the absolute nav controls
          paddingLeft: '2rem',
          paddingRight: '2rem',
          scrollbarWidth: 'none', // Hides standard scrollbar
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
