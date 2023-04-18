import Head from 'next/head'
import Image from 'next/image'
import WF from 'public/wireFrame.svg'
import Header from '../src/components/header'
import Hero from '../src/components/hero'
import Projects from '../src/components/projects.jsx'
import Skills from '../src/components/skills.jsx'
import About from '@/src/components/about'
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
    <>
    <Head>
      <title>Dennes Dev Portfolio</title>
      <meta name="description" content="Front-end web dev portfolio"></meta>
    </Head>
    <main className='grid place-content-center'>
      <Image 
          src={WF} 
          alt='background image ; wireframe wave' 
          priority
          className=' fixed -z-10 bottom-0 md:bottom-[-15%] w-full opacity-40' 
          />
        <Header />
        <Hero />
        <h2 className=' p-4 text-center text-3xl font-medium'>
            Projects
          </h2>
          {projects}
          <h2 className=' p-4 text-center text-3xl font-medium'>
            Skills
          </h2>
          <article className=' grid md:grid-cols-2 max-w-6xl justify-items-center'>
            {skills}
          </article>
          <div className=' max-w-5xl mx-auto grid justify-items-center md:grid-cols-2'>
            <About />
            <Footer /> 
          </div>
    </main>
    </>
  )
}