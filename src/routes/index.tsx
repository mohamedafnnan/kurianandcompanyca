import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ShieldCheck, Calendar, Phone, ArrowRight, Bell, Receipt, FileSpreadsheet, Building2, BookOpen, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kurian & Company — Chartered Accountants in Angamaly, Kerala" },
      { name: "description", content: "Trusted chartered accountants in Angamaly offering income tax, GST, audit, and advisory services. Rated 5.0 by 123 clients. Book an appointment today." },
      { property: "og:title", content: "Kurian & Company — Chartered Accountants in Angamaly" },
      { property: "og:description", content: "Trusted CA firm in Angamaly. Income tax, GST, audit & advisory. 5.0★ on Google." },
    ],
  }),
  component: HomePage,
});

const previewServices = [
  { icon: Receipt, title: "Income Tax", desc: "Filing, planning & compliance for individuals and businesses." },
  { icon: FileSpreadsheet, title: "GST", desc: "Registration, returns and reconciliation." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory, tax and internal audits." },
  { icon: Building2, title: "ROC / MCA", desc: "Company filings and corporate compliance." },
  { icon: BookOpen, title: "Bookkeeping", desc: "Accurate books, monthly reports." },
  { icon: Briefcase, title: "Advisory", desc: "Tax planning and business consulting." },
];

const reviews = [
  { name: "Amal V S", text: "Knowledgeable and very responsive team. The service quality was excellent. Highly recommended." },
  { name: "Sherly Jiji", text: "Good service and experienced staff — perfect solutions every time." },
  { name: "Akhil N", text: "Professional dealing. Happy with their service for the last six years." },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-background to-background" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs font-medium shadow-sm">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent-foreground text-accent-foreground" />
                ))}
              </span>
              <span>5.0 · 123 Google reviews</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Trusted Chartered Accountants in <span className="text-primary">Angamaly</span>
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg max-w-2xl">
              Personalised tax, GST, audit and advisory services for individuals and businesses
              across Kerala — backed by decades of experience and warm, local service.
            </p>
            <p className="text-sm text-muted-foreground italic" lang="ml">
              ടി.സി. കുര്യൻ ചാർട്ടേഡ് അക്കൗണ്ടന്റ്സ്
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact"><Calendar /> Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+919495386347"><Phone /> Call 094953 86347</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* From the owner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-start gap-3 rounded-2xl border border-accent/60 bg-accent/40 p-5 shadow-sm">
          <Bell className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-accent-foreground">From the owner</div>
            <p className="mt-1 text-sm text-foreground">
              Now is time for payment of advance income tax for FY 2025–26. Last date is{" "}
              <span className="font-semibold">15-12-2025</span>. Reach out for help with your computation.
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">What we do</h2>
            <p className="mt-2 text-muted-foreground">Comprehensive CA services under one roof.</p>
          </div>
          <Link to="/services" className="hidden text-sm font-medium text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((s) => (
            <Card key={s.title} className="border-border/60 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">What clients say</h2>
            <p className="mt-2 text-muted-foreground">5.0 average from 123 Google reviews.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <Card key={r.name} className="border-border/60">
                <CardContent className="p-6">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent-foreground text-accent-foreground" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-foreground">"{r.text}"</p>
                  <p className="mt-4 text-sm font-semibold">{r.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-warm sm:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Ready to get started?</h2>
              <p className="mt-2 max-w-xl text-primary-foreground/85">
                Book an appointment online or call us — we'll guide you to the right solution.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact"><Calendar /> Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="tel:+919495386347"><Phone /> Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
