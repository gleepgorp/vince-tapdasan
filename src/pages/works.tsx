import React from 'react'
import TitleHeader from '../components/atoms/TitleHeader'
import TitleHeaderLayout from '../components/atoms/TitleHeaderLayout'
import ProjectCard from '../components/atoms/ProjectCard'
import HorizontalLine from '../components/atoms/HorizontalLine'

export default function Works() {
  return (
    <div id='works' className="h-full gap-6 lg:gap-10 flex flex-col justify-center py-24 w-full max-w-[1024px]">
      <TitleHeaderLayout>
        <TitleHeader content={`Some things I've built`}/>
        <HorizontalLine />
      </TitleHeaderLayout>  
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

