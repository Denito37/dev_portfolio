import Header from '../src/components/header'
import Hero from '../src/components/hero'
import Projects from '../src/components/projects.jsx'
import Skills from '../src/components/skills.jsx'
import Footer from '../src/components/footer'
import projectData from '../src/components/dat/projects.json'
import skillsData from '../src/components/dat/skills.json'

export default function Home() {
  const projects = projectData.map(project =>{
    return <Projects key={project.id} entry={project} />
  })
  const skills = skillsData.map( skill => {
    return <Skills key={skill.id} entry={skill} />
  })

  return (
    <main className='grid place-content-center'>
        <Header />
        <Hero />
        <h2 className=' p-4 text-center text-3xl font-bold'>
            Projects
          </h2>
          {projects}
          <h2 className=' p-4 text-center text-3xl font-bold'>
            Skills
          </h2>
          <article className=' grid md:grid-cols-2 max-w-6xl justify-items-center'>
            {skills}
          </article>
        <Footer /> 
    </main>
  )
}