export type GlossaryTerm = {
  term: string
  slug: string
  definition: string
  source: string
  swedishLabel?: string
  translationStatus: 'canonical-en' | 'source-supported-sv' | 'translation-decision-required'
}

export const glossary: GlossaryTerm[] = [
  {
    term: 'Access',
    slug: 'access',
    definition: 'The practical possibility to enter an opportunity space on terms that are realistically navigable within a person’s lived conditions.',
    source: 'Blackprint Appendix E; Chapter C',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Opportunity Loop',
    slug: 'opportunity-loop',
    definition: 'A space in which education, labour, finance, mobility, institutions, networks or other forms of possibility circulate.',
    source: 'Blackprint Appendix E; Chapter C.1',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Life-world',
    slug: 'life-world',
    definition: 'The realm of everyday conditions in which time, money, care, distance, knowledge, institutional experience and exposure to risk shape what is realistically possible.',
    source: 'Blackprint Appendix E; Chapter C.1',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Life & Opportunity Pivot Map',
    slug: 'pivot-map',
    definition: 'BDNA’s diagnostic model for the Life-world, Opportunity Loop and the boundary between them, used to identify where infrastructural intervention can open access.',
    source: 'Blackprint Appendix E; Chapter C.1',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Boundary Permeability',
    slug: 'boundary-permeability',
    definition: 'How easy or difficult it is to approach, understand and cross the threshold between the Life-world and an Opportunity Loop without disproportionate cost or risk.',
    source: 'Blackprint Appendix E; Chapter C.4',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Asset Key',
    slug: 'asset-key',
    definition: 'A concrete, bounded infrastructural intervention designed to open access at a structural choke point without prescribing what should happen after entry.',
    source: 'Blackprint Appendix E; Chapters C.5 and D.4',
    swedishLabel: 'Asset Key',
    translationStatus: 'source-supported-sv',
  },
  {
    term: 'Impact Area',
    slug: 'impact-area',
    definition: 'A defined domain of life where access is systematically constrained and where leverage can be applied through one or more Asset Keys.',
    source: 'Blackprint Appendix E; Chapter D.3',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Locus of Control',
    slug: 'locus-of-control',
    definition: 'The point at which a person can make a decision with real options, without needing permission, and can affect their own trajectory.',
    source: 'Blackprint Appendix E; Chapter D.4',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Literacy',
    slug: 'literacy',
    definition: 'The perceptual and practical ability to recognise, interpret and navigate opportunity spaces; it supports access but is not a prerequisite that should gate access.',
    source: 'Blackprint Appendix E; Chapter C.2; Appendix B',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Anti-suboptimalisation',
    slug: 'anti-suboptimalisation',
    definition: 'BDNA’s moral stance against systems that quietly waste human capability by restricting access primarily to protect systems rather than enable human emergence.',
    source: 'Blackprint Appendix E; Chapter C.3',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Wedge-to-Pivot Logic',
    slug: 'wedge-to-pivot',
    definition: 'A leverage logic in which a bounded wedge is applied where friction is concentrated so that what was unrealistic can become thinkable and actionable.',
    source: 'Blackprint Appendix E; Chapter D.2',
    translationStatus: 'translation-decision-required',
  },
  {
    term: 'Passing-forward Logic',
    slug: 'passing-forward',
    definition: 'A structural ethic through which value may circulate without repayment, dependency, moral debt or compulsory representation; contribution is decoupled from receipt.',
    source: 'Blackprint Appendix E; Chapter D.5',
    translationStatus: 'translation-decision-required',
  },
]
