"use client";

import { CalendarIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Props = {
  date?: Date;
  onChange: (date: Date | undefined) => void;
  className?: string;
  placeholder?: ReactNode;
};

const DefaultPlaceholder = "日付を選択してください";

export const DatePicker = ({
  date,
  onChange,
  className,
  placeholder = DefaultPlaceholder,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("justify-between font-normal", className)}
        >
          {date ? date.toLocaleDateString() : placeholder}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
