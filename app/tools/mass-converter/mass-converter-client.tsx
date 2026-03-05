"use client"

import { useCallback } from "react"
import { UnitConverter, type ConversionResult } from "@/components/unit-converter"

const units = [
  { label: "Kilograms (kg)", value: "kg" },
  { label: "Grams (g)", value: "g" },
  { label: "Milligrams (mg)", value: "mg" },
  { label: "Pounds (lbs)", value: "lbs" },
  { label: "Ounces (oz)", value: "oz" },
  { label: "Stone (st)", value: "st" },
  { label: "Metric Tons (t)", value: "t" },
  { label: "Liters (L)", value: "L" },
  { label: "Milliliters (mL)", value: "mL" },
]

// Note: Liters/mL assume water density (1g = 1mL)
const toGrams: Record<string, number> = {
  kg: 1000,
  g: 1,
  mg: 0.001,
  lbs: 453.59237,
  oz: 28.3495231,
  st: 6350.29318,
  t: 1_000_000,
  L: 1000,
  mL: 1,
}

export function MassConverterClient() {
  const convert = useCallback((value: number, fromUnit: string): ConversionResult[] => {
    const grams = value * (toGrams[fromUnit] ?? 1)
    return units
      .filter((u) => u.value !== fromUnit)
      .map((u) => ({
        unit: u.value,
        label: u.label,
        value: grams / (toGrams[u.value] ?? 1),
      }))
  }, [])

  return <UnitConverter units={units} convert={convert} defaultUnit="kg" />
}
