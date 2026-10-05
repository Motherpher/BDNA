import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow?: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={`${id}-title`}>{title}</h2>
        {children}
      </div>
    </section>
  )
}
