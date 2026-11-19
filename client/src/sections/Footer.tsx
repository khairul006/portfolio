import Arrow from './Arrow'
import { links } from './Nav'

export default function Footer() {
  return (
    <footer className="footer closing" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Hiring for .NET and NestJS backend work</h2>
            <p>Based in Petaling Jaya, Selangor.</p>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href="#message">Send a message<Arrow /></a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo" href="#top"><span className="mark" data-mark="dots" aria-hidden="true"></span>Khairul Zamidi</a>
              <p className="footer__lede">C#, NestJS and RabbitMQ services for toll payments.</p>
            </div>
            <div className="span-2 start-9 footer__col"><h3>Pages</h3><ul>
              {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul></div>
            <div className="span-2 start-11 footer__col"><h3>Elsewhere</h3><ul>
              <li><a href="https://www.linkedin.com/in/khairul-zamid-006abc" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/khairul006" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="/resume.pdf" download="Khairul_Zamidi_Resume.pdf">Resume PDF</a></li>
            </ul></div>
          </div>
          <div className="footer__legal">
            <span>&copy; 2026 Khairul Zamidi</span>
            <span>Product names and logos are trademarks of their owners.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
