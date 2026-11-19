import { asset } from '../url'
type Step = { year: string; title: string; line: string; mark: string; icon?: string }

const steps: Step[] = [
  { year: '2019', title: 'Started at UPM', line: 'Computer Science on a Yayasan UEM scholarship.', mark: 'Full scholarship' },
  { year: '2021', title: 'Huawei ICT Competition', line: 'Second place at UPM, network track; HCIA certified.', mark: '2nd place', icon: 'huawei' },
  { year: '2023', title: 'Graduated, joined TERAS', line: 'Best student of the Computer Network class.', mark: 'Best student' },
  { year: '2024', title: 'Microsoft AZ-204', line: 'Azure Developer Associate, then Rocheston cybersecurity engineer.', mark: 'AZ-204', icon: 'azure' },
]

export default function Path() {
  return (
    <section className="section" id="path" aria-labelledby="path-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="path-h">Education, awards and certificates since 2019.</h2>
        </div>
        <ol className="grid rail">
          {steps.map((s, i) => (
            <li className={`span-3${i === steps.length - 1 ? ' is-new' : ''}`} key={s.year}>
              <div className="rail__panel">
                {s.icon && <span className="ic-tile ic-tile--56"><img className="ic ic-40" src={asset(`assets/icons/${s.icon}.svg`)} alt="" width="40" height="40" /></span>}
                <span className="rail__mark">{s.mark}</span>
              </div>
              <span className="rail__dot" aria-hidden="true"></span>
              <p className="t-label">{s.year}</p>
              <h3 className="t-card">{s.title}</h3>
              <p>{s.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
