import React from 'react'
import FeaturedProject from './FeaturedProject';

type ProjectCardHeaderProps = {
  title: string;
  description: string;
}

export default function ProjectCardHeader(props: ProjectCardHeaderProps) {
  const { title, description } = props;

  return (
    <div className='p-4 md:py-5 md:px-6 flex flex-col gap-3'>
      <span className='text-xl font-bold'>{title}</span>
      <FeaturedProject />
      <div className='flex flex-col justify-between gap-6'>
        <span className='text-sm text-sky-200/70 line-clamp-2'>{description}</span>
      </div>
    </div>
  )
}

