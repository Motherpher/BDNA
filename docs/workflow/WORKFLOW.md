# Development workflow — GitHub → Vercel → Lovable

## Authority model

```text
Blackprint / approved sources
          ↓
Motherpher/BDNA (canonical repository)
          ↓
Vercel preview + production
```

Lovable is attached as a controlled design/build laboratory, not as deployment authority.

## Why Lovable is separated

Lovable's Git sync is designed around a repository created/managed from the Lovable project. The canonical `Motherpher/BDNA` repository already exists and is intentionally source-first. To avoid replacing or subordinating that repository, use a separate Lovable-connected repository such as `Motherpher/BDNA-Lab`.

## Recommended flow

```text
Motherpher/BDNA
  main ─────────────────────────────→ Vercel production
   │
   ├─ feature/content-* ────────────→ Vercel preview
   └─ feature/implementation-*

Motherpher/BDNA-Lab
   ↑↓
 Lovable
```

### Moving work from Lovable into production

1. Work in Lovable / `BDNA-Lab` on a bounded interface task.
2. Review the generated diff against source and design rules.
3. Port/cherry-pick the accepted files or changes into a feature branch of `Motherpher/BDNA`.
4. Vercel creates a preview from that branch/PR.
5. Review content fidelity, accessibility, responsive behaviour and visual quality.
6. Merge to `main` only after approval.
7. Vercel promotes the canonical build to production.

## Prohibited workflow

Do not publish directly from Lovable as the canonical BDNA site once the Vercel production project is active.

Do not allow a visual prompt to rewrite mission, definitions, evaluation doctrine or governance language without a source decision.

## Early Lovable project

The existing early Lovable project can be retained as a visual reference or retired. It should not be imported wholesale into the canonical repository because the source-first scaffold supersedes it.
