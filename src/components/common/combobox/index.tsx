"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

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
  inputPlaceholder?: string;
  emptyMessage?: ReactNode;
};

// const DefaultValue = "";
const DefaultPlaceholder = "項目を選択してください";
const DefaultInputPlaceholder = "検索キーワード";
const DefaultEmptyMessage = "入力条件に合致する項目が見つかりませんでした";

export const Combobox = <T extends string = string>({
  items,
  value,
  onChange,
  className,
  placeholder = DefaultPlaceholder,
  inputPlaceholder = DefaultInputPlaceholder,
  emptyMessage = DefaultEmptyMessage,
}: Props<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className)}
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={inputPlaceholder} className="h-9" />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    // onChange(currentValue === value ? "" : currentValue);
                    onChange(currentValue as T);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
