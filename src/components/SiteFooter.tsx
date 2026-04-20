import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Kurian+%26+Company+Angamaly";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              K
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold">Kurian &amp; Company</div>
              <div className="text-xs text-muted-foreground">Chartered Accountants</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Trusted chartered accountants in Angamaly serving individuals and businesses across
            Kerala with income tax, GST, audit, and advisory services.
          </p>
          <p className="mt-3 text-sm text-muted-foreground" lang="ml">
            ടി.സി. കുര്യൻ ചാർട്ടേഡ് അക്കൗണ്ടന്റ്സ്
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Reach us</h3>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                VII/415-K-13, First Floor, Golden Plaza, T.B. Junction, Angamaly, Kerala 683572
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+919495386347" className="hover:text-foreground">094953 86347</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:info@tckurian.in" className="hover:text-foreground break-all">info@tckurian.in</a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Mon–Sat · 9:30 am – 5:30 pm</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kurian &amp; Company, Chartered Accountants. All rights reserved.
      </div>
    </footer>
  );
}
