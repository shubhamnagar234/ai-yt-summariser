import SummaryCard from '@/components/summaries/summary-card';
import { Button } from '@/components/ui/button';
import { getSummaries } from '@/lib/summaries';
import { getSession } from '@/lib/auth';
import { ArrowRight, Plus, SquarePlay } from 'lucide-react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from '@/components/common/motion-wrapper';
import { containerVariants, itemVariants } from '@/utils/constants';

export default async function DashboardPage() {
  const session = await getSession();
  const userId = session?.userId;

  if (!userId) {
    return redirect('/sign-in');
  }

  const uploadLimit = 5;
  const summaries = await getSummaries(userId);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          padding: '3rem 1.5rem',
        }}
      >
        {/* Header section */}
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
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
          >
            <MotionH1
              variants={itemVariants as any}
              style={{
                fontSize: '2.25rem',
                fontWeight: 800,
                color: '#111827',
                margin: 0,
              }}
            >
              Your Summaries
            </MotionH1>
            <MotionP
              variants={itemVariants as any}
              style={{ color: '#6b7280', margin: 0, fontSize: '1rem' }}
            >
              Transform your YouTube videos into concise, actionable insights
            </MotionP>
          </div>
          <MotionDiv
            variants={itemVariants as any}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              asChild
              style={{
                backgroundColor: '#e11d48',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
              }}
            >
              <Link href={'/'}>
                <Plus style={{ width: '1.25rem', height: '1.25rem' }} />
                New Summary
              </Link>
            </Button>
          </MotionDiv>
        </div>

        {/* Limit Warning */}
        {/* <MotionDiv
          variants={itemVariants as any}
          style={{
            backgroundColor: '#fff1f2',
            border: '1px solid #fecdd3',
            borderRadius: '0.5rem',
            padding: '1rem',
            color: '#9f1239',
          }}
        >
          <p style={{ fontSize: '0.875rem', margin: 0 }}>
            You've reached the limit of {uploadLimit} videos on the Basic plan.{' '}
            <Link
              href={'/#pricing'}
              style={{
                color: '#9f1239',
                textDecoration: 'underline',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Click here to upgrade to Pro{' '}
              <ArrowRight
                style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }}
              />
            </Link>{' '}
            for unlimited processing.
          </p>
        </MotionDiv> */}

        {/* Empty State / Grid */}
        {summaries.length === 0 ? (
          <MotionDiv
            variants={itemVariants as any}
            style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: 'white',
              borderRadius: '1rem',
              border: '1px solid #e5e7eb',
              marginTop: '1rem',
            }}
          >
            <SquarePlay
              style={{ width: '4rem', height: '4rem', color: '#d1d5db' }}
            />
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#374151',
                margin: 0,
              }}
            >
              No Summaries yet
            </h3>
            <p style={{ color: '#6b7280', maxWidth: '24rem', margin: 0 }}>
              Paste your first YouTube URL to get started with AI-powered
              summaries.
            </p>
            <Button
              asChild
              style={{
                marginTop: '1rem',
                backgroundColor: '#e11d48',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Link href={'/'}>Create Your First Summary</Link>
            </Button>
          </MotionDiv>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginTop: '1rem',
            }}
          >
            {summaries.map((summary, index) => (
              <SummaryCard key={index} summary={summary} />
            ))}
          </div>
        )}
      </MotionDiv>
    </main>
  );
}
