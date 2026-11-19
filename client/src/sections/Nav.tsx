export const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#path', label: 'Path' },
]

export default function Nav() {
  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <a className="nav__logo" href="#top"><span className="mark" data-mark="dots" aria-hidden="true"></span>Khairul Zamidi</a>
        <nav className="nav__links" aria-label="Main">
          {links.map(l => (
            <div className="nav__item" key={l.href}><a className="nav__link" href={l.href}>{l.label}</a></div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href="#message">Send a message</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </header>
  )
}
