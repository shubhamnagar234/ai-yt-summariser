import { SquarePlay } from "lucide-react";
import DeleteButton from "./delete-button";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { MotionDiv } from "../common/motion-wrapper";
import { itemVariants } from "@/utils/constants";

const SummaryHeader = ({
  title,
  createdAt,
}: {
  title: string | null;
  createdAt: string;
}) => {
  return (
    <div className="flex items-start gap-4">
      <SquarePlay className="w-8 h-8 text-rose-500 mt-1 shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {title || "YouTube Video"}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

export default function SummaryCard({ summary }: { summary: any }) {
  return (
    <MotionDiv
      variants={itemVariants as any}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="h-full"
    >
      <div className="relative h-full flex flex-col bg-white/60 backdrop-blur-sm border border-rose-100 rounded-2xl shadow-xl shadow-rose-500/5 transition-all duration-300 hover:shadow-rose-500/10 overflow-hidden">
        <div className="absolute top-4 right-4 z-10">
          <DeleteButton summaryId={summary.id} />
        </div>
        <Link
          href={`/summaries/${summary.id}`}
          className="flex flex-col flex-1 p-6 gap-4 outline-none"
        >
          <SummaryHeader title={summary.title} createdAt={summary.createdAt} />

          <p className="text-gray-600 text-sm line-clamp-2">
            {summary.summaryText}
          </p>

          <div className="mt-auto pt-4">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full capitalize ${
                (summary.status || "pending") === "completed"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {summary.status || "pending"}
            </span>
          </div>
        </Link>
      </div>
    </MotionDiv>
  );
}
