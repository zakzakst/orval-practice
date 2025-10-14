"use client";

import type { ReactNode } from "react";
import { useId } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export type Item<T extends string = string> = {
  value: T;
  label: ReactNode;
};

type Props<T extends string = string> = {
  items: Item<T>[];
  value?: T;
  onChange: (value: T) => void;
  className?: string;
};

export const RadioLabelGroup = <T extends string = string>({
  items,
  value,
  onChange,
  className,
}: Props<T>) => {
  const componentId = useId();

  return (
    <RadioGroup
      value={value || ""}
      onValueChange={onChange}
      className={className}
    >
      {items.map((item) => {
        const itemId = `${componentId}-${item.value}`;
        return (
          <div key={item.value} className="flex items-center gap-3">
            <RadioGroupItem value={item.value} id={itemId} />
            <Label htmlFor={itemId}>{item.label}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};
