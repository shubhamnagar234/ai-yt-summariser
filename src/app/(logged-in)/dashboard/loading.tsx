import { MotionDiv } from '@/components/common/motion-wrapper';
import { Skeleton } from '@/components/ui/skeleton';
import { itemVariants, containerVariants } from '@/utils/constants';

function HeaderSkeleton() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {/* Changed MotionH1 to MotionDiv to prevent block-in-inline errors */}
        <MotionDiv
          variants={itemVariants as any}
          initial="hidden"
          whileInView="visible"
        >
          <Skeleton
            style={{ height: '2.5rem', width: '16rem', borderRadius: '0.5rem' }}
          />
        </MotionDiv>
        {/* Changed MotionP to MotionDiv to prevent block-in-inline errors */}
        <MotionDiv
          variants={itemVariants as any}
          initial="hidden"
          whileInView="visible"
        >
          <Skeleton
            style={{
              height: '1.5rem',
              width: '24rem',
              borderRadius: '0.25rem',
            }}
          />
        </MotionDiv>
      </div>
      <MotionDiv
        variants={itemVariants as any}
        initial="hidden"
        animate="visible"
        style={{ alignSelf: 'flex-start' }}
      >
        <Skeleton
          style={{ height: '3rem', width: '10rem', borderRadius: '9999px' }}
        />
      </MotionDiv>
    </div>
  );
}

function SummaryCardSkeleton() {
  return (
    <MotionDiv
      variants={itemVariants as any}
      initial="hidden"
      animate="visible"
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          border: '1px solid #e5e7eb',
          padding: '1.5rem',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <Skeleton
            style={{ width: '2rem', height: '2rem', borderRadius: '0.5rem' }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              flex: 1,
            }}
          >
            <Skeleton
              style={{
                height: '1.25rem',
                width: '80%',
                borderRadius: '0.25rem',
              }}
            />
            <Skeleton
              style={{
                height: '0.875rem',
                width: '40%',
                borderRadius: '0.25rem',
              }}
            />
          </div>
        </div>
        <Skeleton
          style={{ height: '3rem', width: '100%', borderRadius: '0.25rem' }}
        />
        <Skeleton
          style={{
            height: '1.5rem',
            width: '5rem',
            borderRadius: '9999px',
            marginTop: 'auto',
          }}
        />
      </div>
    </MotionDiv>
  );
}

export default function LoadingSummaries() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          padding: '3rem 1.5rem',
        }}
      >
        <HeaderSkeleton />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginTop: '1rem',
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <SummaryCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
