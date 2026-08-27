import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/cta-section";
import { GraduationCap, Briefcase, Video, Microscope } from "lucide-react";

export default function UseCasesPage() {
  return (
    <div className="relative w-full min-h-screen">
      <BgGradient />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Built for every{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-rose-700">
            workflow
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Discover how AI YT Summariser helps different professionals and
          learners save hundreds of hours every month.
        </p>
      </div>

      {/* Use Cases Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Students */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-start text-left">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-8">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Students</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Stop re-watching 10-hour lecture playlists right before finals.
              Instantly generate comprehensive study guides and bulleted notes
              from any educational video to cram smarter, not harder.
            </p>
            <ul className="space-y-3 mt-auto w-full">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Summarize long university lectures
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Export summaries to beautifully styled PDFs
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Navigate to key concepts using smart timestamps
              </li>
            </ul>
          </div>

          {/* Professionals */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-start text-left">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-8">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Professionals
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Stay ahead in your industry without sacrificing your weekend.
              Catch up on lengthy tech talks, keynotes, and industry conferences
              in minutes instead of hours.
            </p>
            <ul className="space-y-3 mt-auto w-full">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Digest 2-hour town halls instantly
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Extract key actionable insights and metrics
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Share high-level PDF briefs with your team
              </li>
            </ul>
          </div>

          {/* Content Creators */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-start text-left">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-8">
              <Video className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Content Creators
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Analyze your competitors' videos with surgical precision. Extract
              their main talking points, identify content gaps, and brainstorm
              your next viral video effortlessly.
            </p>
            <ul className="space-y-3 mt-auto w-full">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Analyze competitor video structures
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Extract scripts and talking points
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Brainstorm new content ideas faster
              </li>
            </ul>
          </div>

          {/* Researchers */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col items-start text-left">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-8">
              <Microscope className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Researchers
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Turn documentaries and long-form interviews into searchable,
              structured data. Extract hard facts, quotes, and statistics to
              accelerate your research process.
            </p>
            <ul className="space-y-3 mt-auto w-full">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Extract quotes and facts from documentaries
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Structure messy long-form interviews
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-3"></span>
                Save hours of manual transcribing and note-taking
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
