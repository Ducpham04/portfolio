# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, weighted equally (confirmed: "cân bằng cả ba"):

- **Vietnamese freelance clients**: SME owners, real-estate and interior-design businesses who need a landing page or a management system. They usually aren't technical. Success: they get in touch to order.
- **Recruiters / tech leads** hiring Java/Spring Boot or full-stack engineers at intern or fresher level. Success: they download the CV and invite him to interview.
- **International clients via Fiverr**. Success: they order a gig.

All three skim on a phone first; recruiters often re-open the page on desktop next to the CV.

## Product Purpose

Personal site for Phạm Văn Đức, a software engineer (Java/Spring Boot, React) and freelance developer in Ho Chi Minh City. It has to show that he builds real, working software and make it easy to contact him, download the CV or order a service.

## Positioning

Confirmed differentiators, things a neighbouring junior developer could not truthfully copy:

1. **Teaches programming at MindX.** He explains technical work clearly to people who aren't technical.
2. **Shipped real digital-government / AI work.** Nghĩa Hành Số is a Zalo Mini App, a backend and an AI assistant for a district government.
3. **Fast delivery at a fair price** for SME clients.

## Operating Context

- Final-year Software Engineering student at FPT University HCMC.
- Teaches at MindX Technology School.
- Takes freelance work directly and via Fiverr.
- Bilingual audience: Vietnamese is primary, English is for recruiters abroad and Fiverr. The site serves `/` (VI) and `/en/` (EN).

## Capabilities and Constraints

- Stack is fixed: React + Vite + TypeScript + Tailwind CSS + Framer Motion, prerendered at build time, deployed to Vercel or Render.
- Required features: VI/EN toggle with the choice persisted, dark/light mode, mobile-first layout.
- Lighthouse ≥ 90 in every category, plus SEO/Open Graph/favicon and basic accessibility.
- All content lives in `src/data/` (projects in `src/data/projects.ts`) so the owner can edit it without touching components.
- Contact goes through `mailto:` or Formspree; the CV is at `/cv.pdf`.

## Evidence on Hand

- Projects are real: Viway Fitness Pro, Nghĩa Hành Số, landing pages for real-estate/interior clients, MindX grading tool. **Real screenshots and links will be supplied later**; current images in `public/projects/` are illustrative placeholders and must be labeled or treated as such.
- **Placeholders, not confirmed:** the stats (4+ years, 15+ projects, 200+ students), timeline years, service prices, Fiverr/LinkedIn URLs and `cv.pdf`. Do not present them as verified, and do not add new numbers, testimonials, client names or logos.

## Product Principles

1. Prove with the work. Show real projects and what they do instead of adjectives.
2. Explain clearly, the way a teacher does. Copy and structure should make sense to a non-technical client in seconds.
3. Give each audience a clear next step: contact, CV or Fiverr.
4. Be fast and accessible on a mid-range phone over mobile data.

## Accessibility & Inclusion

WCAG AA contrast, keyboard navigable, honors `prefers-reduced-motion`, and full Vietnamese diacritics in every typeface used.
