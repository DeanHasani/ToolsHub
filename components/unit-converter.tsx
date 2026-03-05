"use client"

import { useState, useCallback } from "react"
import { ArrowDownUp } from "lucide-react"

export interface UnitOption {
  label: string
  value: string
}

export interface ConversionResult {
  unit: string
  label: string
  value: number
}

interface UnitConverterProps {
  units: UnitOption[]
  convert: (value: number, fromUnit: string) => ConversionResult[]
  defaultUnit?: string
}

export function UnitConverter({ units, convert, defaultUnit }: UnitConverterProps) {
  const [value, setValue] = useState("1")
  const [fromUnit, setFromUnit] = useState(defaultUnit ?? units[0]?.value ?? "")
  const numValue = parseFloat(value) || 0

  const results = useCallback(() => {
    return convert(numValue, fromUnit)
  }, [numValue, fromUnit, convert])()

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="converter-value" className="block text-sm font-medium text-foreground">
            Value
          </label>
          <input
            id="converter-value"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="Enter a value"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="converter-unit" className="block text-sm font-medium text-foreground">
            From
          </label>
          <select
            id="converter-unit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            {units.map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <ArrowDownUp className="h-5 w-5 text-muted-foreground" />
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-col gap-3">
        {results.map((result) => (
          <div
            key={result.unit}
            className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-3"
          >
            <span className="text-sm text-muted-foreground">{result.label}</span>
            <span className="text-sm font-semibold text-foreground tabular-nums">
              {result.value % 1 === 0 ? result.value.toLocaleString() : result.value.toLocaleString(undefined, { maximumFractionDigits: 6 })}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
