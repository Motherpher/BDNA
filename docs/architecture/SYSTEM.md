# BDNA Web Platform — system architecture

## Purpose

The website is an interface into BDNA Legacy's infrastructure, not a marketing wrapper around a separate organisation. Architecture must therefore preserve conceptual traceability from source → content model → interface → deployment.

## Layers

### 1. Canonical source layer
- The Blackprint and approved policies/appendices.
- Human-governed.
- Source material is not silently rewritten by interface work.

### 2. Content model layer
- Structured TypeScript / later CMS content.
- Holds mission, components, concepts, Impact Areas, Asset Keys, pilots and references.
- Each content object should ultimately carry source metadata and revision state.

### 3. Interface layer
- React components and page composition.
- Responsible for navigation, legibility, accessibility and interaction.
- May compress or reorder material but must not invert the source logic.

### 4. Deployment layer
- GitHub is canonical source control.
- Vercel builds previews and production.
- `main` is production authority.

### 5. Design laboratory
- Lovable may propose or implement interface changes in a separate controlled development surface.
- Lovable does not define source truth or deployment authority.

## Initial information architecture

The first public surface should expose multiple entry points rather than forcing linear reading:

1. Home / mission
2. Infrastructure — Foundation, Fund, Asset Keys, Fonio
3. Logic of Access
4. Asset Keys
5. Impact Areas
6. Stewardship / participation
7. The Blackprint
8. Current pilots / work (introduced when source material is approved)
9. Reference / glossary layer

This mirrors the Blackprint's own instruction that the document is layered and can be entered from different points.
