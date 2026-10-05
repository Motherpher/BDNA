import { Navigation } from './components/Navigation'
import { Section } from './components/Section'
import { blackprint } from './content/blackprint'

function PivotDiagram() {
  return (
    <div className="pivot-map" role="img" aria-label="Life-world and Opportunity Loop separated by a boundary, with an Asset Key opening access">
      <div className="pivot-map__realm pivot-map__realm--life">
        <span className="pivot-map__label">Life-world</span>
        <strong>Everyday conditions</strong>
        <p>Time · money · care · distance · knowledge · risk</p>
      </div>
      <div className="pivot-map__boundary">
        <span>Boundary</span>
        <div className="pivot-map__key">Asset Key</div>
      </div>
      <div className="pivot-map__realm pivot-map__realm--opportunity">
        <span className="pivot-map__label">Opportunity Loop</span>
        <strong>Circulating possibility</strong>
        <p>Education · labour · finance · mobility · institutions · networks</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header id="top" className="hero">
        <Navigation />
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--gold">{blackprint.identity.descriptor}</p>
            <h1>
              Access is not the outcome.
              <span>It is the condition that makes outcomes possible.</span>
            </h1>
            <p className="hero__lead">{blackprint.missionExpanded}</p>
            <div className="hero__actions">
              <a className="button button--gold" href="#entry-points">Explore the infrastructure</a>
              <a className="button button--ghost" href="#logic">See the Logic of Access</a>
            </div>
          </div>
          <aside className="hero__aside" aria-label="BDNA core question">
            <div className="hero__identity">
              <span className="hero__wordmark">BDNA</span>
              <span>Legacy</span>
            </div>
            <p className="hero__question">{blackprint.question}</p>
            <div className="hero__rule" />
            <p className="hero__source">Source: {blackprint.identity.source}</p>
          </aside>
        </div>
      </header>

      <main>
        <section id="entry-points" className="entry-points" aria-labelledby="entry-points-title">
          <div className="section__inner">
            <div className="entry-points__head">
              <p className="eyebrow">A layered document, not a linear story</p>
              <h2 id="entry-points-title">Enter where the question begins.</h2>
              <p className="lead">The Blackprint is designed to be entered from different points. This public interface keeps that logic: choose the layer you need rather than following a compulsory path.</p>
            </div>
            <div className="entry-grid">
              {blackprint.readerPaths.map((path, index) => (
                <a className="entry-card" href={path.href} key={path.label}>
                  <span className="entry-card__number">0{index + 1}</span>
                  <strong>{path.label}</strong>
                  <p>{path.text}</p>
                  <span className="entry-card__route">{path.route}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Section id="why" eyebrow="Why BDNA exists" title="The problem is not lack of aspiration. It is unevenly designed access.">
          <div className="split-copy">
            <p className="lead">{blackprint.summary}</p>
            <div className="statement-stack">
              {blackprint.distinctions.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="friction-panel">
            <div>
              <p className="eyebrow">Where access hardens</p>
              <h3>Friction accumulates before a decision is ever made.</h3>
            </div>
            <div className="friction-grid">
              {blackprint.friction.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </Section>

        <Section id="infrastructure" eyebrow="Chapter B · BDNA Legacy" title="Four components. One infrastructural system.">
          <p className="lead">Mission, capital, intervention and learning are structurally aligned. The components have distinct functions, but their value lies in how they reinforce one another without requiring centralised control.</p>
          <div className="component-grid">
            {blackprint.components.map((component, index) => (
              <article className="component-card" key={component.id}>
                <div className="component-card__meta">
                  <span>0{index + 1}</span>
                  <span>{component.function}</span>
                </div>
                <h3>{component.name}</h3>
                <p>{component.role}</p>
              </article>
            ))}
          </div>
          <div className="system-loop" aria-label="BDNA component relationship">
            <span>Mission & ethics</span>
            <b>→</b>
            <span>Capital & risk</span>
            <b>→</b>
            <span>Access intervention</span>
            <b>→</b>
            <span>Learning & emergence</span>
            <b>↺</b>
          </div>
        </Section>

        <section id="logic" className="logic-section" aria-labelledby="logic-title">
          <div className="section__inner">
            <div className="logic-section__intro">
              <p className="eyebrow eyebrow--gold">Chapter C · Conceptual spine</p>
              <h2 id="logic-title">The Logic of Access</h2>
              <p className="lead">{blackprint.logicOfAccess.purpose}</p>
            </div>
            <PivotDiagram />
            <div className="logic-grid">
              <article>
                <span>01</span>
                <h3>Life-world</h3>
                <p>{blackprint.logicOfAccess.lifeWorld}</p>
              </article>
              <article>
                <span>02</span>
                <h3>Boundary</h3>
                <p>{blackprint.logicOfAccess.boundary}</p>
              </article>
              <article>
                <span>03</span>
                <h3>Opportunity Loop</h3>
                <p>{blackprint.logicOfAccess.opportunityLoop}</p>
              </article>
              <article>
                <span>04</span>
                <h3>Boundary permeability</h3>
                <p>{blackprint.logicOfAccess.boundaryPermeability}</p>
              </article>
            </div>
            <div className="moral-anchor">
              <p className="eyebrow">Moral anchor</p>
              <h3>{blackprint.moralAnchor.name}</h3>
              <p>{blackprint.moralAnchor.text}</p>
            </div>
          </div>
        </section>

        <Section id="playbook" eyebrow="Chapter D · From theory to leverage" title="Asset Keys move the boundary. They do not move people.">
          <p className="lead">An Asset Key intervenes at a specific threshold where access is predictably blocked. Its responsibility ends at access. Once entry is possible, direction belongs to the individual.</p>

          <div className="wedge-flow">
            {blackprint.wedgeToPivot.map((step) => (
              <article key={step.step}>
                <span>{step.step}</span>
                <h3>{step.name}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="principle-head">
            <p className="eyebrow">Asset Key design discipline</p>
            <h3>Shared logic constrains the intervention without prescribing its form.</h3>
          </div>
          <div className="principle-grid">
            {blackprint.assetKeyPrinciples.map((principle, index) => (
              <article key={principle.name}>
                <span>0{index + 1}</span>
                <h3>{principle.name}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <section id="impact-areas" className="impact-section" aria-labelledby="impact-title">
          <div className="section__inner">
            <div className="impact-section__copy">
              <p className="eyebrow eyebrow--gold">Modular domains</p>
              <h2 id="impact-title">Impact Areas are selected for leverage, not symbolic coverage.</h2>
              <p className="lead">{blackprint.impactAreaLogic}</p>
            </div>
            <div className="impact-orbit">
              <div className="impact-orbit__core">
                <span>Logic of Access</span>
                <strong>Boundary permeability</strong>
              </div>
              <div className="impact-orbit__areas">
                {blackprint.impactAreas.map((area, index) => (
                  <div key={area}><span>0{index + 1}</span>{area}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Section id="participation" eyebrow="Participation without coercion" title="Freedom is preserved by just enough structure.">
          <div className="dual-panel">
            <article>
              <p className="eyebrow">Freedom within coherence</p>
              <h3>No ideological entry fee.</h3>
              <p>{blackprint.participation.freedom}</p>
            </article>
            <article>
              <p className="eyebrow">Passing-forward logic</p>
              <h3>Circulation without moral debt.</h3>
              <p>{blackprint.participation.passingForward}</p>
            </article>
          </div>
          <blockquote>
            <p>Contribution is decoupled from receipt. Access does not bind the person who receives it.</p>
          </blockquote>
        </Section>

        <section id="evaluation" className="evaluation-section" aria-labelledby="evaluation-title">
          <div className="section__inner">
            <p className="eyebrow eyebrow--gold">Evaluation as learning, not judgment</p>
            <h2 id="evaluation-title">Did the boundary actually move?</h2>
            <p className="lead">{blackprint.evaluation.core}</p>
            <div className="evaluation-grid">
              <article>
                <p className="eyebrow">BDNA is responsible for</p>
                <ul>
                  {blackprint.evaluation.responsibleFor.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article>
                <p className="eyebrow">BDNA is not responsible for</p>
                <ul>
                  {blackprint.evaluation.notResponsibleFor.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </div>
            <p className="evaluation-note">{blackprint.evaluation.learning}</p>
          </div>
        </section>

        <Section id="stewardship" eyebrow="Long-term logic" title="Stewardship is custodianship, not ownership.">
          <p className="lead">{blackprint.stewardship}</p>
          <div className="stewardship-line">
            <span>Mission</span><b>→</b><span>Logic</span><b>→</b><span>Boundaries</span><b>→</b><span>Learning</span><b>→</b><span>Passing forward</span>
          </div>
        </Section>

        <section id="blackprint" className="blackprint-section" aria-labelledby="blackprint-title">
          <div className="section__inner blackprint-section__inner">
            <div>
              <p className="eyebrow eyebrow--gold">Canonical source</p>
              <h2 id="blackprint-title">The Blackprint</h2>
            </div>
            <div>
              <p className="lead">{blackprint.sourceNote}</p>
              <p className="source-meta">{blackprint.identity.source}</p>
              <p className="source-meta">Working source architecture · public interface v0.2</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand">
          <strong>BDNA Legacy</strong>
          <span>{blackprint.identity.descriptor}</span>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}
