import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/home/cta-section";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen">
      <BgGradient />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-rose-700">
            Mission
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          We believe that learning should be fast, accessible, and free from
          fluff.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="relative group overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-100 p-10 md:p-16 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Problem with Video
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            YouTube is the greatest educational library in human history. But
            it's also incredibly inefficient. For every 1 hour of video, there
            might only be 5 minutes of actual, actionable knowledge. The rest is
            sponsors, intros, tangents, and filler.
            <br />
            <br />
            We realized that students, professionals, and researchers were
            wasting hundreds of hours every year just trying to find the "point"
            of a video.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Solution
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            AI YT Summariser was built to cut through the noise. By leveraging
            cutting-edge Artificial Intelligence, we can process a 2-hour
            lecture in seconds and hand you the exact bullet points, insights,
            and timestamps you actually care about.
            <br />
            <br />
            Our goal is to give you your time back, so you can focus on
            executing ideas instead of just consuming them.
          </p>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
