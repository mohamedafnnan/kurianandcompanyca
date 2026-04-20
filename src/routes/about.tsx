import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Users, MapPin, Award, HeartHandshake, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kurian & Company, Chartered Accountants Angamaly" },
      { name: "description", content: "Learn about Kurian & Company — a trusted chartered accountancy firm in Angamaly, Kerala, serving clients with integrity and care for over a decade." },
      { property: "og:title", content: "About Kurian & Company" },
      { property: "og:description", content: "A trusted CA firm in Angamaly, Kerala. Integrity, accuracy and local expertise." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We hold ourselves to the highest professional and ethical standards." },
  { icon: Award, title: "Accuracy", desc: "Meticulous attention to numbers, rules and deadlines — every time." },
  { icon: HeartHandshake, title: "Personal service", desc: "Long-term relationships built on trust and clear communication." },
  { icon: MapPin, title: "Local expertise", desc: "Deep understanding of the Angamaly and Kerala business landscape." },
];

const why = [
  { icon: Users, title: "Experienced staff", desc: "A knowledgeable team handling everything from filings to complex audits." },
  { icon: Clock, title: "Years of trust", desc: "Clients who've stayed with us for 6+ years — a testament to consistent quality." },
  { icon: ShieldCheck, title: "End-to-end compliance", desc: "From registration to filings, we keep your business compliant year round." },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-accent/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">About us</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">A trusted name in Angamaly</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Kurian &amp; Company is a chartered accountancy firm based in Angamaly, Kerala.
            We help individuals, professionals, businesses and organisations stay compliant,
            tax-efficient and confident in their financial decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our story</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Founded with the goal of bringing dependable financial expertise to the
                Angamaly community, Kurian &amp; Company has grown alongside the businesses
                we serve.
              </p>
              <p>
                From the salaried professional filing their first return to growing
                companies navigating GST, audits and corporate filings — every client
                gets the same careful attention.
              </p>
              <p>
                Many of our clients have been with us for years, and that continuity is
                something we take pride in.
              </p>
            </div>
          </div>
          <Card className="border-border/60 bg-secondary/40">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold">At a glance</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Rating</dt>
                  <dd className="font-semibold">5.0 ★ (123 Google reviews)</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-semibold">Golden Plaza, T.B. Junction, Angamaly</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Hours</dt>
                  <dd className="font-semibold">Mon–Sat · 9:30 am – 5:30 pm</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Service area</dt>
                  <dd className="font-semibold">Angamaly &amp; across Kerala</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Our values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="border-border/60">
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Why choose us</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {why.map((w) => (
            <Card key={w.title} className="border-border/60">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Button asChild size="lg">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
