import type { Metadata } from "next";
import { ReactNode } from "react";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | AI YT Summariser",
    default:
      "AI YT Summariser - Transform Long Videos into Actionable Insights",
  },
  description:
    "Save time and effort with AI-Powered YouTube Video Summarization. Get key takeaways, timestamps, and full summaries in seconds.",
  keywords: [
    "YouTube summariser",
    "AI summarizer",
    "Video summary",
    "Productivity tool",
    "AI video transcription",
  ],
  authors: [{ name: "AI YT Summariser Team" }],
  creator: "AI YT Summariser",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-yt-summariser.com",
    title: "AI YT Summariser - Transform Long Videos into Actionable Insights",
    description:
      "Save time and effort with AI-Powered YouTube Video Summarization. Get key takeaways and timestamps in seconds.",
    siteName: "AI YT Summariser",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI YT Summariser",
    description:
      "Save time and effort with AI-Powered YouTube Video Summarization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
