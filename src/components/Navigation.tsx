import type { Language } from '../content/languages'
import { LanguageSwitcher } from './LanguageSwitcher'

const links = [
  ['why', 'Why'],
  ['infrastructure', 'Infrastructure'],
  ['logic', 'Logic of Access'],
  ['playbook', 'Playbook'],
  ['current-work', 'Current work'],
  ['glossary', 'Glossary'],
]

type Props = {
  language: Language
  onLanguageChange: (language: Language) => void
}

export function Navigation({ language, onLanguageChange }: Props) {
  return (
    <nav className="nav" aria-label="Primary">
      <a className="nav__brand" href="#top" aria-label="BDNA Legacy home">
        <span className="nav__mark">BDNA</span>
        <span className="nav__legacy">Legacy</span>
      </a>
      <div className="nav__links">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </div>
      <div className="nav__tools">
        <LanguageSwitcher language={language} onChange={onLanguageChange} />
        <a className="nav__cta" href="#entry-points">Enter the Blackprint</a>
      </div>
    </nav>
  )
}
