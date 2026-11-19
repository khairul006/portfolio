// The UI fragments are the kit's own markup (assets/ui/<name>/fragment.html) with the words rewritten;
// they stay HTML strings so ui.js can animate them exactly as written.
const tick = '<svg class="ui-term__tick" viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg>'
const testFile = (path: string, n: string, t: string) =>
  `<div class="ui-term__ln ui-term__log" data-term-out data-term-step>${tick}<span class="ui-term__path">${path}</span><span class="ui-term__n">${n}</span><span class="ui-term__t">${t}</span></div>`

const terminal = `
<div class="ui ui-panel ui-term" data-ui="terminal-run">
  <div class="ui-term__head">
    <span class="ui-dots" aria-hidden="true"><i></i><i></i><i></i></span>
    <span class="ui-term__title">teras/anpr-payment</span>
    <span class="ui-meta">bash</span>
    <span class="ui-spacer"></span>
    <span class="ui-chip ui-chip--plain ui-term__branch">develop</span>
  </div>
  <div class="ui-term__screen" data-term-screen>
    <div class="ui-term__track" data-term-track>
      <div class="ui-term__ln ui-term__cmd"><span class="ui-term__cwd">~/<span class="ui-term__up">teras/</span>anpr-payment</span><span class="ui-term__sig">$</span><span class="ui-term__typed" data-term-cmd>dotnet test</span></div>
      <div class="ui-term__ln ui-term__meter" data-term-out data-term-meter><span class="ui-term__bar" style="--p:1"><i></i></span><span class="ui-term__count" data-term-count>4 of 4 files</span></div>
      ${testFile('MaybankClientTests.cs', '18 tests', '412ms')}
      ${testFile('JwsSignerTests.cs', '12 tests', '230ms')}
      ${testFile('RetryPolicyTests.cs', '9 tests', '188ms')}
      ${testFile('TxnRepositoryTests.cs', '14 tests', '506ms')}
      <div class="ui-term__ln ui-term__gap" data-term-out aria-hidden="true"></div>
      <div class="ui-term__ln ui-term__sum" data-term-out><span class="ui-term__key">Test files</span><span class="ui-term__val">4 passed</span><span class="ui-term__dim">(4)</span></div>
      <div class="ui-term__ln ui-term__sum" data-term-out><span class="ui-term__key">Tests</span><span class="ui-term__val">53 passed</span><span class="ui-term__dim">(53)</span></div>
      <div class="ui-term__ln ui-term__done" data-term-out data-term-done><span class="ui-term__ok"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4.5 8.3 2.4 2.4 4.6-5"/></svg></span><b>Done</b><span class="ui-term__dim">in 1.34s</span></div>
      <div class="ui-term__ln ui-term__cmd" data-term-next><span class="ui-term__cwd">~/<span class="ui-term__up">teras/</span>anpr-payment</span><span class="ui-term__sig">$</span><span class="ui-term__typed"></span><i class="ui-term__caret" aria-hidden="true"></i></div>
    </div>
  </div>
</div>`

const okIcon = '<span class="ui-note__ico"><svg class="ui-icon" viewBox="0 0 16 16"><path d="m3.5 8.4 2.8 2.8 6.2-6.4"/></svg></span>'
const note = (title: string, time: string, body: string) =>
  `<li class="ui-note">${okIcon}<span class="ui-note__text"><span class="ui-note__title">${title}<time>${time}</time></span><span class="ui-note__body">${body}</span></span></li>`

const notify = `
<div class="ui ui-notify" data-ui="notify">
  <ul class="ui-notify__list" data-notify-list>
    ${note('Monthly report ready', 'now', 'E-invoice summary, all plazas')}
    ${note('Partition attached', '2m', 'toll_txn_2026_11, 30 days')}
    ${note('Index rebuilt', '9m', 'e_invoice (plaza_id, issued_at)')}
  </ul>
</div>`

