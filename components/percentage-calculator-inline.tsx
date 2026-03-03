"use client"

import { useState } from "react"

function fmt(n: number) {
  if (isNaN(n) || !isFinite(n)) return null
  return Number.isInteger(n) ? String(n) : n.toFixed(4).replace(/\.?0+$/, "")
}

export function PercentageCalculatorInline() {
  const [a1, setA1] = useState("")
  const [b1, setB1] = useState("")
  const [a2, setA2] = useState("")
  const [b2, setB2] = useState("")
  const [a3, setA3] = useState("")
  const [b3, setB3] = useState("")
  const [a4, setA4] = useState("")
  const [b4, setB4] = useState("")
  const [a5, setA5] = useState("")
  const [b5, setB5] = useState("")
  const [a6, setA6] = useState("")
  const [b6, setB6] = useState("")

  const r1 = a1 && b1 ? fmt((parseFloat(a1) / 100) * parseFloat(b1)) : null
  const r2 = a2 && b2 && parseFloat(b2) !== 0 ? fmt((parseFloat(a2) / parseFloat(b2)) * 100) : null
  const r3 = a3 && b3 && parseFloat(a3) !== 0
    ? fmt(((parseFloat(b3) - parseFloat(a3)) / Math.abs(parseFloat(a3))) * 100)
    : null
  const r4 = a4 && b4 ? fmt(parseFloat(a4) * (1 + parseFloat(b4) / 100)) : null
  const r5 = a5 && b5 ? fmt(parseFloat(a5) * (1 - parseFloat(b5) / 100)) : null
  const r6 = a6 && b6 && parseFloat(a6) !== 0 ? fmt((parseFloat(b6) / (parseFloat(a6) / 100))) : null

  const inputClass =
    "w-full rounded-md border border-input bg-background px-3 py-2.5 text-center text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
  const resultClass =
    "w-full rounded-md bg-accent/10 px-3 py-2.5 text-center text-sm font-semibold text-accent sm:w-auto sm:min-w-[5rem]"

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-4 sm:p-6">
      {/* 1 - What is X% of Y? */}
      <CalcRow
        label="What is X% of Y?"
        result={r1}
        resultSuffix=""
        resultClass={resultClass}
      >
        <div className="flex items-center gap-2">
          <input type="number" value={a1} onChange={(e) => setA1(e.target.value)} className={inputClass} placeholder="X" aria-label="Percentage value" />
          <span className="shrink-0 text-sm text-muted-foreground">% of</span>
          <input type="number" value={b1} onChange={(e) => setB1(e.target.value)} className={inputClass} placeholder="Y" aria-label="Base number" />
        </div>
      </CalcRow>

      <Divider />

      {/* 2 - X is what % of Y? */}
      <CalcRow
        label="X is what % of Y?"
        result={r2}
        resultSuffix="%"
        resultClass={resultClass}
      >
        <div className="flex items-center gap-2">
          <input type="number" value={a2} onChange={(e) => setA2(e.target.value)} className={inputClass} placeholder="X" aria-label="Part value" />
          <span className="shrink-0 text-sm text-muted-foreground">of</span>
          <input type="number" value={b2} onChange={(e) => setB2(e.target.value)} className={inputClass} placeholder="Y" aria-label="Whole value" />
        </div>
      </CalcRow>

      <Divider />

      {/* 3 - % change from X to Y */}
      <CalcRow
        label="Percentage change from X to Y"
        result={r3 ? `${parseFloat(r3) > 0 ? "+" : ""}${r3}` : null}
        resultSuffix="%"
        resultClass={resultClass}
      >
        <div className="flex items-center gap-2">
          <input type="number" value={a3} onChange={(e) => setA3(e.target.value)} className={inputClass} placeholder="from" aria-label="Original value" />
          <span className="shrink-0 text-sm text-muted-foreground">to</span>
          <input type="number" value={b3} onChange={(e) => setB3(e.target.value)} className={inputClass} placeholder="to" aria-label="New value" />
        </div>
      </CalcRow>

      <Divider />

      {/* 4 - Increase X by Y% */}
      <CalcRow
        label="Increase X by Y%"
        result={r4}
        resultSuffix=""
        resultClass={resultClass}
      >
        <div className="flex items-center gap-2">
          <input type="number" value={a4} onChange={(e) => setA4(e.target.value)} className={inputClass} placeholder="X" aria-label="Number to increase" />
          <span className="shrink-0 text-sm text-muted-foreground">by</span>
          <input type="number" value={b4} onChange={(e) => setB4(e.target.value)} className={inputClass} placeholder="Y%" aria-label="Increase percentage" />
        </div>
      </CalcRow>

      <Divider />

      {/* 5 - Decrease X by Y% */}
      <CalcRow
        label="Decrease X by Y%"
        result={r5}
        resultSuffix=""
        resultClass={resultClass}
      >
        <div className="flex items-center gap-2">
          <input type="number" value={a5} onChange={(e) => setA5(e.target.value)} className={inputClass} placeholder="X" aria-label="Number to decrease" />
          <span className="shrink-0 text-sm text-muted-foreground">by</span>
          <input type="number" value={b5} onChange={(e) => setB5(e.target.value)} className={inputClass} placeholder="Y%" aria-label="Decrease percentage" />
        </div>
      </CalcRow>

      <Divider />

      {/* 6 - X% of what is Y? */}
      <CalcRow
        label="X% of what is Y?"
        result={r6}
        resultSuffix=""
        resultClass={resultClass}
      >
        <div className="flex items-center gap-2">
          <input type="number" value={a6} onChange={(e) => setA6(e.target.value)} className={inputClass} placeholder="X%" aria-label="Percentage" />
          <span className="shrink-0 text-sm text-muted-foreground">of ? =</span>
          <input type="number" value={b6} onChange={(e) => setB6(e.target.value)} className={inputClass} placeholder="Y" aria-label="Result value" />
        </div>
      </CalcRow>

      <p className="text-xs text-muted-foreground">
        Results update instantly as you type.
      </p>
    </div>
  )
}

function CalcRow({
  label,
  result,
  resultSuffix,
  resultClass,
  children,
}: {
  label: string
  result: string | null
  resultSuffix: string
  resultClass: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {children}
      {result && (
        <div className={resultClass}>
          = {result}{resultSuffix}
        </div>
      )}
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-border" />
}
