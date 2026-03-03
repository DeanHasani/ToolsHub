"use client"

import { useCallback } from "react"
import { UnitConverter, type ConversionResult } from "@/components/unit-converter"

const units = [
  { label: "Celsius (\u00B0C)", value: "c" },
  { label: "Fahrenheit (\u00B0F)", value: "f" },
  { label: "Kelvin (K)", value: "k" },
]

function toCelsius(value: number, from: string): number {
  switch (from) {
    case "f":
      return (value - 32) * (5 / 9)
    case "k":
      return value - 273.15
    default:
      return value
  }
}

function fromCelsius(celsius: number, to: string): number {
  switch (to) {
    case "f":
      return celsius * (9 / 5) + 32
    case "k":
      return celsius + 273.15
    default:
      return celsius
  }
}

export function TemperatureConverterClient() {
  const convert = useCallback((value: number, fromUnit: string): ConversionResult[] => {
    const celsius = toCelsius(value, fromUnit)
    return units
      .filter((u) => u.value !== fromUnit)
      .map((u) => ({
        unit: u.value,
        label: u.label,
        value: Math.round(fromCelsius(celsius, u.value) * 10000) / 10000,
      }))
  }, [])

  return <UnitConverter units={units} convert={convert} defaultUnit="c" />
}
