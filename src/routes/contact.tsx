import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/AppointmentForm";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Kurian & Company, Angamaly" },
      { name: "description", content: "Call, WhatsApp, email, or book an appointment online with Kurian & Company, Chartered Accountants in Angamaly, Kerala." },
      { property: "og:title", content: "Contact Kurian & Company" },
      { property: "og:description", content: "Get in touch or book an appointment with our CA firm in Angamaly." },
    ],
  }),
  component: ContactPage,
});

const PHONE = "+919495386347";
const WHATSAPP = "https://wa.me/919495386347";
const EMAIL = "info@tckurian.in";
const MAP_EMBED =
  "https://www.google.com/maps?q=Kurian+%26+Company+Angamaly+Golden+Plaza&output=embed";

function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-accent/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Let's talk</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Call us, send a message, or book an appointment online — whichever is easiest.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border/60">
            <CardContent className="p-5">
              <Phone className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">Call</h3>
              <a href={`tel:${PHONE}`} className="mt-1 block text-sm text-muted-foreground hover:text-foreground">094953 86347</a>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-5">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">WhatsApp</h3>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-muted-foreground hover:text-foreground">Message us</a>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-5">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">Email</h3>
              <a href={`mailto:${EMAIL}`} className="mt-1 block break-all text-sm text-muted-foreground hover:text-foreground">{EMAIL}</a>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-5">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">Hours</h3>
              <p className="mt-1 text-sm text-muted-foreground">Mon–Sat<br/>9:30 am – 5:30 pm</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href={`tel:${PHONE}`}><Phone /> Call Now</a></Button>
          <Button asChild size="lg" variant="outline">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Card className="border-border/60">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold">Book an appointment</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Pick a date and time — we'll confirm shortly.
              </p>
              <div className="mt-6">
                <AppointmentForm />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-border/60">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl font-bold">Send a message</h2>
                <p className="mt-1 text-sm text-muted-foreground">For general questions or feedback.</p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="text-base font-semibold">Visit us</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      VII/415-K-13, First Floor, Golden Plaza,<br/>
                      T.B. Junction, Angamaly, Kerala 683572
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 pb-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
          <iframe
            title="Kurian & Company location"
            src={MAP_EMBED}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
