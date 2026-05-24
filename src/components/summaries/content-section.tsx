import { parseEmojiPoint, parsePoint } from '@/utils/summary-helpers';
import { MotionDiv } from '../common/motion-wrapper';
import { containerVariants, itemVariants } from '@/utils/constants';

const EmojiPoint = ({ point }: { point: string }) => {
  const parsed = parseEmojiPoint(point);
  const emoji = parsed?.emoji || '';
  const text = parsed?.text || point;

  return (
    <MotionDiv
      variants={itemVariants as any}
      style={{
        position: 'relative',
        padding: '1rem',
        borderRadius: '1rem',
        border: '1px solid rgba(107, 114, 128, 0.1)',
        backgroundColor: 'rgba(243, 244, 246, 0.5)',
        transition: 'all 0.3s',
      }}
    >
      <div
        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
      >
        <span
          style={{ fontSize: '1.25rem', flexShrink: 0, paddingTop: '0.25rem' }}
        >
          {emoji}
        </span>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#374151',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {text}
        </p>
      </div>
    </MotionDiv>
  );
};

const RegularPoint = ({ point }: { point: string }) => {
  return (
    <MotionDiv
      variants={itemVariants as any}
      style={{
        position: 'relative',
        padding: '1rem',
        borderRadius: '1rem',
        border: '1px solid rgba(107, 114, 128, 0.1)',
        backgroundColor: 'rgba(243, 244, 246, 0.5)',
        transition: 'all 0.3s',
      }}
    >
      <p
        style={{
          position: 'relative',
          fontSize: '1.125rem',
          color: '#374151',
          lineHeight: 1.6,
          margin: 0,
          textAlign: 'left',
        }}
      >
        {point}
      </p>
    </MotionDiv>
  );
};

export default function ContentSection({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <MotionDiv
      variants={containerVariants}
      key={points.join('')}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      {points.map((point, index) => {
        const { isMainPoint, hasEmoji, isEmpty } = parsePoint(point);

        if (isEmpty) return null;

        if (hasEmoji || isMainPoint) {
          return <EmojiPoint key={`point-${index}`} point={point} />;
        }
        return <RegularPoint key={`point-${index}`} point={point} />;
      })}
    </MotionDiv>
  );
}
