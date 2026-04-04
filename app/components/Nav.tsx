import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          APP26<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-text-secondary">
          <Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-text-primary transition-colors">Terms</Link>
        </div>
      </div>
    </nav>
  );
}
