import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <p>{"© 2026 ToolHub. Free online tools."}</p>
        <nav className="flex flex-wrap items-center justify-center gap-4" aria-label="Footer navigation">
          <Link href="/about" className="transition-colors hover:text-foreground">About</Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
        </nav>
      </div>
    </footer>
  )
}
