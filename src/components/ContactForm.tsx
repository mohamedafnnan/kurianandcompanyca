import { useState } from "react";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      message: parsed.data.message,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Couldn't send your message. Please try again.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="ct-name">Name</Label>
          <Input id="ct-name" name="name" required maxLength={100} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ct-phone">Phone (optional)</Label>
          <Input id="ct-phone" name="phone" type="tel" maxLength={20} />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ct-email">Email</Label>
        <Input id="ct-email" name="email" type="email" required maxLength={255} />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ct-message">Message</Label>
        <Textarea id="ct-message" name="message" required maxLength={1000} rows={4} />
      </div>
      <Button type="submit" size="lg" disabled={submitting} variant="outline" className="w-full sm:w-auto">
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {submitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
