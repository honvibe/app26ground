import Nav from "@/app/components/Nav";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-1">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-8">Last updated: March 30, 2026</p>

        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          This privacy policy applies to all apps published by <strong className="text-text-primary">Nattapon Kittisuphat</strong> (&quot;APP26&quot;, &quot;we&quot;, &quot;us&quot;) on the Apple App Store. By using any of our apps, you agree to the terms described below.
        </p>

        <div className="space-y-8 text-text-secondary text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">1. Information We Collect</h2>
            <p>We collect the following types of data:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong>Usage Data:</strong> App interactions, feature usage, and preferences — stored locally on your device.</li>
              <li><strong>Analytics Data:</strong> Anonymous usage events (app opens, core actions, feature usage) sent to Mixpanel for product improvement. No personal information is tied to this data.</li>
              <li><strong>Advertising Data:</strong> Device advertising identifier (IDFA) used by Google AdMob to serve relevant ads, subject to your App Tracking Transparency (ATT) consent.</li>
              <li><strong>Purchase Data:</strong> In-app purchase and subscription records managed by Apple — we do not collect or store payment information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and improve app features</li>
              <li>To track your progress and usage streaks</li>
              <li>To display relevant advertisements (free users only)</li>
              <li>To analyze app performance and user behavior anonymously</li>
              <li>To send reminders and notifications (with your permission)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">3. Third-Party Services</h2>
            <p>Our apps use the following third-party services:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong>Google AdMob</strong> — Advertising. <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
              <li><strong>Mixpanel</strong> — Analytics. <a href="https://mixpanel.com/legal/privacy-policy/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Mixpanel Privacy Policy</a></li>
              <li><strong>Apple StoreKit</strong> — In-app purchases and subscriptions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">4. Advertising & Tracking</h2>
            <p>We use Google AdMob to display ads to free users. Before collecting your IDFA for personalized advertising, we request your consent via Apple&apos;s App Tracking Transparency (ATT) framework. We also implement Google UMP (User Messaging Platform) for GDPR consent before loading any ads.</p>
            <p className="mt-2">You can change your tracking preference at any time in your device Settings. Users who have purchased ad removal do not see any advertisements.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">5. In-App Purchases & Subscriptions</h2>
            <p>Our apps may offer one-time purchases and/or auto-renewable subscriptions. All transactions are processed by Apple through the App Store. We do not collect or store any payment information.</p>
            <p className="mt-2">For subscriptions:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
              <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</li>
              <li>You can manage and cancel subscriptions in your Apple ID account settings.</li>
              <li>Any unused portion of a free trial period will be forfeited when you purchase a subscription.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">6. Data Storage & Security</h2>
            <p>Your data (preferences, favorites, progress) is stored locally on your device. We do not maintain user accounts or store personal data on external servers.</p>
            <p className="mt-2">Analytics data sent to Mixpanel is anonymous and cannot be used to identify you personally.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">7. Children&apos;s Privacy</h2>
            <p>Our apps are not directed at children under 13. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">8. Your Rights</h2>
            <p>You can:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Opt out of ad tracking via Settings → Privacy → Tracking</li>
              <li>Delete all local app data by uninstalling the app</li>
              <li>Manage subscriptions via Settings → Apple ID → Subscriptions</li>
              <li>Request information about your data by contacting us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">9. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">10. Contact Us</h2>
            <p>If you have questions about this privacy policy, contact us at:</p>
            <p className="mt-2">
              Email: <a href="mailto:nattahon@gmail.com" className="text-accent hover:underline">nattahon@gmail.com</a>
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
