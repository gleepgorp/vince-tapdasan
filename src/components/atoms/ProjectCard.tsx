import React from 'react';
import { PiGithubLogo } from "react-icons/pi";
import Pill from './Pill';
import ProjectCardLayout from './ProjectCardLayout';
import ProjectCardHeader from './ProjectCardHeader';

type ProjectCardProps = {
  title: string;
  description: string;
  img: string;
  techstack: string[];
  githubLink: string;
  link: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, img, techstack, githubLink, link } = props;

  const techstackMapped = techstack.map((tech, index) => {
    return (
      <div key={index}>
        <Pill content={tech}/>
      </div>
    )
  })

  return (
    <ProjectCardLayout>
      <ProjectCardHeader 
        title={title} 
        description={description}
      />
      <a href={link}>
        <div className='lg:h-80 group overflow-hidden bg-sky-800 cursor-pointer'>
          <img src={img} alt={title} className='lg:h-80 object-cover opacity-30 group-hover:opacity-100 group-hover:scale-105'/>
        </div>
      </a>
      <div className='flex flex-col'>
        <div className='p-4 md:py-6 md:px-6 w-full flex flex-row gap-2 flex-wrap'>
          {techstackMapped}
        </div>
        <div className='py-4 px-4 md:px-6 border-t border-sky-300/15'>
          <div className='flex justify-between items-center'>
            <a href={githubLink} target='_blank'>
              <PiGithubLogo className='text-2xl fill-sky-300 cursor-pointer hover:fill-sky-500' title='Github'/>
            </a>
            <a href={link} className='text-sky-200 active:scale-95 cursor-pointer p-2 bg-sky-500/20 text-xs rounded-lg hover:bg-sky-600/20'>Learn more</a>
          </div>
        </div>
      </div>
    </ProjectCardLayout>
  )
}

