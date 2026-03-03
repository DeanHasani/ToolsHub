interface AdPlaceholderProps {
  slot: "top" | "mid" | "sidebar"
  className?: string
}

export function AdPlaceholder({ slot, className = "" }: AdPlaceholderProps) {
  const heightMap = {
    top: "h-24",
    mid: "h-64",
    sidebar: "h-64",
  }

  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-border bg-secondary/50 text-xs text-muted-foreground ${heightMap[slot]} ${className}`}
      aria-hidden="true"
      data-ad-slot={slot}
    >
      <span>Advertisement</span>
    </div>
  )
}
