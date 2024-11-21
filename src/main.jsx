import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/header/Header.jsx'
import Landing from './componentes/landing/Landing.jsx'
import Footer from './componentes/footer/Footer.jsx'
import Skills from './componentes/skills/Skills.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Landing />
    <Skills />
    <Footer />
  </StrictMode>,
)
