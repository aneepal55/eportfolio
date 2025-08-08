import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Activities />
      <Contact />
    </main>
  );
}
