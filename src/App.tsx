import { Navigation } from './components/Navigation'
import { Section } from './components/Section'
import { blackprint } from './content/blackprint'

export default function App() {
  return (
    <>
      <header id="top" className="hero">
        <Navigation />
        <div className="hero__inner">
          <p className="eyebrow">{blackprint.identity.descriptor}</p>
          <h1>{blackprint.identity.name}</h1>
          <p className="hero__lead">{blackprint.mission}</p>
          <p className="hero__question">{blackprint.question}</p>
        </div>
      </header>

      <main>
        <Section id="mission" eyebrow="The mission" title="Access before outcome">
          <p className="lead">{blackprint.missionExpanded}</p>
          <div className="tag-grid">
            {blackprint.distinctions.map((item) => <span key={item}>{item}</span>)}
          </div>
        </Section>

        <Section id="infrastructure" eyebrow="Four integrated components" title="One infrastructure, distinct functions">
          <div className="card-grid">
            {blackprint.components.map((component) => (
              <article className="card" key={component.id}>
                <h3>{component.name}</h3>
                <p>{component.role}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="logic" eyebrow="Conceptual spine" title="The Logic of Access">
          <p className="lead">{blackprint.logicOfAccess.purpose}</p>
          <div className="card-grid card-grid--two">
            <article className="card"><h3>Life-world</h3><p>{blackprint.logicOfAccess.lifeWorld}</p></article>
            <article className="card"><h3>Opportunity Loop</h3><p>{blackprint.logicOfAccess.opportunityLoop}</p></article>
            <article className="card"><h3>Boundary permeability</h3><p>{blackprint.logicOfAccess.boundaryPermeability}</p></article>
            <article className="card"><h3>Life & Opportunity Pivot Map</h3><p>{blackprint.logicOfAccess.pivotMap}</p></article>
          </div>
        </Section>

        <Section id="asset-keys" eyebrow="Operational heart" title="Asset Keys move the boundary">
          <div className="principles">
            {blackprint.assetKeyPrinciples.map((principle) => (
              <article key={principle.name}>
                <h3>{principle.name}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="impact-areas" eyebrow="Modular domains" title="Impact Areas">
          <p className="lead">Impact Areas are domains of life where access is systematically constrained. Each may hold its own goals, Theory of Change and evaluation logic.</p>
          <div className="tag-grid">
            {blackprint.impactAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </Section>

        <Section id="stewardship" eyebrow="Long-term logic" title="Participation without capture">
          <div className="card-grid card-grid--two">
            <article className="card"><h3>Stewardship</h3><p>{blackprint.stewardship}</p></article>
            <article className="card"><h3>Freedom within coherence</h3><p>{blackprint.participation.freedom}</p></article>
            <article className="card"><h3>Passing-forward</h3><p>{blackprint.participation.passingForward}</p></article>
            <article className="card"><h3>Evaluation</h3><p>{blackprint.evaluation}</p></article>
          </div>
        </Section>

        <Section id="blackprint" eyebrow="Canonical source" title="The Blackprint">
          <p className="lead">The site is derived from {blackprint.identity.source}. The Blackprint remains the conceptual authority; this interface translates its layered structure rather than replacing it.</p>
          <p className="source-note">The canonical source document is registered in the repository source registry and maintained outside the application bundle until publication handling is finalised.</p>
        </Section>
      </main>

      <footer className="footer">
        <p>BDNA Legacy — Possibility Infrastructure for Afro-Sweden</p>
      </footer>
    </>
  )
}
