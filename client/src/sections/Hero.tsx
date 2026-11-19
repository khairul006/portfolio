import Arrow from './Arrow'

const queues = [
  { name: 'payment.maybank.request', meta: 'durable · 3 consumers', rate: '12/s', chip: 'Running', tone: '' },
  { name: 'payment.justgo.request', meta: 'durable · 2 consumers', rate: '8/s', chip: 'Running', tone: '' },
  { name: 'payment.retry.30s', meta: 'TTL 30 s · back to request', rate: '2', chip: 'Retrying', tone: 'd-chip--low' },
  { name: 'txn.persist', meta: 'PostgreSQL writer', rate: '20/s', chip: 'Running', tone: '' },
  { name: 'einvoice.submit', meta: 'batch · every 5 min', rate: '41', chip: 'Queued', tone: 'd-chip--low' },
  { name: 'payment.dead-letter', meta: 'manual review', rate: '0', chip: 'Empty', tone: '' },
]

export default function Hero() {
  return (
    <section className="hero hero--collage" data-enter aria-labelledby="hero-h">
      <div className="wrap"><div className="hero-text grid hero__grid">
        <div className="hero__text span-5">
          <h1 id="hero-h">Backend engineer for payment integrations</h1>
          <p className="hero__lead">I build C#/.NET and NestJS services that carry toll payments from ANPR gantries to Maybank and JustGO over RabbitMQ, signed, encrypted and retried.</p>
          <div className="btn-row">
            <a className="btn btn--primary" href="#message">Send a message<Arrow /></a>
            <a className="btn btn--secondary" href="/resume.pdf" download="Khairul_Zamidi_Resume.pdf">Download my resume</a>
          </div>
          <p className="hero__proof">3 years at TERAS Teknologi. Microsoft AZ‑204 certified.</p>
        </div>
        <div className="hero__art span-6 start-7" role="img" aria-label="A RabbitMQ console with payment queues to Maybank and JustGO, and one payment signed, encrypted and acknowledged">
          <div className="ly-piece ly-piece--main d-win d-win--dark" aria-hidden="true">
            <div className="d-win__bar"><span className="d-win__dots"><i></i><i></i><i></i></span><span>RabbitMQ · anpr-payments · production</span></div>
            <div className="d-win__body">
              <div className="d-side">
                <span><i></i>Overview</span><span><i></i>Connections</span><span className="is-on"><i></i>Queues</span><span><i></i>Exchanges</span>
                <span className="d-side__label">Virtual hosts</span><span><i></i>/toll</span><span><i></i>/einvoice</span>
              </div>
              <div className="d-main">
                <div className="d-main__head"><h4>Queues</h4><span className="d-btn">Publish</span></div>
                <div className="d-tabs"><span className="is-on">All 6</span><span>Retrying 1</span><span>Dead letter 0</span></div>
                <div className="d-rows">
                  {queues.map(q => (
                    <div className="d-row" key={q.name}>
                      <span className="d-thumb d-thumb--q"></span>
                      <div><b>{q.name}</b><small>{q.meta}</small></div>
                      <span className="num">{q.rate}</span>
                      <span className={`d-chip ${q.tone}`}>{q.chip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="ly-piece ly-piece--note d-card" aria-hidden="true" data-ly-steps="700">
            <div className="d-card__row"><h5>Toll payment to Maybank</h5><span className="d-chip" data-step data-step-at="4">Settled</span></div>
            <div className="d-note__line" data-step><i>✓</i><span><b>JWS</b> signed, RS256</span></div>
            <div className="d-note__line" data-step><i>✓</i><span><b>JWE</b> sealed, A256GCM</span></div>
            <div className="d-note__line" data-step><i>✓</i><span>Ack stored in <b>PostgreSQL</b></span></div>
          </div>
        </div>
      </div></div>
    </section>
  )
}
