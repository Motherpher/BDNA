import { pilots } from '../content/pilots'

export function CurrentWork() {
  return (
    <section id="current-work" className="current-work" aria-labelledby="current-work-title">
      <div className="section__inner">
        <p className="eyebrow">Operating layer</p>
        <h2 id="current-work-title">Where access is being designed to open.</h2>
        <p className="lead">
          Current work is presented through boundary, friction, intervention and learning — not through transformation narratives or claims over individual outcomes.
        </p>

        <div className="pilot-grid">
          {pilots.map((pilot) => (
            <article className="pilot-card" key={pilot.slug}>
              <div className="pilot-card__header">
                <span>{pilot.impactArea}</span>
                <span>{pilot.publicStatusLabel}</span>
              </div>
              <h3>{pilot.name}</h3>
              <dl>
                <div><dt>Boundary</dt><dd>{pilot.boundary}</dd></div>
                <div><dt>Access friction</dt><dd>{pilot.accessFriction.join(' · ')}</dd></div>
                <div><dt>Intervention</dt><dd>{pilot.intervention}</dd></div>
                <div><dt>Risk redistribution</dt><dd>{pilot.riskRedistribution}</dd></div>
                <div><dt>Locus shift</dt><dd>{pilot.locusShift}</dd></div>
                <div><dt>Focus</dt><dd>{pilot.eligibility}</dd></div>
                <div><dt>Evaluation</dt><dd>{pilot.evaluation}</dd></div>
              </dl>
              <p className="pilot-card__source"><strong>Source control:</strong> {pilot.sourceNote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
