import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingSkeleton() {
  return (
    <div
      style={{
        position: 'relative',
        height: '500px',
        width: '100%',
        maxWidth: '700px',
        margin: '0 auto',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        borderRadius: '1.5rem',
        boxShadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #fce7f3',
      }}
    >
      {/* Progress Bar Skeleton */}
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
          {[1, 2, 3].map((_, index) => (
            <Skeleton
              key={index}
              style={{
                height: '0.375rem',
                flex: 1,
                borderRadius: '9999px',
                backgroundColor: index === 0 ? '#fb7185' : '#ffe4e6',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Skeleton */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingTop: '2.5rem',
          paddingBottom: '5rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          scrollbarWidth: 'none',
        }}
      >
        {/* Title */}
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
            zIndex: 10,
          }}
        >
          <Skeleton
            style={{
              height: '2.5rem',
              width: '60%',
              margin: '0 auto',
              borderRadius: '0.5rem',
            }}
          />
        </div>

        {/* Points */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[1, 2, 3].map((_, index) => (
            <div
              key={`point-${index}`}
              style={{
                position: 'relative',
                padding: '1rem',
                borderRadius: '1rem',
                border: '1px solid rgba(107, 114, 128, 0.1)',
                backgroundColor: 'rgba(243, 244, 246, 0.5)',
                display: 'flex',
                gap: '1rem',
              }}
            >
              <Skeleton
                style={{
                  height: '1.5rem',
                  width: '1.5rem',
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  flex: 1,
                  marginTop: '0.25rem',
                }}
              >
                <Skeleton
                  style={{
                    height: '1rem',
                    width: '100%',
                    borderRadius: '0.25rem',
                  }}
                />
                <Skeleton
                  style={{
                    height: '1rem',
                    width: '80%',
                    borderRadius: '0.25rem',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Skeleton */}
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
          <Skeleton
            style={{ borderRadius: '9999px', width: '3rem', height: '3rem' }}
          />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[1, 2, 3].map((_, index) => (
              <Skeleton
                key={index}
                style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '9999px',
                }}
              />
            ))}
          </div>
          <Skeleton
            style={{ borderRadius: '9999px', width: '3rem', height: '3rem' }}
          />
        </div>
      </div>
    </div>
  );
}
