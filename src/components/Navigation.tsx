const links = [
  ['why', 'Why'],
  ['infrastructure', 'Infrastructure'],
  ['logic', 'Logic of Access'],
  ['playbook', 'Playbook'],
  ['evaluation', 'Evaluation'],
  ['blackprint', 'Blackprint'],
]

export function Navigation() {
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
      <a className="nav__cta" href="#entry-points">Enter the Blackprint</a>
    </nav>
  )
}
