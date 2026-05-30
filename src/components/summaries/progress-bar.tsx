export default function ProgressBar({
  sections,
  currentSection,
}: {
  sections: Array<{ title: string; points: string[] }>;
  currentSection: number;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        paddingTop: '1rem',
        paddingBottom: '0.75rem',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(252, 231, 243, 0.8)',
      }}
    >
      <div style={{ padding: '0 1.25rem', display: 'flex', gap: '0.375rem' }}>
        {sections.map((_, index) => (
          <div
            key={index}
            style={{
              height: '4px',
              flex: 1,
              borderRadius: '9999px',
              backgroundColor: 'rgba(254, 205, 211, 0.5)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                backgroundImage:
                  index < currentSection
                    ? 'linear-gradient(to right, #fda4af, #fb7185)'
                    : index === currentSection
                      ? 'linear-gradient(to right, #e11d48, #fb7185)'
                      : 'transparent',
                transition: 'width 0.5s ease, background 0.3s ease',
                width: index <= currentSection ? '100%' : '0%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
