import type { Metadata } from "next"
import { CalorieEstimatorClient } from "./calorie-estimator-client"
import { AdPlaceholder } from "@/components/ad-placeholder"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Calorie Estimator",
  description: "Free calorie estimator. Look up approximate calories for common foods, search by name, and quickly estimate your daily intake.",
  keywords: ["calorie calculator", "calorie estimator", "food calories", "calorie lookup", "how many calories"],
}

export default function CalorieEstimatorPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:py-14">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Calorie Estimator
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Search for a food item and see its approximate calorie content. Adjust the serving size to match what you ate.
      </p>

      <div className="mt-6">
        <CalorieEstimatorClient />
      </div>

      <AdPlaceholder slot="mid" className="mt-10" />

      <section className="mt-10">
        <h2 className="text-base font-semibold text-foreground">How It Works</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Type a food name in the search box above. Our built-in database includes common foods with their calorie values per standard serving. You can adjust the number of servings to get a quick estimate for your meal.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Calorie values are approximate averages based on USDA data and may vary based on preparation method, brand, and exact portion size.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-base font-semibold text-foreground">FAQ</h2>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-medium text-foreground">What is a calorie?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              A calorie (kcal) is a unit of energy. In nutrition, it measures how much energy food provides to your body. Your body uses calories for everything from breathing to running.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">How many calories should I eat per day?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              The average adult needs about 2,000 to 2,500 calories per day, but this varies widely based on age, sex, weight, height, and activity level. Consult a healthcare provider for personalized advice.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground">Are these calorie counts exact?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              No. These are estimates based on average values. Actual calories can vary based on cooking method, brand, and specific ingredients. Use these as a rough guide for daily tracking.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-border bg-secondary/30 p-4">
        <h3 className="text-sm font-medium text-foreground">More Tools</h3>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/tools/percentage-calculator" className="text-sm text-accent hover:underline">Percentage Calculator</Link>
          <Link href="/tools/mass-converter" className="text-sm text-accent hover:underline">Mass Converter</Link>
          <Link href="/tools/length-converter" className="text-sm text-accent hover:underline">Length Converter</Link>
          <Link href="/tools/temperature-converter" className="text-sm text-accent hover:underline">Temperature Converter</Link>
        </div>
      </section>
    </div>
  )
}
