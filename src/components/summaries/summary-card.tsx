import { SquarePlay } from 'lucide-react';
import { Card } from '../ui/card';
import DeleteButton from './delete-button';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { MotionDiv } from '../common/motion-wrapper';
import { itemVariants } from '@/utils/constants';

const SummaryHeader = ({
  title,
  createdAt,
}: {
  title: string | null;
  createdAt: string;
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
      <SquarePlay
        style={{
          width: '2rem',
          height: '2rem',
          color: '#fb7185',
          marginTop: '0.25rem',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#111827',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title || 'YouTube Video'}
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            margin: 0,
            marginTop: '0.25rem',
          }}
        >
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

export default function SummaryCard({ summary }: { summary: any }) {
  return (
    <MotionDiv
      variants={itemVariants as any}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      style={{ height: '100%' }}
    >
      <Card
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            zIndex: 10,
          }}
        >
          <DeleteButton summaryId={summary.id} />
        </div>
        <Link
          href={`/summaries/${summary.id}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '1rem',
          }}
        >
          <SummaryHeader title={summary.title} createdAt={summary.created_at} />

          <p
            style={{
              color: '#4b5563',
              fontSize: '0.875rem',
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {summary.summary_text}
          </p>

          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <span
              style={{
                padding: '0.25rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 500,
                borderRadius: '9999px',
                textTransform: 'capitalize',
                backgroundColor:
                  summary.status === 'completed' ? '#dcfce7' : '#fef9c3',
                color: summary.status === 'completed' ? '#166534' : '#854d0e',
              }}
            >
              {summary.status}
            </span>
          </div>
        </Link>
      </Card>
    </MotionDiv>
  );
}
