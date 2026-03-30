import Nav from "./components/Nav";
import Link from "next/link";

const apps = [
  { name: "Countdown Timer", bundleId: "com.hon.day", icon: "📅" },
  { name: "Voice Changer", bundleId: "com.hon.voicechange", icon: "🎙️" },
  { name: "Daily Quotes", bundleId: "com.hon.quote", icon: "💬" },
];

const articles = [
  {
    slug: "app-process",
    title: "กระบวนการทำแอป iOS ตั้งแต่ไอเดียจนถึง Launch",
    excerpt: "10 ขั้นตอน — Research, PRD, Stitch, UI/UX, Code, Integration, Test, ASO, Screenshot, Launch",
    date: "2026-03-30",
  },
  {
    slug: "quality-ios-app",
    title: "การทำแอป iOS ให้มีคุณภาพ",
    excerpt: "สิ่งที่ต้องรู้ก่อน submit แอปขึ้น App Store",
    date: "2026-03-30",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <header className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold leading-tight">
          Build better apps.<br />
          <span className="text-accent">Ship faster.</span>
        </h1>
        <p className="text-text-secondary mt-4 text-lg max-w-xl">
          บทความ เครื่องมือ และ privacy policies สำหรับ APP26 iOS apps
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-12">
        {/* Apps */}
        <section>
          <h2 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4">Our Apps</h2>
          <div className="grid grid-cols-3 gap-4">
            {apps.map((app) => (
              <Link
                key={app.bundleId}
                href={`/privacy/${app.bundleId}`}
                className="bg-bg-surface border border-border rounded-xl p-5 hover:border-border-hover transition-colors text-center"
              >
                <span className="text-3xl">{app.icon}</span>
                <p className="font-medium mt-2 text-sm">{app.name}</p>
                <p className="text-text-muted text-xs mt-1">Privacy Policy</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section>
          <h2 className="text-text-muted text-xs font-semibold uppercase tracking-widest mb-4">Articles</h2>
          <div className="space-y-4">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="block bg-bg-surface border border-border rounded-xl p-6 hover:border-border-hover transition-colors group"
              >
                <span className="text-text-muted text-xs">{a.date}</span>
                <h3 className="text-lg font-bold mt-1 group-hover:text-accent transition-colors">{a.title}</h3>
                <p className="text-text-secondary text-sm mt-2">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-6 text-text-muted text-xs">
          APP26 — iOS App Studio
        </div>
      </footer>
    </div>
  );
}
