import Nav from "@/app/components/Nav";
import Link from "next/link";

const apps = [
  { name: "Countdown Timer - Day counter", bundleId: "com.hon.day", icon: "📅" },
  { name: "Voice Changer - Sound & Mic", bundleId: "com.hon.voicechange", icon: "🎙️" },
  { name: "Daily Quotes Motivation & Life", bundleId: "com.hon.quote", icon: "💬" },
];

export default function PrivacyListPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-8">Privacy Policies</h1>
        <div className="space-y-3">
          {apps.map((app) => (
            <Link
              key={app.bundleId}
              href={`/privacy/${app.bundleId}`}
              className="flex items-center gap-4 bg-bg-surface border border-border rounded-xl p-5 hover:border-border-hover transition-colors"
            >
              <span className="text-2xl">{app.icon}</span>
              <div>
                <p className="font-medium">{app.name}</p>
                <p className="text-text-muted text-xs font-mono">{app.bundleId}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
