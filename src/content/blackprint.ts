export type Component = {
  id: string
  name: string
  function: string
  role: string
}

export type Principle = {
  name: string
  text: string
}

export const blackprint = {
  identity: {
    name: 'BDNA Legacy',
    descriptor: 'Possibility Infrastructure for Afro-Sweden',
    source: 'BDNA Legacy – The Blackprint v5.0',
  },

  summary:
    'BDNA Legacy is not a document about identity. It is a framework for opening access where opportunity already exists but remains structurally difficult to enter.',

  mission:
    'BDNA identifies, designs and maintains structural access points where opportunity already exists but remains unreachable because of systemic barriers.',

  missionExpanded:
    'BDNA operates at the level of conditions, not conduct. It intervenes where access is blocked by cost, distance, timing, risk concentration, institutional opacity or inherited disadvantage. Its responsibility is to open access; what happens after that belongs to the person, family or community.',

  question:
    'What becomes possible when infrastructure is designed to enable human emergence rather than manage risk?',

  distinctions: [
    'Infrastructure, not project',
    'Access, not outcome control',
    'Conditions, not conduct',
    'Entry, not direction',
    'Overlap, not persuasion',
    'Stewardship, not ownership',
  ],

  readerPaths: [
    {
      label: 'What is BDNA?',
      route: 'Introduction + Chapter B',
      text: 'Purpose, stance, mission and structural architecture.',
      href: '#infrastructure',
    },
    {
      label: 'Why does it exist?',
      route: 'Introduction + Chapter A',
      text: 'Structural conditions, lived friction and the problem-space for access.',
      href: '#why',
    },
    {
      label: 'What holds it together?',
      route: 'Chapter C',
      text: 'The Logic of Access, boundary permeability and anti-suboptimalisation.',
      href: '#logic',
    },
    {
      label: 'How does it operate?',
      route: 'Chapter D',
      text: 'Asset Key design, participation, leverage and stakeholder strategy.',
      href: '#playbook',
    },
  ],

  components: [
    {
      id: 'foundation',
      name: 'Foundation',
      function: 'Stewardship',
      role: 'Holds the mission, ethics and long-term stewardship of BDNA. It protects infrastructural integrity from short-term financial, political or reputational pressure.',
    },
    {
      id: 'fund',
      name: 'Fund',
      function: 'Capital & risk',
      role: 'Clusters capital, negotiates terms and redistributes risk so that barriers to entry can be lowered without turning access into dependency.',
    },
    {
      id: 'asset-keys',
      name: 'Asset Keys',
      function: 'Intervention',
      role: 'Concrete, bounded infrastructural interventions at structural choke points. They create entry without prescribing what should follow.',
    },
    {
      id: 'fonio',
      name: 'Fonio',
      function: 'Micro-growth',
      role: 'An adaptive micro-growth incubator cell for seed-level initiative and experimentation, with safeguards against bias, fraud and corruption.',
    },
  ] as Component[],

  logicOfAccess: {
    purpose:
      'The Logic of Access is the conceptual spine of BDNA. It asks whether opportunity can realistically be entered, rather than attempting to control the outcome after entry.',
    lifeWorld:
      'The Life-world is the realm of everyday conditions: time, money, care responsibilities, knowledge, distance, institutional experience and exposure to risk.',
    opportunityLoop:
      'Opportunity Loops are the spaces in which education, labour, finance, mobility, institutions and networks circulate possibility.',
    boundary:
      'The boundary is where access is granted or denied in practice. It can be formal or informal, visible or hidden.',
    boundaryPermeability:
      'Boundary permeability describes how navigable that threshold is. Low permeability means high cost, rigid filters and high penalty for failure. High permeability means lower friction, manageable risk and realistic entry conditions.',
    pivotMap:
      'The Life & Opportunity Pivot Map is diagnostic, not prescriptive. It identifies the Life-world, the Opportunity Loop and the boundary between them, then asks where infrastructural intervention can open access.',
  },

  friction: [
    'Cost',
    'Distance',
    'Timing',
    'Risk concentration',
    'Institutional opacity',
    'Inherited disadvantage',
  ],

  moralAnchor: {
    name: 'Anti-suboptimalisation',
    text: 'BDNA rejects systems that quietly waste human capability by design. It challenges boundaries built primarily to protect systems when those boundaries suppress human emergence.',
  },

  wedgeToPivot: [
    {
      step: '01',
      name: 'Locate friction',
      text: 'Find the joint where cost, risk, timing, opacity or another barrier disproportionately blocks access.',
    },
    {
      step: '02',
      name: 'Apply a wedge',
      text: 'Use a bounded financial, procedural, temporal or relational intervention to alter the access condition.',
    },
    {
      step: '03',
      name: 'Create a pivot',
      text: 'Change feasibility: what was unrealistic becomes thinkable, and what was thinkable becomes actionable.',
    },
  ],

  assetKeyPrinciples: [
    {
      name: 'Locus of control',
      text: 'Once access is granted, decision-making authority remains with the individual. Access must not depend on continued compliance, behavioural alignment or narrative participation.',
    },
    {
      name: 'Legibility in use',
      text: 'Opportunity should become readable when it becomes actionable. Prior insider knowledge or institutional fluency must not be a condition of entry.',
    },
    {
      name: 'Power dimensions',
      text: 'Design must surface who absorbs risk, sets terms, controls timing, defines failure and bears consequences. If power relations at the boundary cannot be articulated, the intervention is a service rather than an Asset Key.',
    },
    {
      name: 'Form & flow integrity',
      text: 'Rules, eligibility and interfaces must align with how people actually move through everyday life. Access fails when use requires workarounds, exceptional treatment or personal negotiation.',
    },
  ] as Principle[],

  impactAreas: [
    'Mobility',
    'Housing',
    'Business & income generation',
    'Education',
    'Legitimacy & trust',
    'Holiday',
    'Health',
  ],

  impactAreaLogic:
    'Impact Areas are selected for leverage potential: the barrier can be diagnosed, boundary permeability can be altered without full system overhaul, and an Asset Key can be designed that is neither trivial nor totalising. They are modular, reviewable and may be retired when conditions change.',

  participation: {
    freedom:
      'Participation does not require ideological alignment, organisational loyalty or identity adoption. Coherence comes from the mission, the Logic of Access and explicit ethical boundaries rather than behavioural compliance.',
    passingForward:
      'Passing-forward allows value to circulate without repayment, dependency or moral debt. Contribution is decoupled from receipt and remains voluntary; it may occur later, in another form, or not at all.',
  },

  stewardship:
    'BDNA is designed for a timescale beyond projects, funding cycles, political mandates and individual leadership tenures. Stewardship is custodianship of mission, logic and boundaries; it is not ownership of people, their lives or their outcomes.',

  evaluation: {
    core:
      'Evaluation asks whether an Asset Key meaningfully altered the boundary between the Life-world and the Opportunity Loop. It focuses on access, relevance and design integrity rather than transformation narratives or abstract internal states.',
    responsibleFor: [
      'Relevance of Asset Keys',
      'Integrity of their design',
      'Ability to create access',
      'Alignment with lived constraints',
    ],
    notResponsibleFor: [
      'Individual success or failure',
      'Personal choices after access is granted',
      'Long-term outcomes beyond the intervention',
    ],
    learning:
      'Evaluation is formative: it improves Asset Key design, refines Impact Area strategies and adapts to evolving diagnostics. Indicators serve learning, not performance theatre.',
  },

  sourceNote:
    'The public interface translates the Blackprint into navigable layers. It does not replace the source document, and operational detail that the Blackprint marks as unresolved remains unresolved here.',
}
