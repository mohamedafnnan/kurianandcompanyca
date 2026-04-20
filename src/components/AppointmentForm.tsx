import { useState } from "react";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Income Tax",
  "GST",
  "Audit & Assurance",
  "ROC / MCA Compliance",
  "Bookkeeping & Accounting",
  "TDS & Payroll",
  "Business Advisory",
  "Incorporation & Registration",
  "Other / Not sure",
];

const TIME_SLOTS = [
  "09:30 AM – 11:00 AM",
  "11:00 AM – 12:30 PM",
  "12:30 PM – 02:00 PM",
  "02:00 PM – 03:30 PM",
  "03:30 PM – 05:00 PM",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20).regex(/^[0-9+\-\s()]+$/, "Invalid phone"),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  preferred_date: z.date({ required_error: "Pick a date" }),
  preferred_time: z.string().min(1, "Pick a time slot"),
  notes: z.string().max(1000).optional(),
});

export function AppointmentForm() {
  const [submitting, setSubmitting] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [service, setService] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      service,
      preferred_date: date,
      preferred_time: timeSlot,
      notes: fd.get("notes"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("appointments").insert({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email || null,
      service: parsed.data.service,
      preferred_date: format(parsed.data.preferred_date, "yyyy-MM-dd"),
      preferred_time: parsed.data.preferred_time,
      notes: parsed.data.notes || null,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Couldn't submit your request. Please try again or call us.");
      return;
    }

    toast.success("Appointment requested! We'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
    setDate(undefined);
    setService("");
    setTimeSlot("");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="ap-name">Full name</Label>
          <Input id="ap-name" name="name" required maxLength={100} placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ap-phone">Phone</Label>
          <Input id="ap-phone" name="phone" required type="tel" maxLength={20} placeholder="+91 ..." />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="ap-email">Email (optional)</Label>
        <Input id="ap-email" name="email" type="email" maxLength={255} placeholder="you@example.com" />
      </div>

      <div className="space-y-1.5">
        <Label>Service</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>Preferred date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-1.5">
          <Label>Time slot</Label>
          <Select value={timeSlot} onValueChange={setTimeSlot}>
            <SelectTrigger><SelectValue placeholder="Pick a time" /></SelectTrigger>
            <SelectContent>
              {TIME_SLOTS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="ap-notes">Notes (optional)</Label>
        <Textarea id="ap-notes" name="notes" maxLength={1000} placeholder="Briefly describe what you need help with" />
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {submitting ? "Submitting..." : "Request appointment"}
      </Button>
    </form>
  );
}
