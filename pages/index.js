import Image from 'next/image'
import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects.jsx'
import Skills from './components/skills.jsx'
import Footer from './components/footer'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [entry, setEntry] = useState([]);
  const [skills, setSkills] = useState([])
  
  const fetchData = async() =>{
    const res = await fetch('/api/hello');
    const data = await res.json();
    const projects = data.map(project =>{
      return <Projects key={project.id} entry={project} />
    })
    setEntry(projects)
  }
  const fetchSkills = async() =>{
    const res = await fetch('/api/skills');
    const data = await res.json();
    const ski = data.map( skill => {
        return <Skills key={skill.id} entry={skill} />
    })
    setSkills(ski)
  }
  useEffect(() =>{
    fetchData()
    fetchSkills()
  },[])
  
  return (
    <main className='grid place-content-center'>
        <Header />
        <Hero />
        <h2 className=' p-4 text-center text-3xl font-bold'>
            Projects
          </h2>
          {entry}
          <h2 className=' p-4 text-center text-3xl font-bold'>
            Skills
          </h2>
          <article className=' grid md:grid-cols-2 max-w-5xl justify-items-center'>
            {skills}
          </article>
        <Footer /> 
    </main>
  )
}
