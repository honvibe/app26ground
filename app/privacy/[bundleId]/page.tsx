import Nav from "@/app/components/Nav";
import Link from "next/link";
import { notFound } from "next/navigation";

const apps: Record<string, { name: string; icon: string }> = {
  "com.hon.day": { name: "Countdown Timer - Day counter", icon: "📅" },
  "com.hon.voicechange": { name: "Voice Changer - Sound & Mic", icon: "🎙️" },
  "com.hon.quote": { name: "Daily Quotes Motivation & Life", icon: "💬" },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ bundleId: string }>;
}) {
  const { bundleId } = await params;
  const app = apps[bundleId];
  if (!app) notFound();

  return (
    <div className="min-h-screen">
      <Nav />

      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{app.icon}</span>
          <div>
            <h1 className="text-2xl font-bold">{app.name}</h1>
            <p className="text-text-muted text-xs font-mono">{bundleId}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>

        <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
          <p>Last updated: March 30, 2026</p>

          <section>
            <h3 className="text-text-primary font-semibold mb-2">Information We Collect</h3>
            <p>
              We collect minimal data necessary to provide and improve our app. This includes:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Device Information:</strong> Device model, OS version, and app version for crash reporting and compatibility.</li>
              <li><strong>Usage Data:</strong> Anonymous analytics (via Mixpanel) including app opens, feature usage, and purchase events. No personal information is tied to this data.</li>
              <li><strong>Advertising ID (IDFA):</strong> Collected only with your consent (via App Tracking Transparency prompt) to serve personalized ads through Google AdMob.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-text-primary font-semibold mb-2">Advertising</h3>
            <p>
              We use Google AdMob to display ads. AdMob may collect and use data as described in{" "}
              <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                Google&apos;s Privacy Policy
              </a>. We implement Google UMP (User Messaging Platform) for GDPR consent before loading any ads.
            </p>
          </section>

          <section>
            <h3 className="text-text-primary font-semibold mb-2">In-App Purchases</h3>
            <p>
              All purchases are processed by Apple through the App Store. We do not collect or store any payment information. Purchase status is stored locally on your device.
            </p>
          </section>

          <section>
            <h3 className="text-text-primary font-semibold mb-2">Data Storage</h3>
            <p>
              All user data (favorites, settings, preferences) is stored locally on your device using SwiftData and UserDefaults. We do not maintain any server-side database of user data.
            </p>
          </section>

          <section>
            <h3 className="text-text-primary font-semibold mb-2">Third-Party Services</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Google AdMob</strong> — Advertising</li>
              <li><strong>Mixpanel</strong> — Anonymous analytics</li>
              <li><strong>Apple StoreKit</strong> — In-app purchases</li>
            </ul>
          </section>

          <section>
            <h3 className="text-text-primary font-semibold mb-2">Children&apos;s Privacy</h3>
            <p>
              Our app is not directed to children under 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h3 className="text-text-primary font-semibold mb-2">Your Rights</h3>
            <p>
              You can opt out of personalized advertising by declining the App Tracking Transparency prompt. You can delete all local data by uninstalling the app.
            </p>
          </section>

          <section>
            <h3 className="text-text-primary font-semibold mb-2">Contact</h3>
            <p>
              If you have questions about this privacy policy, contact us at:{" "}
              <a href="mailto:nattahon@gmail.com" className="text-accent hover:underline">
                nattahon@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>

      <div className="max-w-3xl mx-auto px-6 pb-12">
        <Link href="/" className="text-accent text-sm hover:underline">← Back to home</Link>
      </div>
    </div>
  );
}
