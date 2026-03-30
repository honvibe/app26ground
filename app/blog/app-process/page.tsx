import Nav from "@/app/components/Nav";
import Link from "next/link";
import ProcessTabs from "./ProcessTabs";

export default function AppProcessPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-text-muted text-xs mb-4">2026-03-30 · Process Guide</div>
        <h1 className="text-3xl font-bold leading-tight mb-2">
          กระบวนการทำแอป iOS ตั้งแต่ไอเดียจนถึง Launch
        </h1>
        <p className="text-text-secondary mb-8">
          ทุก step ที่ต้องทำ ไม่ข้ามขั้นตอน ไม่ลืมอะไร
        </p>
        <ProcessTabs />
      </article>
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <Link href="/" className="text-accent text-sm hover:underline">← กลับหน้าหลัก</Link>
      </div>
    </div>
  );
}
