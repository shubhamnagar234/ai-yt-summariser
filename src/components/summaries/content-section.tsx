import { parseEmojiPoint, parsePoint } from '@/utils/summary-helpers';
import { MotionDiv } from '../common/motion-wrapper';
import { containerVariants, itemVariants } from '@/utils/constants';

const EmojiPoint = ({ point }: { point: string }) => {
  const parsed = parseEmojiPoint(point);
  const emoji = parsed?.emoji ?? '';
  const text = parsed?.text ?? point.replace(/^[•]\s*/, '');

  return (
    <MotionDiv
      variants={itemVariants as any}
      className="group relative bg-linear-to-br from-gray-200/8 to-gray-400/3 p-4 rounded-2xl border border-gray-500/10 hover: shadow-lg transition-all"
    >
      <div className="absolute inset-0 bg-linear-to-r from-gray-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="relative flex items-start gap-3">
        {emoji && <span className="text-lg lg:text-xl shrink-0 pt-1">{emoji}</span>}
        <p className="text-lg lg:text-xl text-muted-foreground/90 leading-relaxed">
          {text}
        </p>
      </div>
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
      className="space-y-4"
    >
      {points.map((point, index) => {
        const { isEmpty } = parsePoint(point);
        if (isEmpty) return null;
        return <EmojiPoint key={`point-${index}`} point={point} />;
      })}
    </MotionDiv>
  );
}
