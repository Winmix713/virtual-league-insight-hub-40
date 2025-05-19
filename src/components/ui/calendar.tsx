
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "border border-[#333336] bg-transparent hover:bg-[#1e1e20] text-white hover:border-[#444448] inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] h-7 w-7 bg-transparent p-0 opacity-50 data-[disabled]:opacity-50"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          "border border-[#333336] bg-transparent hover:bg-[#1e1e20] text-white hover:border-[#444448] h-7 w-7 p-0 font-normal aria-selected:opacity-100",
          "rounded-md hover:bg-accent hover:text-accent-foreground focus:relative focus:z-20"
        ),
        day_selected:
          "bg-primary text-primary-foreground focus:relative focus:z-20",
        day_today: "font-medium",
        day_outside: "opacity-50 cursor-not-allowed",
        day_disabled: "opacity-50 cursor-not-allowed",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground bg-muted hover:bg-muted-foreground hover:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

interface DatePickerProps {
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  format?: (date: Date) => string
}

const DatePicker = ({ selected, onSelect, format: formatFn }: DatePickerProps) => {
  const [date, setDate] = React.useState<Date | undefined>(selected)

  return (
    <div>
      <Button
        variant="outline"
        className={cn(
          "w-[300px] justify-start text-left font-normal",
          !date && "text-muted-foreground"
        )}
      >
        {date ? (
          formatFn ? formatFn(date) : format(date, "PPP")
        ) : (
          <span>Pick a date</span>
        )}
      </Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={(newDate) => {
          setDate(newDate)
          if (onSelect) onSelect(newDate)
        }}
      />
    </div>
  )
}
DatePicker.displayName = "DatePicker"

export { Calendar, DatePicker }
