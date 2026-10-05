export type ModuleId =
  | 'why'
  | 'infrastructure'
  | 'logic'
  | 'playbook'
  | 'impact-areas'
  | 'participation'
  | 'evaluation'
  | 'stewardship'
  | 'current-work'
  | 'glossary'
  | 'blackprint'

export type SiteModule = {
  id: ModuleId
  label: string
  source: string
  purpose: string
  related: ModuleId[]
}

/**
 * Route-ready registry for the public site.
 *
 * The current implementation remains a single document surface, but modules are
 * modelled independently so routing can be introduced later without rewriting
 * the source model.
 */
export const siteModules: SiteModule[] = [
  {
    id: 'why',
    label: 'Why BDNA exists',
    source: 'Introduction + Chapter A',
    purpose: 'Structural conditions and the problem-space for access.',
    related: ['logic', 'impact-areas'],
  },
  {
    id: 'infrastructure',
    label: 'The infrastructure',
    source: 'Chapter B',
    purpose: 'Mission, stance and the four integrated components.',
    related: ['stewardship', 'playbook'],
  },
  {
    id: 'logic',
    label: 'Logic of Access',
    source: 'Chapter C',
    purpose: 'Life-world, Opportunity Loop, boundary permeability and anti-suboptimalisation.',
    related: ['playbook', 'evaluation'],
  },
  {
    id: 'playbook',
    label: 'The Playbook',
    source: 'Chapter D',
    purpose: 'Wedge-to-pivot logic, Asset Key design and leverage without outcome control.',
    related: ['logic', 'current-work', 'participation'],
  },
  {
    id: 'impact-areas',
    label: 'Impact Areas',
    source: 'Chapter D.3',
    purpose: 'Modular domains selected for leverage potential rather than symbolic coverage.',
    related: ['playbook', 'current-work'],
  },
  {
    id: 'participation',
    label: 'Participation',
    source: 'Chapter D.5',
    purpose: 'Freedom within coherence and passing-forward without moral debt.',
    related: ['stewardship', 'playbook'],
  },
  {
    id: 'evaluation',
    label: 'Evaluation',
    source: 'Appendix B',
    purpose: 'Access, relevance and learning rather than judgment or performance theatre.',
    related: ['logic', 'current-work'],
  },
  {
    id: 'stewardship',
    label: 'Stewardship',
    source: 'Chapter B.4',
    purpose: 'Custodianship of mission, logic and boundaries across generations.',
    related: ['infrastructure', 'participation'],
  },
  {
    id: 'current-work',
    label: 'Current work',
    source: 'Approved public pilot material + Appendix D where available',
    purpose: 'Show where access is being opened without claiming ownership of individual outcomes.',
    related: ['playbook', 'impact-areas', 'evaluation'],
  },
  {
    id: 'glossary',
    label: 'Glossary',
    source: 'Appendix E',
    purpose: 'Controlled definitions for the concepts that hold the system together.',
    related: ['logic', 'playbook', 'evaluation'],
  },
  {
    id: 'blackprint',
    label: 'The Blackprint',
    source: 'BDNA Legacy – The Blackprint v5.0',
    purpose: 'Canonical conceptual source and source-trace layer.',
    related: ['why', 'infrastructure', 'logic', 'playbook', 'glossary'],
  },
]
