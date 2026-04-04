import Nav from "@/app/components/Nav";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-1">Terms of Use</h1>
        <p className="text-text-muted text-sm mb-8">Last updated: April 4, 2026</p>

        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          These terms of use apply to all apps published by <strong className="text-text-primary">Nattapon Kittisuphat</strong> (&quot;APP26&quot;, &quot;we&quot;, &quot;us&quot;) on the Apple App Store. By downloading or using any of our apps, you agree to these terms.
        </p>

        <div className="space-y-8 text-text-secondary text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using our apps, you agree to be bound by these Terms of Use. If you do not agree, do not use the app.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">2. Use of the App</h2>
            <p>Our apps are provided for personal, non-commercial use. You agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Use the app only for its intended purpose.</li>
              <li>Not reverse engineer, modify, or distribute the app or its content.</li>
              <li>Not use the app for any unlawful purpose.</li>
              <li>Not attempt to interfere with the app&apos;s functionality or security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">3. Subscriptions & In-App Purchases</h2>
            <p>Some of our apps offer auto-renewable subscriptions and one-time purchases:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
              <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</li>
              <li>You can manage and cancel subscriptions in your Apple ID account settings (Settings &rarr; Apple ID &rarr; Subscriptions).</li>
              <li>Any unused portion of a free trial period will be forfeited when you purchase a subscription.</li>
              <li>Prices may vary by region and are subject to change.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">4. Intellectual Property</h2>
            <p>All content in our apps — including designs, icons, illustrations, text, and code — is owned by APP26 and protected by copyright laws. You may not reproduce or distribute any part of our apps without written permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">5. Disclaimer</h2>
            <p>Our apps are provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted. For fitness and health-related apps, the content is for informational purposes only and should not replace professional medical advice.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, APP26 shall not be liable for any indirect, incidental, or consequential damages arising from your use of our apps.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">7. Changes to These Terms</h2>
            <p>We may update these terms from time to time. Changes will be posted on this page with an updated date. Continued use of the app after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-text-primary mb-3">8. Contact Us</h2>
            <p>If you have questions about these terms, contact us at:</p>
            <p className="mt-2">
              Email: <a href="mailto:nattahon@gmail.com" className="text-accent hover:underline">nattahon@gmail.com</a>
            </p>
          </section>

        </div>
      </article>

      <div className="max-w-3xl mx-auto px-6 pb-12">
        <Link href="/" className="text-accent text-sm hover:underline">&larr; Back to home</Link>
      </div>
    </div>
  );
}
