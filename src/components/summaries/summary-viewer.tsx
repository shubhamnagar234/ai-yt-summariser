'use client';

import { useState } from 'react';
import { parseSection } from '@/utils/summary-helpers';
import ProgressBar from './progress-bar';
import { NavigationControls } from './navigation-controls';

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
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
        height: '600px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ProgressBar sections={sections} currentSection={currentSection} />

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingTop: '2rem',
          paddingBottom: '5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          scrollbarWidth: 'none',
        }}
      >
        <SectionTitle title={sections[currentSection]?.title} />

        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {sections[currentSection]?.points.map((point, index) => (
            <li
              key={index}
              style={{
                padding: '1rem',
                backgroundColor: '#f9fafb',
                borderRadius: '0.75rem',
                border: '1px solid #f3f4f6',
                fontSize: '1.125rem',
                color: '#374151',
                lineHeight: 1.6,
              }}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

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
