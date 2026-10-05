const links = [
  ['mission', 'Mission'],
  ['infrastructure', 'Infrastructure'],
  ['logic', 'Logic of Access'],
  ['asset-keys', 'Asset Keys'],
  ['impact-areas', 'Impact Areas'],
  ['stewardship', 'Stewardship'],
  ['blackprint', 'The Blackprint'],
]

export function Navigation() {
  return (
    <nav className="nav" aria-label="Primary">
      <a className="nav__brand" href="#top">BDNA Legacy</a>
      <div className="nav__links">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </div>
    </nav>
  )
}
