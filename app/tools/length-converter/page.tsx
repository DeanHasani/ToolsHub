import type { Metadata } from "next"
import { LengthConverterClient } from "./length-converter-client"
import { AdPlaceholder } from "@/components/ad-placeholder"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Length Converter - Convert m, ft, in, km, miles",
  description: "Free online length converter. Convert between meters, feet, inches, kilometers, miles, centimeters, and yards.",
  keywords: ["length converter", "distance converter", "meters to feet", "km to miles", "inches to centimeters"],
}

export default function LengthConverterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:py-14">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Length Converter
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Convert between meters, feet, inches, kilometers, miles, and more. Enter a value and get instant results.
      </p>

      <div className="mt-6">
        <LengthConverterClient />
      </div>

      <AdPlaceholder slot="mid" className="mt-10" />

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
                <td className="py-2 pr-4">1 m</td>
                <td className="py-2 pr-4">Feet</td>
                <td className="py-2 font-mono">3.2808 ft</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1 km</td>
                <td className="py-2 pr-4">Miles</td>
                <td className="py-2 font-mono">0.6214 mi</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1 in</td>
                <td className="py-2 pr-4">Centimeters</td>
                <td className="py-2 font-mono">2.54 cm</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">1 mile</td>
                <td className="py-2 pr-4">Kilometers</td>
                <td className="py-2 font-mono">1.6093 km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-base font-semibold text-foreground">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-medium text-foreground">How many feet are in a meter?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Approximately 3.28084 feet. One foot equals exactly 0.3048 meters.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">How many centimeters are in an inch?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Exactly 2.54 centimeters, by international agreement.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-border bg-secondary/30 p-4">
        <h3 className="text-sm font-medium text-foreground">More Tools</h3>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/tools/percentage-calculator" className="text-sm text-accent hover:underline">Percentage Calculator</Link>
          <Link href="/tools/mass-converter" className="text-sm text-accent hover:underline">Mass Converter</Link>
          <Link href="/tools/temperature-converter" className="text-sm text-accent hover:underline">Temperature Converter</Link>
          <Link href="/tools/calorie-estimator" className="text-sm text-accent hover:underline">Calorie Estimator</Link>
        </div>
      </section>
    </div>
  )
}
