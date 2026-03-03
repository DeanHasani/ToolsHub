import Link from "next/link"
import { PercentageCalculatorInline } from "@/components/percentage-calculator-inline"
import { AdPlaceholder } from "@/components/ad-placeholder"

const tools = [
  {
    title: "Mass Converter",
    description: "kg, g, lbs, oz and more",
    href: "/tools/mass-converter",
  },
  {
    title: "Length Converter",
    description: "m, ft, in, km, miles",
    href: "/tools/length-converter",
  },
  {
    title: "Temperature Converter",
    description: "Celsius, Fahrenheit, Kelvin",
    href: "/tools/temperature-converter",
  },
  {
    title: "Calorie Estimator",
    description: "Estimate calories for common foods",
    href: "/tools/calorie-estimator",
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:py-14">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Percentage Calculator
      </h1>
      <p className="mt-2 text-center text-muted-foreground">
        Calculate percentages quickly and easily. Free, no sign-up needed.
      </p>

      {/* Percentage Calculator - hero tool */}
      <div className="mt-8">
        <PercentageCalculatorInline />
      </div>

      <AdPlaceholder slot="mid" className="mt-10" />

      {/* Other Tools */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">
          More Free Tools
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex flex-col rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/40 hover:bg-secondary/50"
            >
              <span className="text-sm font-medium text-foreground">{tool.title}</span>
              <span className="mt-1 text-xs text-muted-foreground">{tool.description}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">About</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          ToolHub provides free online calculators and unit converters. Whether you need to calculate percentages, convert between mass units, estimate calories, or convert lengths and temperatures -- all tools work instantly in your browser with no sign-up required.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">FAQ</h2>
        <div className="mt-4 flex flex-col gap-5">
          <div>
            <h3 className="text-sm font-medium text-foreground">What is a percentage?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              A percentage is a way of expressing a number as a fraction of 100. It is commonly used to represent proportions, discounts, interest rates, and statistics. The symbol used is "%".
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">How do you calculate a percentage?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Divide the part by the whole, then multiply by 100. For example, if 20 out of 50 items are sold, the percentage sold is (20 / 50) x 100 = 40%.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">Are all tools free to use?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Yes. Every calculator and converter on ToolHub is completely free with no sign-up or download required. Just open the tool and start using it.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
