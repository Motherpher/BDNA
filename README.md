# BDNA Legacy

**Possibility Infrastructure for Afro-Sweden**

This repository is the canonical digital implementation surface for BDNA Legacy.

## Source doctrine

The public site and digital products are derived from **BDNA Legacy – The Blackprint v5.0**. The website is not the Blackprint reproduced as a linear report. It is an interface into the same infrastructure: mission, Logic of Access, four integrated components, Asset Keys, Impact Areas, stewardship, participation and reference layers.

Source hierarchy:

1. The Blackprint — conceptual and strategic authority.
2. Approved BDNA policies / appendices — operational authority within their domain.
3. Repository content model — web translation of approved source material.
4. Interface copy — derivative presentation copy; must not silently change the underlying concepts.

## Technology

- React + TypeScript
- Vite
- Static-first public site
- Vercel deployment
- GitHub as canonical source of truth

The initial scaffold intentionally carries minimal visual styling. Final visual design follows source architecture, content modelling and deployment setup.

## Structure

```text
src/
  components/       reusable interface components
  content/          canonical web content derived from the Blackprint
  App.tsx            initial source-first site surface
  styles.css         provisional layout tokens only

docs/
  architecture/     system/application architecture
  content/          source map and content model
  design/           design constraints and creative brief
  governance/       content/source governance
  workflow/         GitHub → Vercel → Lovable operating model
  source/           canonical source documents

.github/workflows/  CI validation
```

## Core non-negotiables

BDNA digital work must preserve these distinctions:

- infrastructure, not a short-term project;
- access, not prescribed outcomes;
- conditions, not conduct;
- Asset Keys create entry rather than dictate direction;
- participation must not create moral debt or ideological obligation;
- stewardship protects mission and boundaries over time;
- evaluation tests access and relevance rather than claiming ownership of people's lives.

## Development

```bash
npm install
npm run dev
npm run build
```

## Deployment policy

- `main` is the canonical production branch.
- Feature work should normally use branches and review.
- Vercel production deploys from `main`.
- Preview deployments are used for visual and functional review.
- Lovable is an optional design/build laboratory and must not become a second canonical source of truth.

See `docs/workflow/WORKFLOW.md`.
