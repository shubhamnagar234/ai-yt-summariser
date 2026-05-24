import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionSection,
  MotionSpan,
} from '@/components/common/motion-wrapper';
import {
  buttonVariants,
  containerVariants,
  itemVariants,
} from '@/utils/constants';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: 'relative',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1rem',
        maxWidth: '1200px',
        zIndex: 0,
      }}
    >
      <MotionDiv
        variants={itemVariants as any}
        style={{
          padding: '1px',
          borderRadius: '9999px',
          backgroundImage:
            'linear-gradient(to right, #fecdd3, #f43f5e, #9f1239)',
        }}
      >
        <Badge
          style={{
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 500,
            backgroundColor: 'white',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
          }}
        >
          <Sparkles
            style={{
              width: '1.5rem',
              height: '1.5rem',
              marginRight: '0.5rem',
              color: '#e11d48',
            }}
          />
          <p style={{ color: '#e11d48', margin: 0 }}>Powered by AI</p>
        </Badge>
      </MotionDiv>

      <MotionH1
        variants={itemVariants as any}
        style={{
          fontWeight: 800,
          padding: '1.5rem 0',
          textAlign: 'center',
          color: '#111827',
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        Transform YouTube Videos into{' '}
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <MotionSpan
            whileHover={buttonVariants.hover as any}
            style={{ position: 'relative', zIndex: 10, padding: '0 0.5rem' }}
          >
            concise
          </MotionSpan>
          <span
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#fecdd3',
              borderRadius: '0.5rem',
              transform: 'rotate(-2deg) skewY(-1deg)',
            }}
            aria-hidden="true"
          ></span>
        </span>{' '}
        summaries
      </MotionH1>

      <MotionH2
        variants={itemVariants as any}
        style={{
          fontSize: '1.25rem',
          textAlign: 'center',
          maxWidth: '56rem',
          color: '#4b5563',
          margin: 0,
          fontWeight: 400,
        }}
      >
        Get a beautiful summary reel of the video in seconds
      </MotionH2>

      <MotionDiv
        variants={itemVariants as any}
        whileHover={buttonVariants.hover as any}
      >
        <Button
          asChild
          style={{
            marginTop: '2.5rem',
            fontSize: '1.125rem',
            borderRadius: '9999px',
            padding: '1.5rem 3rem',
            backgroundImage: 'linear-gradient(to right, #0f172a, #e11d48)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
          }}
        >
          <Link href="/dashboard">
            <span>Try AI YT Summariser</span>
            <ArrowRight />
          </Link>
        </Button>
      </MotionDiv>
    </MotionSection>
  );
}
