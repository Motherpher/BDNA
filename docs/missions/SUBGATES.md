# Deployment subgate missions

These missions replace hidden assumptions with explicit gates.

## SG-V01 — Preview build
**State: MOCK-DONE**

Normal mission: build `build/blackprint-v1` on Vercel and verify READY.

Mock completion basis: repository code is staged and GitHub CI remains the temporary build surrogate. No Vercel READY state is claimed.

## SG-V02 — Preview visual QA
**State: MOCK-DONE**

Normal mission: review the live preview at desktop and mobile widths, including navigation, Pivot Map, pilot layer, glossary and language switch.

Mock completion basis: responsive/accessibility rules are implemented structurally. No browser rendering against Vercel has been verified.

## SG-V03 — Production release
**State: MOCK-DONE**

Normal mission: merge approved code to `main`, deploy on Vercel and verify READY.

Mock completion basis: deployment configuration is staged only. No new production deploy is claimed.

## SG-V04 — Production smoke and domain
**State: MOCK-DONE**

Normal mission: verify the public URL, headers, sitemap, metadata, fallback behaviour and core anchors over live HTTP.

Mock completion basis: these artifacts are present in the repository. Live HTTP verification has not occurred.

## Replay condition

All four missions must be replayed as real missions when deployment credits return. A real failure overrides mock completion immediately.
