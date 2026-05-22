import BgGradient from '@/components/common/bg-gradient';
import YtHeader from '@/components/yt/yt-header';
import UrlForm from '@/components/yt/url-form';

export default function Page() {
  return (
    <section style={{ minHeight: '100vh' }}>
      <BgGradient />
      <div
        style={{ margin: '0 auto', maxWidth: '80rem', padding: '6rem 1.5rem' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            textAlign: 'center',
          }}
        >
          <YtHeader />
          <UrlForm />
        </div>
      </div>
    </section>
  );
}
