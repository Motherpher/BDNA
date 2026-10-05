# BDNA Web Platform — work programme

## Status vocabulary

- **DONE** — repository-side scope implemented and evidence exists.
- **MOCK-DONE** — external deployment gate administratively simulated; not actually executed.
- **OPEN** — not yet completed.

## Work packages

| WP | Scope | State | Evidence / residual |
|---|---|---|---|
| WP01 | Release Blackprint-first public baseline | **DONE under explicit mock-gate exception** | Source-first interface merged to `main`; GitHub CI passed. Vercel SG-V01–SG-V04 are MOCK-DONE because credits are exhausted and must be replayed later. |
| WP02 | Durable Blackprint content architecture | **DONE** | Route-ready module registry separates source domains from presentation and preserves multiple entry points. |
| WP03 | Visual system and Blackprint diagrams | **DONE (v1)** | System map, Pivot Map, friction grammar, Impact Area constellation and phase-two design tokens/styles establish the first reusable visual system. BDNA Lab is the bounded visual exploration layer. |
| WP04 | Source, glossary and methodology layer | **DONE (v1)** | Canonical glossary registry and reference layer implemented; source governance remains explicit. |
| WP05 | Pilots/current work/Asset Key surfaces | **DONE (v1)** | Source-controlled Mobility Pass operating surface added with conservative status language and no unsupported claim that live delivery has begun. |
| WP06 | Swedish/English language architecture | **DONE (architecture)** | Language state, switcher, source-supported Swedish public overview, translation controls and terminology register implemented. Deep Swedish Blackprint translation remains a future governed content decision rather than an architecture gap. |
| WP07 | Accessibility, performance, SEO and release hardening | **DONE (repository layer)** | Skip link, focus states, reduced-motion support, responsive additions, metadata, sitemap, 404, header configuration and release discipline implemented. Live deployment verification remains SG-V04 MOCK-DONE. |

## Baseline release state

Canonical code is now on `main` at the Blackprint-first public-platform baseline. GitHub CI passed install, typecheck and build after merge.

The only intentionally non-executed release evidence is the Vercel-dependent layer. Those subgates are labelled MOCK-DONE in individual mission files and closed GitHub issues; none may later be reported as real deployment evidence without replay.

## Development sequence after this baseline

The platform should now evolve through bounded improvements rather than architecture replacement:

1. Review output from BDNA Lab and port only approved visual improvements into the canonical repository.
2. Resolve controlled Swedish terminology and approved deep translations when source decisions exist.
3. Add further Asset Keys or cases only when source-approved public material exists.
4. Replay SG-V01–SG-V04 as real gates when Vercel credits return.
5. Continue source → branch/PR → CI → `main` discipline for all canonical changes.
