import { Calendar, ChevronLeft, Clock, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import Link from 'next/link';

export function SummaryHeader({
  title,
  createdAt,
  readingTime,
}: {
  title: string;
  createdAt: string;
  readingTime: number;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Badge
            variant="secondary"
            style={{
              backgroundColor: '#fff1f2',
              color: '#e11d48',
              border: '1px solid #ffe4e6',
              display: 'flex',
              alignItems: 'center',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
            }}
          >
            <Sparkles
              style={{ height: '1rem', width: '1rem', marginRight: '0.375rem' }}
            />
            AI Summary
          </Badge>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: '#6b7280',
            }}
          >
            <Calendar
              style={{ height: '1rem', width: '1rem', color: '#fb7185' }}
            />
            {new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: '#6b7280',
            }}
          >
            <Clock
              style={{ height: '1rem', width: '1rem', color: '#fb7185' }}
            />
            {readingTime} min read
          </div>
        </div>

        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          <span
            style={{
              backgroundImage: 'linear-gradient(to right, #e11d48, #ea580c)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {title}
          </span>
        </h1>
      </div>

      <div style={{ alignSelf: 'flex-start' }}>
        <Button
          variant="outline"
          size="sm"
          asChild
          style={{ borderRadius: '9999px', backgroundColor: 'white' }}
        >
          <Link
            href={'/dashboard'}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <ChevronLeft
              style={{ height: '1rem', width: '1rem', color: '#e11d48' }}
            />
            <span style={{ color: '#4b5563', fontWeight: 500 }}>
              Back to Dashboard
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
