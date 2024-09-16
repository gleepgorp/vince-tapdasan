import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Pill from './Pill';

export default function ProjectCard() {
  return (
    <div className='w-full bg-slate-600/15 rounded-lg'>
      <div className='p-4 md:py-5 md:px-6 flex flex-col'>
        <span className='text-xl font-bold'>Chsms</span>
        <div className='flex flex-col justify-between gap-6'>
          <span className='text-sm'>A real time web chat application</span>
        </div>
      </div>
      <div className='bg-soft-blu h-52 md:h-60 xl:h-96 w-full'></div>
      <div className='flex flex-col'>
        <div className='p-4 md:py-6 md:px-6 text-xs flex flex-wrap gap-2'>
          <Pill content='Typescript'/>
          <Pill content='NextJS'/>
          <Pill content='Firebase'/>
          <Pill content='TailwindCSS'/>
          <Pill content='NestJS'/>
        </div>
        <div className='py-4 px-4 md:px-6 border-t border-sky-300/20'>
          <div className='flex justify-between items-center'>
            <FaGithub className='text-xl fill-sky-100'/>
            <span className='cursor-pointer p-2 bg-sky-500/20 text-xs rounded-lg hover:bg-sky-600/20'>Learn more</span>
          </div>
        </div>
      </div>
    </div>
  )
}

