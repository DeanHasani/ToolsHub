import type { Metadata } from "next"
import { TemperatureConverterClient } from "./temperature-converter-client"
import { AdPlaceholder } from "@/components/ad-placeholder"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Temperature Converter - Celsius, Fahrenheit, Kelvin",
  description: "Free online temperature converter. Convert between Celsius, Fahrenheit, and Kelvin instantly.",
  keywords: ["temperature converter", "Celsius to Fahrenheit", "Fahrenheit to Celsius", "Kelvin converter"],
}

export default function TemperatureConverterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:py-14">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Temperature Converter
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Convert between Celsius, Fahrenheit, and Kelvin. Enter a value and see results instantly.
      </p>

      <div className="mt-6">
        <TemperatureConverterClient />
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
                <td className="py-2 pr-4">{'\u00B0C'} 0</td>
                <td className="py-2 pr-4">Fahrenheit</td>
                <td className="py-2 font-mono">32{'\u00B0F'}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">{'\u00B0C'} 100</td>
                <td className="py-2 pr-4">Fahrenheit</td>
                <td className="py-2 font-mono">212{'\u00B0F'}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">{'\u00B0F'} 72</td>
                <td className="py-2 pr-4">Celsius</td>
                <td className="py-2 font-mono">22.22{'\u00B0C'}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">{'\u00B0C'} 37</td>
                <td className="py-2 pr-4">Fahrenheit</td>
                <td className="py-2 font-mono">98.6{'\u00B0F'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-base font-semibold text-foreground">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-medium text-foreground">How do I convert Celsius to Fahrenheit?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Multiply by 9/5, then add 32. Formula: F = (C x 9/5) + 32.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">What temperature is the same in Celsius and Fahrenheit?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">-40 degrees is the same on both scales. It is the only point where they intersect.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-border bg-secondary/30 p-4">
        <h3 className="text-sm font-medium text-foreground">More Tools</h3>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/tools/percentage-calculator" className="text-sm text-accent hover:underline">Percentage Calculator</Link>
          <Link href="/tools/mass-converter" className="text-sm text-accent hover:underline">Mass Converter</Link>
          <Link href="/tools/length-converter" className="text-sm text-accent hover:underline">Length Converter</Link>
          <Link href="/tools/calorie-estimator" className="text-sm text-accent hover:underline">Calorie Estimator</Link>
        </div>
      </section>
    </div>
  )
}
