import React from 'react';
import { PiGithubLogo } from "react-icons/pi";
import Pill from './Pill';
import ProjectCardLayout from './ProjectCardLayout';
import ProjectCardHeader from './ProjectCardHeader';

export default function ProjectCard() {

  return (
    <ProjectCardLayout>
      <ProjectCardHeader 
        title='Chsms' 
        description='A real time web chat application'
      />
      {/* wipe-hover */}
      <div className='lg:h-80 group overflow-hidden bg-sky-800 cursor-pointer'>
        <img src='/assets/chsms-cover.avif' alt='chsms-cover' className='lg:h-80 object-cover opacity-30 group-hover:opacity-100 group-hover:scale-105'/>
      </div>
      <div className='flex flex-col'>
        <div className='p-4 md:py-6 md:px-6 flex flex-wrap gap-2'>
          <Pill content='Typescript'/>
          <Pill content='NextJS'/>
          <Pill content='Firebase'/>
          <Pill content='TailwindCSS'/>
          <Pill content='NestJS'/>
        </div>
        <div className='py-4 px-4 md:px-6 border-t border-sky-300/15'>
          <div className='flex justify-between items-center'>
            <PiGithubLogo className='text-2xl fill-sky-300 cursor-pointer hover:fill-sky-500' title='Github'/>
            <span className='cursor-pointer p-2 bg-sky-500/20 text-xs rounded-lg hover:bg-sky-600/20'>Learn more</span>
          </div>
        </div>
      </div>
    </ProjectCardLayout>
  )
}

