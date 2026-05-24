import BgGradient from '@/components/common/bg-gradient';
import YtHeader from '@/components/yt/yt-header';
import UrlForm from '@/components/yt/url-form';
import { MotionDiv } from '@/components/common/motion-wrapper';
import { containerVariants } from '@/utils/constants';

export default function Page() {
  return (
    <section style={{ minHeight: '100vh' }}>
      <BgGradient />
      <div
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 1.5rem' }}
      >
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          <YtHeader />
          <UrlForm />
        </MotionDiv>
      </div>
    </section>
  );
}
