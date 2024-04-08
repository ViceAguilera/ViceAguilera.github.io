import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'

export default function App () {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}
