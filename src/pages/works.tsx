import TitleHeader from '../components/atoms/TitleHeader'
import TitleHeaderLayout from '../components/atoms/TitleHeaderLayout'
import ProjectCard from '../components/atoms/ProjectCard'
import HorizontalLine from '../components/atoms/HorizontalLine'
import { works } from '../constants/works'
import GraphicWorksSection from '../components/molecules/GraphicWorksSection'

export default function Works() {
  
  const worksMapped = works.map((work, index) => {
    const techstacks = work.techstack?.map(tech => tech);
    return (
      <div key={index}>
        <ProjectCard 
          title={work.title}
          description={work.description}
          img={work.img}
          techstack={techstacks}
          githubLink={work.githubLink}
          link={work.link}
        />
      </div>
    )
  })

  return (
    <section id="works" className="h-full gap-6 lg:gap-10 flex flex-col justify-center py-24 w-full max-w-[1024px]">
      <TitleHeaderLayout isAboutMe={true}>
        <TitleHeader content={`Things I've built`}/>
        <HorizontalLine />
      </TitleHeaderLayout>  
      <div className='grid grid-rows-1 lg:grid-cols-2 gap-6 lg:gap-8'>
        {worksMapped}
      </div>
      <GraphicWorksSection />
    </section>
  )
}

