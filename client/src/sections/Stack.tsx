import { asset } from '../url'
// Icons fetched by the kit's icons.mjs into public/assets/icons, in their owners' colours.
const tools = [
  ['c-sharp', 'C#'], ['dotnet', '.NET'], ['typescript', 'TypeScript'], ['python', 'Python'],
  ['nestjs', 'NestJS'], ['nodejs', 'Node.js'], ['angular', 'Angular'], ['postgres', 'PostgreSQL'],
  ['oracle', 'Oracle'], ['rabbitmq', 'RabbitMQ'], ['redis', 'Redis'], ['docker', 'Docker'],
  ['jenkins', 'Jenkins'], ['ansible', 'Ansible'], ['azure', 'Azure'], ['linux-tux', 'Linux'],
]

const kinds = [
  'Toll payments', 'E-invoicing', 'REST APIs', 'WebSockets', 'Background workers', 'Message queues',
  'JWS signing', 'JWE encryption', 'Table partitioning', 'Stored procedures', 'Multi-server deploys', 'Production support',
]

export default function Stack() {
  return (
    <section className="section ground-inverse" id="stack" aria-labelledby="stack-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="stack-h">The stack behind the work. <span className="muted">Languages, frameworks, data and delivery.</span></h2>
        </div>
        <ul className="ic-grid ic-grid--mosaic stack__grid">
          {tools.map(([id, name]) => (
            <li className="ic-cell" key={id}>
              <span className="ic-tile ic-tile--48"><img className={`ic ic-32${id === 'oracle' ? ' ic-wide' : ''}`} src={asset(`assets/icons/${id}.svg`)} alt="" width="32" height="32" /></span>
              <span className="ic-cell__name">{name}</span>
            </li>
          ))}
        </ul>
        <div className="stack__marquee" data-moment="marquee-row" data-moment-opts='{"speed": 36}'>
          <ul className="mo-mq__track">
            {kinds.map(k => <li key={k}>{k}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
