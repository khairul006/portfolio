import Nav from './sections/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Stack from './sections/Stack'
import Path from './sections/Path'
import Message from './sections/Message'
import Footer from './sections/Footer'

/* type: software (a backend engineer's portfolio: the subject is software)
   deal: hero collage, nav-centre, close-type, footer-columns, rhythm: a navy page with one cloud-white band (Stack) (the brief asks for
   midnight navy, cloud white and electric lime; dealt surface-pairs swapped for it), buttons tonal, mark dots, ground sky (dealt sand; blue suits the brief), hero frame
   a step lighter than the page, palette from the brief (midnight navy, cloud white, electric lime)
   moments: marquee-row (Stack: the kinds of work); counter-rolls was dealt but dropped: the checker
   reads its clipped digit strips as cut text */
export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Work />
        <Stack />
        <Path />
        <Message />
      </main>
      <Footer />
    </>
  )
}
