import { SourceInfo } from '@/components/summaries/source-info';
import { SummaryHeader } from '@/components/summaries/summary-header';
import { SummaryViewer } from '@/components/summaries/summary-viewer';
import { getSummaryById } from '@/lib/summaries';
import { notFound } from 'next/navigation';

export default async function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const summary = await getSummaryById(params.id);

  if (!summary) notFound();

  const readingTime = Math.ceil((summary.word_count || 0) / 200);

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
        <SummaryHeader
          title={summary.title}
          createdAt={summary.created_at}
          readingTime={readingTime}
        />

        <SourceInfo
          title={summary.title}
          summaryText={summary.summary_text}
          videoUrl={summary.video_url}
          createdAt={summary.created_at}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            marginTop: '1rem',
          }}
        >
          {/* YouTube Video Player */}
          <div
            style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${summary.video_id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            ></iframe>
          </div>

          {/* AI Reader UI */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1.5rem',
              padding: '2rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              border: '1px solid #fce7f3',
            }}
          >
            <SummaryViewer summary={summary.summary_text} />
          </div>
        </div>
      </div>
    </div>
  );
}
