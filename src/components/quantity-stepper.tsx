"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 24,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center rounded-full border border-primary/20 bg-card",
        className,
      )}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="rounded-full"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus />
      </Button>
      <span className="min-w-6 text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="rounded-full"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus />
      </Button>
    </div>
  );
}
