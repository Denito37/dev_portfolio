import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects.jsx'
import Skills from './components/skills.jsx'
import Footer from './components/footer'

export default function Home({ data, dataTwo }) {
  const projects = data.map(project =>{
    return <Projects key={project.id} entry={project} />
  })
  const skills = dataTwo.map( skill => {
    return <Skills key={skill.id} entry={skill} />})

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
export async function getStaticProps(){
    const res = await fetch ('http://localhost:3000/api/hello')
    const data = await res.json()
    const resTwo = await fetch ('http://localhost:3000/api/skills')
    const dataTwo = await resTwo.json()
    return { 
      props: { data, dataTwo} 
    };
}