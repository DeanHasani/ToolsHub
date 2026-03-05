import type { Metadata } from "next"
import { MassConverterClient } from "./mass-converter-client"
import { AdPlaceholder } from "@/components/ad-placeholder"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mass & Volume Converter - kg, g, lbs, oz, liters, mL",
  description: "Free online mass and volume converter. Convert between kilograms, grams, pounds, ounces, liters, milliliters, and more.",
  keywords: ["mass converter", "weight converter", "kg to lbs", "grams to ounces", "liters to ml", "volume converter"],
}

export default function MassConverterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:py-14">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Mass & Volume Converter
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Convert between kilograms, grams, pounds, ounces, liters, milliliters, and more. Enter a value and see all results instantly.
      </p>

      <div className="mt-6">
        <MassConverterClient />
      </div>

      <AdPlaceholder slot="mid" className="mt-10" />

      <section className="mt-10">
        <h2 className="text-base font-semibold text-foreground">How It Works</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          All mass units are converted through a base value in grams. The metric system uses base-10 relationships (1 kg = 1,000 g), while imperial conversions use fixed factors (1 lb = 453.592 g, 1 oz = 28.3495 g).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-base font-semibold text-foreground">Common Examples</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 text-left font-medium text-foreground">From</th>
                <th className="py-2 pr-4 text-left font-medium text-foreground">To</th>
                <th className="py-2 text-left font-medium text-foreground">Result</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1 kg</td>
                <td className="py-2 pr-4">Pounds</td>
                <td className="py-2 tabular-nums">2.2046 lbs</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1 lb</td>
                <td className="py-2 pr-4">Kilograms</td>
                <td className="py-2 tabular-nums">0.4536 kg</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">16 oz</td>
                <td className="py-2 pr-4">Pounds</td>
                <td className="py-2 tabular-nums">1 lb</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">1 stone</td>
                <td className="py-2 pr-4">Kilograms</td>
                <td className="py-2 tabular-nums">6.3503 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-base font-semibold text-foreground">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-medium text-foreground">How many grams are in a kilogram?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Exactly 1,000. The prefix "kilo" means one thousand.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">How many ounces are in a pound?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">There are 16 ounces in one pound (avoirdupois).</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">What is a stone?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">A stone is 14 pounds (about 6.35 kg). It is commonly used in the UK and Ireland for body weight.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-border bg-secondary/30 p-4">
        <h3 className="text-sm font-medium text-foreground">More Tools</h3>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/tools/percentage-calculator" className="text-sm text-accent hover:underline">Percentage Calculator</Link>
          <Link href="/tools/length-converter" className="text-sm text-accent hover:underline">Length Converter</Link>
          <Link href="/tools/temperature-converter" className="text-sm text-accent hover:underline">Temperature Converter</Link>
          <Link href="/tools/calorie-estimator" className="text-sm text-accent hover:underline">Calorie Estimator</Link>
        </div>
      </section>
    </div>
  )
}
