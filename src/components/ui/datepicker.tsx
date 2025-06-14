"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { ControllerRenderProps } from "react-hook-form";

interface DatePickerProps {
  field: ControllerRenderProps<any, any>; // react-hook-form의 field 객체
}

export function DatePicker({ field }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!field.value}
          className="justify-start w-[280px] font-normal data-[empty=true]:text-muted-foreground text-left"
        >
          <CalendarIcon className="mr-2 w-4 h-4" />
          {field.value ? format(field.value, "PPP") : <span>날짜 선택</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-auto">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={(date) => field.onChange(date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
