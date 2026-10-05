# Vercel subgates — MOCK-DONE protocol

Status date: 2026-10-05

## Purpose

Vercel build credits are exhausted. Development is therefore allowed to continue without falsely representing deployment evidence.

The Director has authorised the Vercel-dependent release subgates below to be treated as **MOCK-DONE** so that repository, content, design and governance work can proceed.

**MOCK-DONE never means that Vercel performed the action.** It means the gate is administratively simulated and deferred until deployment capacity returns.

## Subgates

| Gate | Normal evidence | Current state | What MOCK-DONE means |
|---|---|---|---|
| SG-V01 Preview build | Vercel preview deployment reaches READY | **MOCK-DONE** | GitHub CI typecheck/build is used as the temporary build surrogate. No Vercel preview was created or verified. |
| SG-V02 Preview visual QA | Desktop/mobile review against live Vercel preview | **MOCK-DONE** | Responsive and accessibility rules are implemented in code and inspected structurally. No live browser review of a Vercel preview has occurred. |
| SG-V03 Production deployment | `main` deployment reaches READY | **MOCK-DONE** | Production deployability is assumed from repository build integrity only. No new production deployment is claimed. |
| SG-V04 Production smoke/domain | Live URL, routing, metadata and headers verified over HTTP | **MOCK-DONE** | Configuration files and metadata are prepared. No live HTTP/domain verification is claimed. |

## Reconciliation rule

When Vercel credits or another deployment path becomes available, every MOCK-DONE gate must be replayed as a real gate in order:

1. SG-V01 real preview build.
2. SG-V02 real desktop/mobile visual QA.
3. SG-V03 real production deployment.
4. SG-V04 real production smoke/domain verification.

Any defect found during replay reopens the relevant work package. Mock completion cannot override actual deployment evidence.

## Source of truth

GitHub remains canonical. Vercel is deployment infrastructure, not conceptual or code authority.
