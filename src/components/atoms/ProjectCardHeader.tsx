import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

type ProjectCardHeaderProps = {
  title: string;
  description: string;
}

export default function ProjectCardHeader(props: ProjectCardHeaderProps) {
  const { title, description } = props;

  return (
    <div className='p-4 md:py-5 md:px-6 flex flex-col gap-3'>
      <span className='text-xl font-bold'>{title}</span>
      <div className='flex flex-row gap-2 items-center relative'>
        <IoMdArrowDropright className='fill-sky-300 absolute -left-2 text-xl'/>
        <span className='text-xs text-sky-500 font-semibold font-mono pl-5'>Featured Project</span>
      </div>
      <div className='flex flex-col justify-between gap-6'>
        <span className='text-sm text-sky-200/70 line-clamp-2'>{description}</span>
      </div>
    </div>
  )
}

