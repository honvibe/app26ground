import Nav from "@/app/components/Nav";
import Link from "next/link";

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

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-8">Blog</h1>
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
      </main>
    </div>
  );
}
