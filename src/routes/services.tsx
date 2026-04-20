import { createFileRoute, Link } from "@tanstack/react-router";
import { Receipt, FileSpreadsheet, ShieldCheck, Building2, BookOpen, Coins, Briefcase, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kurian & Company, Chartered Accountants Angamaly" },
      { name: "description", content: "Income tax, GST, audit, ROC/MCA, bookkeeping, TDS, advisory and incorporation services from Kurian & Company in Angamaly, Kerala." },
      { property: "og:title", content: "CA Services — Kurian & Company, Angamaly" },
      { property: "og:description", content: "Income tax, GST, audit, ROC, bookkeeping, TDS and advisory services in Angamaly." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Receipt, title: "Income Tax", desc: "Return filing, tax planning, refunds and assessments for individuals, firms and companies." },
  { icon: FileSpreadsheet, title: "GST", desc: "Registration, monthly/quarterly returns, reconciliation, and refund processing." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Statutory audits, tax audits, internal audits and management reporting." },
  { icon: Building2, title: "ROC / MCA Compliance", desc: "Annual filings, director changes, share transfers and corporate compliance." },
  { icon: BookOpen, title: "Bookkeeping & Accounting", desc: "End-to-end accounting, monthly MIS reports and financial statements." },
  { icon: Coins, title: "TDS & Payroll", desc: "TDS computation, returns, Form 16 / 16A, and payroll processing support." },
  { icon: Briefcase, title: "Business Advisory", desc: "Tax planning, financial strategy, structuring and ongoing consulting." },
  { icon: Rocket, title: "Incorporation & Registration", desc: "Company, LLP, partnership formation, MSME, GST, and other registrations." },
];

function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-accent/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Services</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Comprehensive CA services</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            From routine compliance to strategic advisory, we offer a full range of
            chartered accountancy services tailored to your needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="border-border/60 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border/60 bg-secondary/40 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Need something specific?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your requirement — we'll guide you to the right service.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">Book a consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
