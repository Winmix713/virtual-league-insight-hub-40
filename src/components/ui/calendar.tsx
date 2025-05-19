import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

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
        ...classNames,
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "border border-[#333336] bg-transparent hover:bg-[#1e1e20] text-white hover:border-[#444448] inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] h-7 w-7 bg-transparent p-0 opacity-50 data-[disabled]:opacity-50",
          "h-7 w-7 bg-transparent p-0 opacity-50 data-[disabled]:opacity-50"
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
          "h-7 w-7 p-0 font-normal aria-selected:opacity-100",
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

interface DatePickerProps extends Omit<CalendarProps, "mode"> {}

const DatePicker = ({ ...props }: DatePickerProps) => {
  const [date, setDate] = React.useState<CalendarProps["selected"]>(props.selected)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            props.format?.format(date as Date)
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date)
            props.onSelect?.(date)
          }}
          {...props}
        />
      </PopoverContent>
    </Popover>
  )
}
DatePicker.displayName = "DatePicker"

export { Calendar, DatePicker }
