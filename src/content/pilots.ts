export type PilotStatus = 'source-described-pilot' | 'design' | 'active' | 'retired'

export type Pilot = {
  slug: string
  name: string
  impactArea: string
  status: PilotStatus
  publicStatusLabel: string
  boundary: string
  accessFriction: string[]
  intervention: string
  riskRedistribution: string
  locusShift: string
  eligibility: string
  evaluation: string
  source: string
  sourceNote: string
}

/**
 * Public pilot registry.
 *
 * Status is deliberately conservative. A source describing an intended pilot
 * does not, by itself, prove that the intervention is currently live.
 */
export const pilots: Pilot[] = [
  {
    slug: 'mobility-pass',
    name: 'BDNA Mobility Pass',
    impactArea: 'Mobility',
    status: 'source-described-pilot',
    publicStatusLabel: 'First pilot 2026 · source-described',
    boundary: 'Everyday mobility where transport cost can make work, study and care practically unreachable.',
    accessFriction: ['Transport cost', 'Timing', 'Care responsibilities'],
    intervention: 'The approved public one-pager describes an aim to lend 30-day SL public transport cards with a 25% co-pay.',
    riskRedistribution: 'Crowdfunded donations are described as covering the remaining cost. The source states SEK 795 as one pass-month.',
    locusShift: 'The intervention is intended to make movement realistically possible while leaving the purpose and subsequent choices with the individual.',
    eligibility: 'The source describes a focus on single mothers and others with urgent mobility needs related to work, study and care.',
    evaluation: 'Evaluate whether the mobility boundary was materially altered and whether the access arrangement was relevant and usable; do not claim ownership of downstream life outcomes.',
    source: 'BDNA Legacy – One pager – English och Svenska',
    sourceNote: 'The source establishes the pilot aim and design direction. This registry does not assert that live delivery has begun or that current pricing remains unchanged.',
  },
]
