# BDNA release checklist

## Repository gates

- [x] Source model separated from presentation.
- [x] TypeScript strict build path retained.
- [x] Blackprint module registry added.
- [x] Glossary/reference layer added.
- [x] Source-controlled pilot registry added.
- [x] Controlled English/Swedish language architecture added.
- [x] Skip link and focus-visible states added.
- [x] Reduced-motion handling added.
- [x] Responsive rules added for new modules.
- [x] Metadata, sitemap, 404 and deployment headers staged.
- [x] GitHub remains canonical source of truth.

## External deployment gates

Because Vercel credits are exhausted, these gates are **MOCK-DONE**, not actually executed:

- [x] **MOCK-DONE SG-V01** — Vercel preview reaches READY.
- [x] **MOCK-DONE SG-V02** — live preview desktop/mobile QA.
- [x] **MOCK-DONE SG-V03** — production deployment reaches READY.
- [x] **MOCK-DONE SG-V04** — live production smoke/domain/header verification.

See `docs/missions/VERCEL-MOCK-GATES.md` for the mandatory replay protocol.

## Rule

No future report may convert a MOCK-DONE item into a real DONE item without actual deployment evidence.
