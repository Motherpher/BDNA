# SG-V04 — Production smoke, domain and headers

**State: MOCK-DONE**

## Normal mission
Verify the released public site over live HTTP after production deployment.

## Required checks
- root URL returns the intended application
- canonical metadata and Open Graph metadata are emitted
- sitemap and robots are reachable
- fallback/404 behaviour is acceptable
- configured security headers are present
- primary anchors and language controls function
- no blocking console/runtime errors are observed

## Mock completion
The repository contains the intended metadata, sitemap, fallback and `vercel.json` header configuration, but no live HTTP verification has occurred because Vercel credits are exhausted.

## Replay evidence required later
- live production URL
- HTTP/header verification
- sitemap/robots fetch
- fallback behaviour check
- smoke-test result recorded in the release issue
