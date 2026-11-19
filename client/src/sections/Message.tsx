import { asset, contactEndpoint } from '../url'
const contacts = [
  { label: 'Email', icon: 'gmail', text: 'khairulzamidi2000@gmail.com', href: 'mailto:khairulzamidi2000@gmail.com', external: false },
  { label: 'LinkedIn', icon: 'linkedin', text: 'khairul-zamid-006abc', href: 'https://www.linkedin.com/in/khairul-zamid-006abc', external: true },
  { label: 'GitHub', icon: 'github', text: 'khairul006', href: 'https://github.com/khairul006', external: true },
]

// system.js runs this form: checks it on submit, shows each error under its field and posts it as
// FormData to data-endpoint (the .NET API), showing data-sent only after a 2xx answer.
export default function Message() {
  return (
    <section className="section g2m" id="message" aria-labelledby="message-h">
      <div className="wrap">
        <div className="grid grid--top message">
          <div className="span-5 stack-5">
            <h2 id="message-h">Contact me about a backend role.</h2>
            <p className="t-lead">Tell me about the team and the system you run. I reply within two working days.</p>
            <ul className="message__links">
              {contacts.map(c => (
                <li className="ic-row" key={c.label}>
                  <span className="ic-row__main"><span className="ic-row__meta">{c.label}</span><a className="link" href={c.href} {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{c.text}</a></span>
                  <span className="ic-tile ic-tile--48"><img className="ic ic-28" src={asset(`assets/icons/${c.icon}.svg`)} alt="" width="28" height="28" /></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="span-6 start-7 message__panel">
            <form className="form" action="mailto:khairulzamidi2000@gmail.com" method="post" encType="text/plain" data-endpoint={contactEndpoint} data-sent="Your message is in. I reply within two working days." data-failed="The message did not send. Try again, or email me directly." noValidate>
              <div className="field"><label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" type="text" autoComplete="name" required maxLength={100} aria-describedby="f-name-err" />
                <p className="field__error" id="f-name-err" hidden>Write your name.</p></div>
              <div className="field"><label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={200} aria-describedby="f-email-err" />
                <p className="field__error" id="f-email-err" hidden>Write an email address with an @, like name@company.com.</p></div>
              <div className="field field--full"><label htmlFor="f-message">Message</label>
                <textarea id="f-message" name="message" required minLength={10} maxLength={4000} aria-describedby="f-message-err"></textarea>
                <p className="field__error" id="f-message-err" hidden>Write a message of at least 10 characters.</p></div>
              <div className="btn-row"><button className="btn btn--primary" type="submit">Send a message</button></div>
              <p className="form__status" role="status" data-form-status></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
