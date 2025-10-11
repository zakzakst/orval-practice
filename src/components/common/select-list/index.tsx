"use client";

import type { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Item<T extends string = string> = {
  value: T;
  label: ReactNode;
};

type Props<T extends string = string> = {
  items: Item<T>[];
  value?: T;
  onChange: (value: T) => void;
  className?: string;
  placeholder?: ReactNode;
};

const DefaultValue = "";
const DefaultPlaceholder = "項目を選択してください";

export const SelectList = <T extends string = string>({
  items,
  value,
  onChange,
  className,
  placeholder = DefaultPlaceholder,
}: Props<T>) => {
  return (
    <Select onValueChange={onChange} value={value || DefaultValue}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
