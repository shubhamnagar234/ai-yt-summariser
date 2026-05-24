import { Skeleton } from '@/components/ui/skeleton';
import LoadingSkeleton from '@/components/yt/loading-skeleton';

function HeaderSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Skeleton
          style={{ height: '2rem', width: '8rem', borderRadius: '9999px' }}
        />
        <Skeleton
          style={{ height: '1.5rem', width: '12rem', borderRadius: '9999px' }}
        />
        <Skeleton
          style={{ height: '1.5rem', width: '10rem', borderRadius: '9999px' }}
        />
      </div>
      <Skeleton
        style={{ height: '3rem', width: '75%', borderRadius: '0.5rem' }}
      />
    </div>
  );
}

export default function LoadingSummary() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#fdf2f8',
        padding: '3rem 1rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <HeaderSkeleton />

        {/* Source Info Skeleton */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Skeleton
              style={{
                height: '1.25rem',
                width: '1.25rem',
                borderRadius: '0.25rem',
              }}
            />
            <Skeleton
              style={{
                height: '1.25rem',
                width: '10rem',
                borderRadius: '0.25rem',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Skeleton
              style={{
                height: '2rem',
                width: '8rem',
                borderRadius: '0.375rem',
              }}
            />
            <Skeleton
              style={{
                height: '2rem',
                width: '8rem',
                borderRadius: '0.375rem',
              }}
            />
          </div>
        </div>

        {/* Video & Reader Layout Skeleton */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            marginTop: '1rem',
          }}
        >
          {/* Video Player Skeleton */}
          <Skeleton
            style={{ width: '100%', aspectRatio: '16/9', borderRadius: '1rem' }}
          />

          {/* Reader Skeleton */}
          <div style={{ position: 'relative' }}>
            <LoadingSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
