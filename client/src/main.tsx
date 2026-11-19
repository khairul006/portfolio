import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import App from './App'
import './page.css'

// Render synchronously: the kit scripts after this module in index.html enhance the finished DOM
// (hero entrance, moments, diagrams, form handling).
const root = createRoot(document.getElementById('root')!)
flushSync(() => root.render(<App />))
