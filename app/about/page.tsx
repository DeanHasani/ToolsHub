import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description: "ToolHub provides free, accurate online calculators and unit converters. No sign-up required.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:py-14">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">About ToolHub</h1>

      <div className="mt-6 flex flex-col gap-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          ToolHub provides free, reliable online tools for everyday calculations and conversions. No sign-ups, no paywalls -- just open a tool and use it.
        </p>
        <p>
          Our tools include a percentage calculator, mass converter, length converter, temperature converter, and calorie estimator. All conversion formulas use standard, verified values. We regularly review our calculations to ensure accuracy.
        </p>
        <p>
          The site is supported by ads. We keep advertising minimal and non-intrusive so it does not interfere with your experience.
        </p>
        <p>
          If you find an error or have a suggestion, reach out at <span className="text-foreground">toolhub.feedback@gmail.com</span>.
        </p>
      </div>

      <section className="mt-10 rounded-lg border border-border bg-secondary/30 p-4">
        <h3 className="text-sm font-medium text-foreground">All Tools</h3>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/tools/percentage-calculator" className="text-sm text-accent hover:underline">Percentage Calculator</Link>
          <Link href="/tools/mass-converter" className="text-sm text-accent hover:underline">Mass Converter</Link>
          <Link href="/tools/length-converter" className="text-sm text-accent hover:underline">Length Converter</Link>
          <Link href="/tools/temperature-converter" className="text-sm text-accent hover:underline">Temperature Converter</Link>
          <Link href="/tools/calorie-estimator" className="text-sm text-accent hover:underline">Calorie Estimator</Link>
        </div>
      </section>
    </div>
  )
}
