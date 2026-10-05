export type Component = {
  id: string
  name: string
  role: string
}

export const blackprint = {
  identity: {
    name: 'BDNA Legacy',
    descriptor: 'Possibility Infrastructure for Afro-Sweden',
    source: 'BDNA Legacy – The Blackprint v5.0',
  },
  mission:
    'BDNA Legacy exists to build and steward infrastructure that opens access to opportunity for people in the Afro-diaspora in Sweden.',
  missionExpanded:
    'BDNA identifies, designs and maintains structural access points where opportunity already exists but remains unreachable because of systemic barriers. It operates at the level of conditions, not conduct, and does not prescribe what people should become after access is opened.',
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
  components: [
    {
      id: 'foundation',
      name: 'Foundation',
      role: 'Holds the mission, ethics and long-term stewardship of BDNA, protecting infrastructural integrity from short-term financial, political or reputational pressure.',
    },
    {
      id: 'fund',
      name: 'Fund',
      role: 'Functions as a financial mechanism aligned with the mission, clustering capital and redistributing risk so barriers to entry can be lowered without creating dependency.',
    },
    {
      id: 'asset-keys',
      name: 'Asset Keys',
      role: 'Concrete, bounded infrastructural interventions that open access at specific structural choke points. They create entry without prescribing what should follow.',
    },
    {
      id: 'fonio',
      name: 'Fonio',
      role: 'A micro-growth incubator cell intended to support seed-level initiative and experimentation by individuals in the Afro-diaspora, while requiring strong safeguards against bias, fraud and corruption.',
    },
  ] as Component[],
  logicOfAccess: {
    purpose:
      'The Logic of Access is the conceptual spine of BDNA. It focuses on whether opportunity can realistically be entered rather than on controlling what outcome follows.',
    lifeWorld:
      'The Life-world describes the conditions of everyday life in which time, money, care responsibilities, knowledge, distance and risk shape what is realistically possible.',
    opportunityLoop:
      'Opportunity Loops are spaces where education, labour, finance, mobility, institutions and networks circulate possibility.',
    boundaryPermeability:
      'Boundary permeability describes how easy or difficult it is to move between the Life-world and an Opportunity Loop. BDNA intervenes to increase permeability rather than to change people.',
    pivotMap:
      'The Life & Opportunity Pivot Map is a diagnostic model that places the Life-world and Opportunity Loop as coexisting realms, identifies the boundary between them, and asks where infrastructural intervention can open access.',
  },
  assetKeyPrinciples: [
    {
      name: 'Locus of control',
      text: 'Once access is granted, decision-making authority remains with the individual. Access must not depend on continued compliance, behavioural alignment or narrative participation.',
    },
    {
      name: 'Legibility in use',
      text: 'An Asset Key should make opportunity readable at the point where it becomes actionable. Prior insider knowledge or institutional fluency must not be a condition of entry.',
    },
    {
      name: 'Power dimensions',
      text: 'Design must make visible who absorbs risk, sets terms, controls timing, defines failure and bears consequences. Power asymmetries should be reduced without creating new dependency.',
    },
    {
      name: 'Form & flow integrity',
      text: 'Rules and interfaces must align with how people actually move through everyday life. Nominal openness is insufficient when real use requires workarounds, exceptions or personal negotiation.',
    },
  ],
  impactAreas: [
    'Mobility',
    'Housing',
    'Business and income generation',
    'Education',
    'Legitimacy and trust',
    'Holiday',
    'Health',
  ],
  participation: {
    freedom:
      'Participation does not require ideological alignment, organisational loyalty or identity adoption. Coherence comes from explicit mission, Logic of Access and ethical boundaries rather than behavioural compliance.',
    passingForward:
      'Passing-forward allows value to circulate without repayment, moral debt or mandatory representation. Contribution is decoupled from receipt and remains voluntary.',
  },
  stewardship:
    'BDNA is designed for a timescale beyond projects, funding cycles, political mandates and individual leadership tenures. Stewardship means custodianship of mission, logic and boundaries, not ownership of people or outcomes.',
  evaluation:
    'BDNA evaluates conditions, relevance and whether access has been materially opened. Impact Areas may hold their own goals and Theory of Change, but the infrastructure as a whole does not impose one universal outcome model.',
}
