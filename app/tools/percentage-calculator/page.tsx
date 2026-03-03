import type { Metadata } from "next"
import { PercentageCalculatorInline } from "@/components/percentage-calculator-inline"
import { AdPlaceholder } from "@/components/ad-placeholder"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Percentage Calculator",
  description: "Free online percentage calculator. Calculate what percent of a number is, find percentage change, or figure out what percentage one number is of another.",
  keywords: ["percentage calculator", "percent calculator", "percentage change", "what percent of"],
}

export default function PercentageCalculatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:py-14">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Percentage Calculator
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Calculate percentages instantly. Enter values and see results in real time.
      </p>

      <div className="mt-6">
        <PercentageCalculatorInline />
      </div>

      <AdPlaceholder slot="mid" className="mt-10" />

      <section className="mt-10">
        <h2 className="text-base font-semibold text-foreground">How to Calculate Percentages</h2>
        <div className="mt-3 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h3 className="font-medium text-foreground">What is X% of Y?</h3>
            <p className="mt-1">Multiply Y by X, then divide by 100. For example, 15% of 200 = (200 x 15) / 100 = 30.</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">X is what percent of Y?</h3>
            <p className="mt-1">Divide X by Y, then multiply by 100. For example, 30 is what percent of 200? (30 / 200) x 100 = 15%.</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Percentage increase or decrease</h3>
            <p className="mt-1">Subtract the old value from the new value, divide by the old value, then multiply by 100. A change from 80 to 100 = ((100 - 80) / 80) x 100 = 25% increase.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-base font-semibold text-foreground">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-medium text-foreground">What is a percentage?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              A percentage is a way of expressing a number as a fraction of 100. The word comes from the Latin "per centum" meaning "by the hundred". For example, 25% means 25 out of 100.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">Why are percentages useful?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Percentages make it easy to compare values of different sizes. They are used everywhere: discounts, taxes, interest rates, statistics, grades, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-border bg-secondary/30 p-4">
        <h3 className="text-sm font-medium text-foreground">More Tools</h3>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/tools/mass-converter" className="text-sm text-accent hover:underline">Mass Converter</Link>
          <Link href="/tools/length-converter" className="text-sm text-accent hover:underline">Length Converter</Link>
          <Link href="/tools/temperature-converter" className="text-sm text-accent hover:underline">Temperature Converter</Link>
          <Link href="/tools/calorie-estimator" className="text-sm text-accent hover:underline">Calorie Estimator</Link>
        </div>
      </section>
    </div>
  )
}
