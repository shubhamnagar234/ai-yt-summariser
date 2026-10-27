# 🎥 AI YouTube Summariser

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![PostgreSQL](https://img.shields.io/badge/Neon-PostgreSQL-00E599?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

An enterprise-grade, full-stack AI SaaS application that extracts, analyzes, and condenses long-form YouTube videos into structured, actionable executive summaries with key takeaways and exportable reports in seconds.

Built with **Next.js 15 (App Router & Server Actions)**, **TypeScript**, **Google Gemini & OpenAI**, **Drizzle ORM**, **Neon Serverless PostgreSQL**, and a modern dark UI powered by **Tailwind CSS** and **Framer Motion**.

---

## 📌 Table of Contents

- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Database Schema (Drizzle ORM)](#-database-schema-drizzle-orm)
- [Getting Started Locally](#-getting-started-locally)
- [Environment Configuration](#-environment-configuration)
- [Key Engineering Highlights](#-key-engineering-highlights)
- [Contributing & License](#-contributing--license)

---

## ✨ Key Features

- **⚡ Instant YouTube Transcript Extraction**: Automated extraction and normalization of video captions across single videos and long lectures using `youtube-transcript`.
- **🧠 Multi-Model AI Summarization Engine**: Intelligent summarization pipeline powered by **Google Gemini** and **OpenAI GPT** models, distilling lengthy transcripts into:
  - High-level executive overview.
  - Bulleted key insights & takeaways.
  - Actionable conclusions and learning points.
- **🔐 Secure Authentication & Session Management**: Built with custom JWT session authentication (`jose`, `bcrypt`) with secure HTTP-only cookies and protected route middleware.
- **📊 Personalized User Dashboard**: Users can track their summary history, revisit previous analyses, search, and manage records with optimistic UI updates.
- **📄 Client-Side PDF & Image Export**: One-click export of structured summaries to professional, clean PDF documents or images using `jspdf` and `html2canvas`.
- **🎨 Sleek, Accessible UI/UX**: Designed with a responsive dark aesthetic, subtle glassmorphism, fluid micro-interactions with **Framer Motion**, and toast feedback with **Sonner**.

---

## 🏛 System Architecture

```
                                  ┌──────────────────────────────────────────────┐
                                  │           Client (Next.js 15 + React 19)     │
                                  │    - Modern Dark UI / Framer Motion          │
                                  │    - YouTube URL Input Form                  │
                                  │    - Export to PDF (jsPDF / html2canvas)     │
                                  └──────────────────────┬───────────────────────┘
                                                         │
                                                         │ HTTP / Server Actions
                                                         ▼
                                  ┌──────────────────────────────────────────────┐
                                  │           Next.js Server Actions Layer       │
                                  │  - Auth Validation (jose JWT / bcrypt)       │
                                  │  - URL Sanitization & Video ID Extraction    │
                                  │  - Transcript Fetching (youtube-transcript)  │
                                  └──────────┬────────────────────────┬──────────┘
                                             │                        │
                    ┌────────────────────────┴────────┐      ┌────────┴────────────────────────┐
                    ▼                                 ▼      ▼                                 ▼
      ┌──────────────────────────┐                             ┌──────────────────────────┐
      │   AI Summarization Core  │                             │   Data Persistence Layer │
      │  - Google Gemini 1.5 Pro │                             │  - Drizzle ORM           │
      │  - OpenAI GPT Engine     │                             │  - Neon Serverless       │
      │  - Context-Aware Prompts │                             │    PostgreSQL Pooler     │
      └──────────────────────────┘                             └──────────────────────────┘
```

---

## 🛠 Tech Stack

| Domain                    | Technology / Tool                                                                                                    | Purpose                                          |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| **Framework**             | [Next.js 15](https://nextjs.org/)                                                                                    | App Router, Server Components & Server Actions   |
| **Language**              | [TypeScript](https://www.typescriptlang.org/)                                                                        | End-to-end type safety                           |
| **AI / LLMs**             | [Google Gemini](https://ai.google.dev/), [OpenAI](https://openai.com/)                                               | Advanced multi-stage transcript summarization    |
| **Transcript Extractor**  | [youtube-transcript](https://www.npmjs.com/package/youtube-transcript)                                               | Direct video subtitle and caption retrieval      |
| **Database**              | [Neon PostgreSQL](https://neon.tech/)                                                                                | Serverless Postgres with instant branching       |
| **ORM**                   | [Drizzle ORM](https://orm.drizzle.team/)                                                                             | Type-safe SQL schema definitions & migrations    |
| **Authentication**        | [Jose](https://github.com/panva/jose), [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)                          | Stateless JWT cookie sessions & password hashing |
| **Styling & Components**  | [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/) | Accessible, responsive dark design system        |
| **Animations & Feedback** | [Framer Motion](https://motion.dev/), [Sonner](https://sonner.emilkowal.ski/)                                        | Fluid transitions and rich interactive toasts    |
| **Exporting Engine**      | [jsPDF](https://github.com/parallax/jsPDF), [html2canvas](https://html2canvas.hertzen.com/)                          | Client-side document and image rendering         |

---

## 🗄 Database Schema (Drizzle ORM)

The database schema is defined with strict relational integrity using Drizzle ORM (`src/db/schema.ts`):

```typescript
import { pgTable, text, timestamp, varchar, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  fullName: varchar("full_name", { length: 255 }),
  passwordHash: text("password_hash"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const videoSummaries = pgTable("video_summaries", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  videoUrl: text("video_url").notNull(),
  videoId: varchar("video_id", { length: 255 }).notNull(),
  summaryText: text("summary_text").notNull(),
  title: text("title"),
  status: varchar("status", { length: 50 }).default("completed"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites

- **Node.js** (v18.17+ or v20+)
- **npm**, **pnpm**, or **yarn**
- A free **Neon PostgreSQL** database account
- API keys from **Google AI Studio (Gemini)** and/or **OpenAI**

### 2. Clone the Repository

```bash
git clone https://github.com/shubhamnagar234/ai-yt-summariser.git
cd ai-yt-summariser
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Copy the example environment file and populate your keys:

```bash
cp .env.example .env
```

Edit `.env`:

```ini
JWT_SECRET="your-generated-jwt-secret"
GEMINI_API_KEY="your-gemini-api-key"
OPENAI_API_KEY="your-openai-api-key"
DATABASE_URL="postgresql://user:password@host/neondb?sslmode=require"
```

### 5. Push Database Schema to Neon

```bash
npx drizzle-kit push
```

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Key Engineering Highlights

1. **Server Actions Over Heavy API Routes**: Leverages Next.js 15 Server Actions for mutation operations, simplifying client-server communication and eliminating redundant boilerplate.
2. **Resilient AI Pipeline**: Designed with defensive transcript pre-processing, handling missing captions, stripping redundant filler words, and chunking long transcripts to stay comfortably within LLM context boundaries.
3. **Optimistic UI with Revalidation**: Next.js route caching and `revalidatePath` ensure newly generated summaries reflect instantly on the dashboard without manual page refreshes.
4. **Client-Side Document Export**: Eliminates server-side rendering bottlenecks for PDF exports by executing canvas composition directly in the user's browser.

---

## 🤝 Contributing & License

Contributions, feedback, and pull requests are warmly welcomed!

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Crafted with ❤️ by <b>Shubham Nagar</b>
</p>
