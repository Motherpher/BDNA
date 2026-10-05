import { glossary } from '../content/glossary'

export function ReferenceLayer() {
  return (
    <section id="glossary" className="reference-layer" aria-labelledby="glossary-title">
      <div className="section__inner">
        <div className="reference-layer__intro">
          <p className="eyebrow eyebrow--gold">Reference layer</p>
          <h2 id="glossary-title">Controlled vocabulary, not loose paraphrase.</h2>
          <p className="lead">
            Core BDNA concepts are treated as source-governed objects. Swedish terms are only published here where a source-backed wording exists; otherwise the English term is retained pending an explicit translation decision.
          </p>
        </div>

        <div className="glossary-grid">
          {glossary.map((item) => (
            <article id={`term-${item.slug}`} key={item.slug}>
              <div className="glossary-grid__meta">
                <span>{item.translationStatus}</span>
                <span>{item.source}</span>
              </div>
              <h3>{item.term}</h3>
              {item.swedishLabel && item.swedishLabel !== item.term && <p className="glossary-grid__sv">SV: {item.swedishLabel}</p>}
              <p>{item.definition}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
