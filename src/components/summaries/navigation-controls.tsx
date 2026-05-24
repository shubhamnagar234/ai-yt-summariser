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
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(4px)',
        borderTop: '1px solid #fce7f3',
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
            width: '3rem',
            height: '3rem',
            color: '#e11d48',
            borderColor: '#fecdd3',
          }}
        >
          <ChevronLeft style={{ height: '1.5rem', width: '1.5rem' }} />
        </Button>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSectionSelect(index)}
              style={{
                width: '0.5rem',
                height: '0.5rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor:
                  currentSection === index ? '#e11d48' : '#fecdd3',
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
            width: '3rem',
            height: '3rem',
            color: '#e11d48',
            borderColor: '#fecdd3',
          }}
        >
          <ChevronRight style={{ height: '1.5rem', width: '1.5rem' }} />
        </Button>
      </div>
    </div>
  );
}
