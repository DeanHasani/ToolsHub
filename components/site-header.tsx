"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { name: "Percentage", href: "/tools/percentage-calculator" },
  { name: "Mass", href: "/tools/mass-converter" },
  { name: "Length", href: "/tools/length-converter" },
  { name: "Temperature", href: "/tools/temperature-converter" },
  { name: "Calories", href: "/tools/calorie-estimator" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop nav - centered */}
        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile spacer for centering the theme toggle visible text */}
        <span className="flex-1 md:hidden" />

        <ThemeToggle />
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-t border-border bg-card px-4 pb-4 pt-2 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
