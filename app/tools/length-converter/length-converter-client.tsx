"use client"

import { useCallback } from "react"
import { UnitConverter, type ConversionResult } from "@/components/unit-converter"

const units = [
  { label: "Meters (m)", value: "m" },
  { label: "Centimeters (cm)", value: "cm" },
  { label: "Kilometers (km)", value: "km" },
  { label: "Feet (ft)", value: "ft" },
  { label: "Inches (in)", value: "in" },
  { label: "Miles (mi)", value: "mi" },
  { label: "Yards (yd)", value: "yd" },
]

const toMeters: Record<string, number> = {
  m: 1,
  cm: 0.01,
  km: 1000,
  ft: 0.3048,
  in: 0.0254,
  mi: 1609.344,
  yd: 0.9144,
}

export function LengthConverterClient() {
  const convert = useCallback((value: number, fromUnit: string): ConversionResult[] => {
    const meters = value * (toMeters[fromUnit] ?? 1)
    return units
      .filter((u) => u.value !== fromUnit)
      .map((u) => ({
        unit: u.value,
        label: u.label,
        value: meters / (toMeters[u.value] ?? 1),
      }))
  }, [])

  return <UnitConverter units={units} convert={convert} defaultUnit="m" />
}
