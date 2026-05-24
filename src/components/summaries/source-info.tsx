import { ExternalLink, SquarePlay } from 'lucide-react';
import { Button } from '../ui/button';
import { DownloadSummaryButton } from './download-summary-button';

export function SourceInfo({
  videoUrl,
  title,
  summaryText,
  createdAt,
}: {
  videoUrl: string;
  title: string;
  summaryText: string;
  createdAt: string;
}) {
  return (
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#4b5563',
          fontSize: '0.875rem',
        }}
      >
        <SquarePlay
          style={{ height: '1.25rem', width: '1.25rem', color: '#f43f5e' }}
        />
        <span>Source: YouTube Video</span>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button variant="ghost" size="sm" asChild style={{ color: '#e11d48' }}>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <ExternalLink
              style={{ height: '1rem', width: '1rem', marginRight: '0.25rem' }}
            />
            View Original
          </a>
        </Button>
        <DownloadSummaryButton
          title={title}
          summaryText={summaryText}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
}
