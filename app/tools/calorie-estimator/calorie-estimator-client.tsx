"use client"

import { useState, useMemo } from "react"

interface FoodItem {
  name: string
  calories: number
  serving: string
}

const foods: FoodItem[] = [
  { name: "Apple", calories: 95, serving: "1 medium (182g)" },
  { name: "Banana", calories: 105, serving: "1 medium (118g)" },
  { name: "Orange", calories: 62, serving: "1 medium (131g)" },
  { name: "Strawberries", calories: 49, serving: "1 cup (152g)" },
  { name: "Blueberries", calories: 84, serving: "1 cup (148g)" },
  { name: "Grapes", calories: 104, serving: "1 cup (151g)" },
  { name: "Watermelon", calories: 86, serving: "1 cup diced (152g)" },
  { name: "Avocado", calories: 240, serving: "1 whole (150g)" },
  { name: "Chicken breast (grilled)", calories: 165, serving: "100g" },
  { name: "Chicken thigh (grilled)", calories: 209, serving: "100g" },
  { name: "Chicken wings (fried)", calories: 290, serving: "4 wings" },
  { name: "Salmon (baked)", calories: 208, serving: "100g" },
  { name: "Tuna (canned in water)", calories: 116, serving: "100g" },
  { name: "Shrimp (cooked)", calories: 99, serving: "100g" },
  { name: "Ground beef (80/20)", calories: 254, serving: "100g" },
  { name: "Steak (sirloin)", calories: 206, serving: "100g" },
  { name: "Pork chop (grilled)", calories: 231, serving: "100g" },
  { name: "Bacon", calories: 43, serving: "1 slice (8g)" },
  { name: "Egg (boiled)", calories: 78, serving: "1 large (50g)" },
  { name: "Egg (fried)", calories: 90, serving: "1 large" },
  { name: "White rice (cooked)", calories: 206, serving: "1 cup (186g)" },
  { name: "Brown rice (cooked)", calories: 216, serving: "1 cup (195g)" },
  { name: "Pasta (cooked)", calories: 220, serving: "1 cup (140g)" },
  { name: "White bread", calories: 79, serving: "1 slice (30g)" },
  { name: "Whole wheat bread", calories: 81, serving: "1 slice (33g)" },
  { name: "Bagel", calories: 270, serving: "1 medium (105g)" },
  { name: "Tortilla (flour)", calories: 146, serving: "1 large (64g)" },
  { name: "Oatmeal (cooked)", calories: 154, serving: "1 cup (234g)" },
  { name: "Cereal (cornflakes)", calories: 101, serving: "1 cup (28g)" },
  { name: "Pancakes", calories: 175, serving: "2 medium" },
  { name: "French fries", calories: 365, serving: "medium serving (117g)" },
  { name: "Potato (baked)", calories: 161, serving: "1 medium (173g)" },
  { name: "Sweet potato (baked)", calories: 103, serving: "1 medium (114g)" },
  { name: "Broccoli (cooked)", calories: 55, serving: "1 cup (156g)" },
  { name: "Carrots (raw)", calories: 52, serving: "1 cup (128g)" },
  { name: "Spinach (raw)", calories: 7, serving: "1 cup (30g)" },
  { name: "Salad (garden, no dressing)", calories: 20, serving: "1 cup" },
  { name: "Corn on the cob", calories: 88, serving: "1 ear (63g)" },
  { name: "Pizza (cheese, 1 slice)", calories: 285, serving: "1 large slice" },
  { name: "Pizza (pepperoni, 1 slice)", calories: 313, serving: "1 large slice" },
  { name: "Hamburger (with bun)", calories: 354, serving: "1 regular" },
  { name: "Cheeseburger (with bun)", calories: 410, serving: "1 regular" },
  { name: "Hot dog (with bun)", calories: 290, serving: "1 regular" },
  { name: "Burrito (bean & cheese)", calories: 380, serving: "1 medium" },
  { name: "Taco (beef)", calories: 210, serving: "1 regular" },
  { name: "Sushi (salmon nigiri)", calories: 60, serving: "1 piece" },
  { name: "Sandwich (turkey)", calories: 320, serving: "1 whole" },
  { name: "Soup (chicken noodle)", calories: 62, serving: "1 cup (241g)" },
  { name: "Soup (tomato)", calories: 74, serving: "1 cup (248g)" },
  { name: "Milk (whole)", calories: 149, serving: "1 cup (244ml)" },
  { name: "Milk (2%)", calories: 122, serving: "1 cup (244ml)" },
  { name: "Milk (skim)", calories: 83, serving: "1 cup (244ml)" },
  { name: "Yogurt (plain, low-fat)", calories: 154, serving: "1 cup (245g)" },
  { name: "Greek yogurt (plain)", calories: 100, serving: "170g container" },
  { name: "Cheese (cheddar)", calories: 113, serving: "1 slice (28g)" },
  { name: "Cottage cheese", calories: 206, serving: "1 cup (226g)" },
  { name: "Butter", calories: 102, serving: "1 tbsp (14g)" },
  { name: "Peanut butter", calories: 188, serving: "2 tbsp (32g)" },
  { name: "Almonds", calories: 164, serving: "1 oz (28g, ~23 almonds)" },
  { name: "Walnuts", calories: 185, serving: "1 oz (28g, ~14 halves)" },
  { name: "Cashews", calories: 157, serving: "1 oz (28g)" },
  { name: "Trail mix", calories: 462, serving: "1 cup (115g)" },
  { name: "Chocolate (dark)", calories: 170, serving: "1 oz (28g)" },
  { name: "Chocolate (milk)", calories: 153, serving: "1 oz (28g)" },
  { name: "Ice cream (vanilla)", calories: 267, serving: "1 cup (132g)" },
  { name: "Cookie (chocolate chip)", calories: 78, serving: "1 medium" },
  { name: "Brownie", calories: 227, serving: "1 piece (56g)" },
  { name: "Donut (glazed)", calories: 269, serving: "1 medium (64g)" },
  { name: "Muffin (blueberry)", calories: 426, serving: "1 large (131g)" },
  { name: "Cake (chocolate)", calories: 352, serving: "1 slice (64g)" },
  { name: "Coca-Cola", calories: 140, serving: "12 oz can (355ml)" },
  { name: "Orange juice", calories: 112, serving: "1 cup (248ml)" },
  { name: "Coffee (black)", calories: 2, serving: "1 cup (237ml)" },
  { name: "Coffee (with cream & sugar)", calories: 60, serving: "1 cup" },
  { name: "Latte (whole milk)", calories: 190, serving: "16 oz grande" },
  { name: "Beer", calories: 154, serving: "12 oz (355ml)" },
  { name: "Wine (red)", calories: 125, serving: "5 oz (148ml)" },
  { name: "Protein bar", calories: 220, serving: "1 bar (60g)" },
  { name: "Granola bar", calories: 100, serving: "1 bar (24g)" },
  { name: "Popcorn (buttered)", calories: 165, serving: "3 cups popped" },
  { name: "Chips (potato)", calories: 152, serving: "1 oz (28g, ~15 chips)" },
  { name: "Hummus", calories: 70, serving: "2 tbsp (30g)" },
  { name: "Olive oil", calories: 119, serving: "1 tbsp (14ml)" },
  { name: "Honey", calories: 64, serving: "1 tbsp (21g)" },
  { name: "Sugar", calories: 49, serving: "1 tbsp (12.5g)" },
]

