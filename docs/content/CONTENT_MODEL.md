# Content model

## Canonical object types

### Mission
Single object. Changes require explicit source/governance decision.

### Component
Fields: `id`, `name`, `role`, `status`, `source`, optional `relatedAssetKeys`.
Canonical initial values: Foundation, Fund, Asset Keys, Fonio.

### Concept
Fields: `slug`, `term`, `shortDefinition`, `fullDefinition`, `source`, `relatedConcepts`.
Initial glossary: Access, Opportunity Loop, Life-world, Life & Opportunity Pivot Map, Boundary Permeability, Asset Key, Impact Area, Locus of Control, Literacy, Anti-suboptimalisation, Wedge-to-Pivot Logic, Passing-forward Logic.

### Impact Area
Fields: `slug`, `name`, `status`, `problemBoundary`, `goals`, `theoryOfChange`, `assetKeys`, `evaluation`, `sources`.
The Blackprint lists initial examples including mobility, housing, business/income generation, education, legitimacy/trust, holiday and health.

### Asset Key
Fields: `slug`, `name`, `impactArea`, `boundary`, `accessFriction`, `intervention`, `riskRedistribution`, `locusShift`, `eligibility`, `status`, `evaluation`, `source`.

Asset Keys must be testable against the source design rules: locus of control, legibility in use, explicit power dimensions, and form/flow integrity.

### Pilot / Case
Fields: `slug`, `name`, `assetKey`, `phase`, `geography`, `publicSummary`, `evidence`, `learning`, `status`.

### Reference
Fields: `id`, `title`, `author`, `year`, `url`, `sourceType`, `usedFor`, `verifiedAt`.

## Future CMS boundary

Do not introduce a CMS until the source object model stabilises. The first implementation keeps content versioned in Git so conceptual changes are auditable.