const checkBox = '<span class="ui-check__box"><svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5"/></svg></span>'
const check = (label: string, done: boolean) =>
  `<li class="ui-check${done ? ' is-done' : ''}">${checkBox}<span class="ui-check__label">${label}</span></li>`

const checklist = `
<div class="ui ui-panel ui-checks" data-ui="checklist">
  <div class="ui-checks__head">
    <div class="ui-title">Release 2.14 deploy</div>
    <span class="ui-spacer"></span>
    <div class="ui-meta" data-checks-count>2 of 5</div>
  </div>
  <div class="ui-checks__bar"><i data-checks-bar style="--k:0.4"></i></div>
  <ul class="ui-checks__list">
    ${check('Jenkins build and xUnit run', true)}
    ${check('Docker image pushed', true)}
    ${check('Ansible playbook on 4 servers', false)}
    ${check('Stored procedures applied', false)}
    ${check('Container App revision live', false)}
  </ul>
</div>`

const lanes = {
  layout: 'lanes',
  alt: 'An ANPR gantry sends a toll transaction to RabbitMQ, which routes it to Maybank, JustGO and a PostgreSQL ledger.',
  curve: 'curve',
  input: { label: 'ANPR', icon: 'ui:cctv', meta: 'gantry' },
  core: { label: 'RabbitMQ', icon: 'rabbitmq' },
  lanes: [
    { label: 'Maybank', icon: 'ui:landmark', meta: 'JWS + JWE', done: true },
    { label: 'JustGO', icon: 'ui:wallet', meta: 'REST', done: true },
    { label: 'Ledger', icon: 'postgres', meta: 'PostgreSQL', done: true },
  ],
}

export default function Work() {
  return (
    <section className="section g2" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="group">
          <div className="section-head">
            <h2 id="work-h">Work at TERAS Teknologi. <span className="muted">Payments, reporting, tests and releases.</span></h2>
          </div>
          <div className="grid">
            <article className="card card--row card--open span-6 m-nolift">
              <h3>Connects toll payments to banks</h3>
              <p>Plate reads become payments over RabbitMQ, signed with JWS and sealed with JWE.</p>
              <div className="panel"><div className="dg" data-diagram={JSON.stringify(lanes)}></div></div>
            </article>
            <article className="card card--row card--open span-6 m-nolift">
              <h3>Tunes e-invoice reporting</h3>
              <p>Angular dashboards over high-volume toll data, backed by PostgreSQL partitions, indexes and stored procedures.</p>
              <div className="panel">
                <div className="stage stage--fade-b">
                  <div className="at-rise fit" style={{ '--fit-max': '380px', '--ay': 'calc(100% - 180px)', '--ay-sm': 'calc(100% - 180px)' } as React.CSSProperties} data-ui-still dangerouslySetInnerHTML={{ __html: notify }} />
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="grid">
          <article className="card card--row card--open span-6 m-nolift">
            <h3>Tests every service with xUnit</h3>
            <p>Business logic in each worker and API gets xUnit and Moq tests before it reaches a server.</p>
            <div className="panel">
              <div className="stage">
                <div className="at-rise fit" style={{ '--fit-max': '440px', '--ax': 'max(32px, 50% - 220px)', '--ay': '36px', '--ay-sm': '20px' } as React.CSSProperties} data-ui-loop dangerouslySetInnerHTML={{ __html: terminal }} />
              </div>
            </div>
          </article>
          <article className="card card--row card--open span-6 m-nolift">
            <h3>Ships to Azure and on-premises</h3>
            <p>Jenkins, Ansible and Docker roll releases to on-premises servers and Azure Container Apps.</p>
            <div className="panel">
              <div className="stage stage--fade-b">
                <div className="at-rise fit" style={{ '--fit-max': '380px', '--ay': '48px', '--ay-sm': '20px' } as React.CSSProperties} data-ui-still dangerouslySetInnerHTML={{ __html: checklist }} />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
