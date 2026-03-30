import Nav from "@/app/components/Nav";
import Link from "next/link";

export default function QualityIOSAppArticle() {
  return (
    <div className="min-h-screen">
      <Nav />
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-text-muted text-xs mb-4">2026-03-30 · 5 min read</div>
        <h1 className="text-3xl font-bold leading-tight mb-8">การทำแอป iOS ให้มีคุณภาพ</h1>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p className="text-lg">
            การทำแอปที่ดีไม่ใช่แค่ code ทำงานได้ แต่ต้องครบตั้งแต่ UX จนถึง App Store listing
          </p>

          <h2 className="text-xl font-bold text-text-primary pt-4">1. Privacy & Compliance</h2>
          <p>
            ทุกแอปต้องมี <code className="text-accent bg-bg-elevated px-1.5 py-0.5 rounded text-sm">PrivacyInfo.xcprivacy</code> ตั้งแต่ 2024
            เป็นต้นมา ไม่มี = โดน reject ทันที นอกจากนี้ต้องมี ATT prompt ก่อน load ads
            และ Google UMP (CMP) สำหรับ GDPR consent
          </p>

          <h2 className="text-xl font-bold text-text-primary pt-4">2. Monetization ที่ไม่รำคาญ</h2>
          <p>
            Ad ที่ดีต้องไม่ขัดจังหวะ user — ใช้ grace period session แรก
            ไม่โชว์ interstitial ตอน launch frequency cap ไม่เกิน 1 ต่อ 3-4 actions
          </p>

          <h2 className="text-xl font-bold text-text-primary pt-4">3. ASO — ชื่อและคำค้นต้องตรง</h2>
          <p>
            ห้ามใส่สิ่งที่แอปยังไม่มี ใช้ App Store autocomplete research หา keyword จริง
            ทำ localization อย่างน้อย 5-8 locales
          </p>

          <h2 className="text-xl font-bold text-text-primary pt-4">4. Responsive ทุก Device</h2>
          <p>
            เช็คทุกครั้งหลัง code เสร็จ — iPhone SE, iPhone 16, Pro Max, iPad
          </p>

          <h2 className="text-xl font-bold text-text-primary pt-4">5. Checklist ก่อน Submit</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>PrivacyInfo.xcprivacy + App Privacy ใน ASC ตรงกัน</li>
            <li>ATT prompt + Google UMP ก่อน load ads</li>
            <li>ITSAppUsesNonExemptEncryption = NO</li>
            <li>Settings: IAP, Rate App, More Apps, Privacy Policy, Version</li>
            <li>IAP ซื้อได้ + Restore ได้</li>
            <li>Screenshots ครบ + ไม่มี emoji ใน App Store text</li>
          </ul>

          <div className="border-t border-border pt-8 mt-8">
            <p className="text-text-muted text-sm">เขียนโดยทีม APP26</p>
          </div>
        </div>
      </article>
      <div className="max-w-3xl mx-auto px-6 pb-12">
        <Link href="/" className="text-accent text-sm hover:underline">← กลับหน้าหลัก</Link>
      </div>
    </div>
  );
}