export function CalorieEstimatorClient() {
  const [search, setSearch] = useState("")
  const [servings, setServings] = useState<Record<string, number>>({})

  const filtered = useMemo(() => {
    if (!search.trim()) return foods.slice(0, 12)
    const q = search.toLowerCase()
    return foods.filter((f) => f.name.toLowerCase().includes(q))
  }, [search])

  function getServings(name: string) {
    return servings[name] ?? 1
  }

  function setServing(name: string, val: number) {
    setServings((prev) => ({ ...prev, [name]: Math.max(0.25, val) }))
  }

  const totalCalories = filtered.reduce((sum, f) => {
    return sum + f.calories * getServings(f.name)
  }, 0)

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a food (e.g. chicken, pizza, apple)..."
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        aria-label="Search food items"
      />

      {filtered.length === 0 && (
        <p className="mt-4 text-sm text-muted-foreground">
          No foods found. Try a different search term.
        </p>
      )}

      {filtered.length > 0 && (
        <div className="mt-4">
          <div className="flex flex-col gap-2">
            {filtered.map((food) => (
              <div
                key={food.name}
                className="flex flex-col gap-2 rounded-lg bg-secondary/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">{food.name}</p>
                  <p className="text-xs text-muted-foreground">{food.serving}</p>
                </div>
                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setServing(food.name, getServings(food.name) - 0.5)}
                      className="flex h-7 w-7 items-center justify-center rounded bg-background text-xs font-medium text-foreground border border-input hover:bg-muted"
                      aria-label={`Decrease servings of ${food.name}`}
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-medium text-foreground">
                      {getServings(food.name)}
                    </span>
                    <button
                      onClick={() => setServing(food.name, getServings(food.name) + 0.5)}
                      className="flex h-7 w-7 items-center justify-center rounded bg-background text-xs font-medium text-foreground border border-input hover:bg-muted"
                      aria-label={`Increase servings of ${food.name}`}
                    >
                      +
                    </button>
                  </div>
                  <span className="min-w-[4rem] text-right text-sm font-semibold text-foreground">
                    {Math.round(food.calories * getServings(food.name))} cal
                  </span>
                </div>
              </div>
            ))}
          </div>

          {search.trim() && filtered.length > 0 && (
            <div className="mt-4 flex items-center justify-between rounded-lg border border-accent/30 bg-accent/5 px-4 py-3">
              <span className="text-sm font-medium text-foreground">Total (shown items)</span>
              <span className="text-lg font-bold text-foreground">{Math.round(totalCalories)} cal</span>
            </div>
          )}
        </div>
      )}

      <p className="mt-4 text-xs text-muted-foreground">
        {search.trim()
          ? `Showing ${filtered.length} result${filtered.length !== 1 ? "s" : ""}. Adjust servings with +/- buttons.`
          : "Showing popular foods. Type to search from 85+ items."}
      </p>
    </div>
  )
}
