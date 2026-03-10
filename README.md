# Jameye — Coming Soon Page

A full-page "coming soon" site for Jameye with email capture. Apple-style full-viewport scroll structure with dark, competitive design.

## Stack

- **React** + Vite
- **Styling**: Inline styles + CSS (no Tailwind)
- **Fonts**: Bebas Neue, IBM Plex Sans, IBM Plex Mono
- **Animations**: CSS keyframes + IntersectionObserver

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Email capture

The form in `SectionEmail.jsx` uses a mock submit. Wire it to your provider:

- **Formspree**: `action="https://formspree.io/f/YOUR_ID"` + `method="POST"`
- **Resend**: POST to your API route
- **Mailchimp**: Use their embed or API

Replace the `fetch` call in the submit handler with your endpoint.

## Structure

- `Nav` — Fixed, frosted on scroll
- `Hero` — Staggered text reveal, CTA scrolls to email
- `SectionEdge` — Edge Score explainer + animated score card
- `SectionLevels` — 10 level badges with hover glow
- `SectionTournaments` — Tournament cards + prize total
- `SectionEmail` — Email capture form
- `Footer` — Slim bar

## Hero image

When ready, add a hero image per the spec in `Hero.jsx`:

```jsx
<div style={{
  position: "absolute", inset: 0,
  backgroundImage: "url('/images/hero.jpg')",
  backgroundSize: "cover", backgroundPosition: "center",
  filter: "brightness(0.25) saturate(0.6)",
  zIndex: 0,
}} />
<div style={{
  position: "absolute", inset: 0,
  background: "linear-gradient(to bottom, #141A14AA 0%, #141A14 100%)",
  zIndex: 0,
}} />
```
