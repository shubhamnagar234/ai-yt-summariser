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
        padding: '0.875rem 1rem',
        borderRadius: '0.875rem',
        border: '1px solid rgba(252, 205, 211, 0.6)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,241,242,0.6) 100%)',
        boxShadow: '0 1px 3px rgba(225, 29, 72, 0.06)',
        transition: 'all 0.2s ease',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
      >
        <span
          style={{ fontSize: '1.25rem', flexShrink: 0, lineHeight: 1.6 }}
        >
          {emoji}
        </span>
        <p
          style={{
            fontSize: '0.9375rem',
            color: '#374151',
            lineHeight: 1.7,
            margin: 0,
            fontWeight: 450,
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
        padding: '0.875rem 1rem 0.875rem 1.25rem',
        borderRadius: '0.875rem',
        border: '1px solid rgba(252, 205, 211, 0.6)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,241,242,0.6) 100%)',
        boxShadow: '0 1px 3px rgba(225, 29, 72, 0.06)',
        borderLeft: '3px solid #fb7185',
        backdropFilter: 'blur(4px)',
      }}
    >
      <p
        style={{
          position: 'relative',
          fontSize: '0.9375rem',
          color: '#374151',
          lineHeight: 1.7,
          margin: 0,
          textAlign: 'left',
          fontWeight: 450,
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
      style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
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
