
## Kurian & Company — Business Website

A warm, approachable 4-page website for the Angamaly-based CA firm with appointment booking backed by Lovable Cloud.

### Pages
- **Home** — Hero with firm name (English + Malayalam), 5.0★ / 123 reviews trust badge, brief intro, services preview, "From the owner" updates strip (e.g. advance tax reminder), featured Google reviews, CTA to book appointment.
- **About** — Firm story, values (trust, accuracy, local expertise), why-choose-us (6+ years client relationships, experienced staff), location & service area highlights.
- **Services** — Grid of service cards with placeholder CA offerings (Income Tax, GST, Audit, ROC/MCA, Bookkeeping, TDS, Advisory, Incorporation) — easy to edit later. Each with short description and icon.
- **Contact** — Click-to-call, WhatsApp button, email, full address, opening hours, embedded Google Map of the office, plus contact form and **Appointment Booking** form.

### Appointment Booking
Form fields: Name, Phone, Email, Service (dropdown), Preferred Date (date picker), Preferred Time slot, Notes. Submissions saved to Lovable Cloud (`appointments` table) with a confirmation toast. Owner can view bookings in the database.

### Style — Warm & approachable
- Palette: Emerald/teal primary, warm cream background, soft amber accents, dark slate text.
- Typography: Friendly sans-serif (Inter) with slightly rounded headings.
- Generous whitespace, soft shadows, rounded cards, subtle hover lifts.
- Bilingual touches (Malayalam tagline) to reflect local identity.
- Fully responsive, mobile-first (the firm's traffic will be largely mobile).

### Shared elements
- Sticky header with logo, nav (Home / About / Services / Contact), and a prominent "Call Now" button.
- Footer with address, phone, email, hours, quick links, and Google Maps link.
- Per-route SEO metadata (title, description, og tags) for each page.

### Tech
- Separate TanStack route files per page.
- Lovable Cloud for storing appointment & contact submissions.
- shadcn components (Calendar, Form, Card, Button, etc.).
