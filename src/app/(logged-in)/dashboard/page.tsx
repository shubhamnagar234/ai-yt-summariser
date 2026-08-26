import SummaryCard from '@/components/summaries/summary-card';
import { Button } from '@/components/ui/button';
import { getSummaries } from '@/lib/summaries';
import { getSession } from '@/lib/auth';
import { Plus, SquarePlay } from 'lucide-react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import BgGradient from '@/components/common/bg-gradient';
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from '@/components/common/motion-wrapper';
import { itemVariants } from '@/utils/constants';

export default async function DashboardPage() {
  const session = await getSession();
  const userId = session?.userId;

  if (!userId) {
    return redirect('/sign-in');
  }

  const summaries = await getSummaries(userId);

  return (
    <main className="max-w-7xl mx-auto">
      <BgGradient className="from-emerald-200 via-teal-200 to-cyan-200" />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex flex-col gap-4"
      >
        <div className="px-2 py-12 sm:py-24">
          <div className="flex gap-4 mb-8 justify-between">
            <div className="flex flex-col gap-2">
              <MotionH1
                variants={itemVariants as any}
                initial="hidden"
                whileInView="visible"
                className="text-4xl font-bold tracking-tight bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent"
              >
                Your Summaries
              </MotionH1>
              <MotionP
                variants={itemVariants as any}
                initial="hidden"
                whileInView="visible"
                className="text-gray-600"
              >
                Transform your YouTube videos into concise, actionable insights
              </MotionP>
            </div>
            <MotionDiv
              variants={itemVariants as any}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="self-start"
            >
              <Button
                variant={'link'}
                className="bg-linear-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 hover:scale-105 transition-all duration-300 group hover:no-underline"
                asChild
              >
                <Link href={'/yt'} className="flex items-center text-white">
                  <Plus className="w-5 h-5 mr-2" />
                  New Summary
                </Link>
              </Button>
            </MotionDiv>
          </div>

          {summaries.length === 0 ? (
            <MotionDiv
              variants={itemVariants as any}
              className="flex flex-col items-center justify-center py-16 px-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm text-center mt-4"
            >
              <SquarePlay className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Summaries yet
              </h3>
              <p className="text-gray-500 max-w-sm mb-6">
                Paste your first YouTube URL to get started with AI-powered summaries.
              </p>
              <Button
                asChild
                className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6"
              >
                <Link href={'/yt'}>Create Your First Summary</Link>
              </Button>
            </MotionDiv>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
              {summaries.map((summary, index) => (
                <SummaryCard key={index} summary={summary} />
              ))}
            </div>
          )}
        </div>
      </MotionDiv>
    </main>
  );
}
