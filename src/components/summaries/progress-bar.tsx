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
        paddingBottom: '0.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderBottom: '1px solid #fce7f3',
      }}
    >
      <div style={{ padding: '0 1rem', display: 'flex', gap: '0.375rem' }}>
        {sections.map((_, index) => (
          <div
            key={index}
            style={{
              height: '0.375rem',
              flex: 1,
              borderRadius: '9999px',
              backgroundColor: '#ffe4e6',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                backgroundImage: 'linear-gradient(to right, #fb7185, #e11d48)',
                transition: 'all 0.5s ease',
                width:
                  index === currentSection
                    ? '100%'
                    : currentSection > index
                      ? '100%'
                      : '0%',
                opacity: currentSection > index ? 0.3 : 1,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
