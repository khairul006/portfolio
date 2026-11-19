import { asset } from '../url'
const facts = [
  'Bachelor of Computer Science, Universiti Putra Malaysia',
  'Axiata Digital Leadership Program, 2024',
  'Malay native, English proficient',
]

const figures = [
  { value: '3.931', label: 'CGPA at Universiti Putra Malaysia' },
  { value: '3+', label: 'years shipping production backends' },
  { value: '4', label: 'certificates, AZ‑204 the latest' },
]

export default function About() {
  return (
    <section className="section g2m" id="about" aria-labelledby="about-h">
      <div className="wrap">
        <div className="grid grid--top about">
          <div className="span-5 about__text">
            <h2 id="about-h">Khairul Zamidi, software engineer in Petaling Jaya.</h2>
            <p className="t-lead">I design, test and run backend services for toll and payment systems at TERAS Teknologi, from the first API contract to production support on Azure and on-premises servers.</p>
            <ul className="about__facts">
              {facts.map(f => <li key={f}>{f}</li>)}
            </ul>
            <a className="link" href="https://www.linkedin.com/in/khairul-zamid-006abc" target="_blank" rel="noreferrer">Read my LinkedIn profile</a>
          </div>
          {/* the portrait and the figures: beside the text on a desktop, the phone's second screen */}
          <div className="about__side span-6 start-7">
            <div className="frame frame--photo about__photo">
              <img className="frame__img" src={asset('khairul.jpg')} alt="Khairul Zamidi smiling with arms crossed, in a black polo shirt" width="800" height="1000" data-source="client" data-subject="portrait of Khairul Zamidi" />
            </div>
            <div className="about__figures">
              {figures.map(f => (
                <div key={f.label}><p className="t-stat">{f.value}</p><p className="t-small">{f.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
