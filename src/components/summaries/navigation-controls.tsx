import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function NavigationControls({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  onSectionSelect,
}: {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
  onSectionSelect: (index: number) => void;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        padding: '0.875rem 1.25rem',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(252, 231, 243, 0.8)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          disabled={currentSection === 0}
          style={{
            borderRadius: '9999px',
            width: '2.5rem',
            height: '2.5rem',
            color: '#e11d48',
            borderColor: '#fecdd3',
            background: 'white',
            boxShadow: '0 1px 4px rgba(225, 29, 72, 0.1)',
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronLeft style={{ height: '1.25rem', width: '1.25rem' }} />
        </Button>

        {/* Section dots */}
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSectionSelect(index)}
              style={{
                width: currentSection === index ? '1.25rem' : '0.5rem',
                height: '0.5rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor:
                  currentSection === index
                    ? '#e11d48'
                    : index < currentSection
                      ? '#fda4af'
                      : '#fce7f3',
              }}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={currentSection === totalSections - 1}
          style={{
            borderRadius: '9999px',
            width: '2.5rem',
            height: '2.5rem',
            color: '#e11d48',
            borderColor: '#fecdd3',
            background: 'white',
            boxShadow: '0 1px 4px rgba(225, 29, 72, 0.1)',
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronRight style={{ height: '1.25rem', width: '1.25rem' }} />
        </Button>
      </div>
    </div>
  );
}
