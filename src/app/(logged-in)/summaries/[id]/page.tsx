import BgGradient from "@/components/common/bg-gradient";
import { SourceInfo } from "@/components/summaries/source-info";
import { SummaryHeader } from "@/components/summaries/summary-header";
import { SummaryViewer } from "@/components/summaries/summary-viewer";
import { getSummaryById } from "@/lib/summaries";
import { notFound } from "next/navigation";
import { MotionDiv } from "@/components/common/motion-wrapper";
import { FileText } from "lucide-react";

export default async function SummaryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const summary = await getSummaryById(params.id);

  if (!summary) notFound();

  const readingTime = Math.ceil((summary.wordCount || 0) / 200);

  return (
    <div className="relative isolate min-h-screen bg-linear-to-b from-rose-50/40 to-white">
      <BgGradient />
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-24">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <SummaryHeader
              title={summary.title ?? "Untitled Summary"}
              createdAt={
                summary.createdAt?.toISOString() ?? new Date().toISOString()
              }
              readingTime={readingTime}
            />
          </MotionDiv>

          <SourceInfo
            title={summary.title ?? "Untitled Summary"}
            summaryText={summary.summaryText}
            videoUrl={summary.videoUrl}
            createdAt={
              summary.createdAt?.toISOString() ?? new Date().toISOString()
            }
          />

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-4 sm:mt-8 lg:mt-16 flex flex-col gap-8 max-w-4xl mx-auto w-full"
          >
            {/* YouTube Video Player */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${summary.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              ></iframe>
            </div>

            {/* AI Reader UI */}
            <div className="relative p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-rose-100/30 transition-all duration-300 hover:shadow-2xl hover:bg-white/90">
              <div className="absolute inset-0 bg-linear-to-br from-rose-50/50 via-rose-100/30 to-transparent opacity-30 rounded-2xl sm:rounded-3xl" />
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground bg-white/90 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-xs">
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-rose-400" />
                {summary.wordCount?.toLocaleString()} words
              </div>

              <div className="relative mt-8 sm:mt-6 flex justify-center">
                <SummaryViewer summary={summary.summaryText} />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
