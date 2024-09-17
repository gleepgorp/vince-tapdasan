import React from 'react'

type ProjectCardHeaderProps = {
  title: string;
  description: string;
}

export default function ProjectCardHeader(props: ProjectCardHeaderProps) {
  const { title, description } = props;

  return (
    <div className='p-4 md:py-5 md:px-6 flex flex-col'>
      <span className='text-xl font-bold'>{title}</span>
      <div className='flex flex-col justify-between gap-6'>
        <span className='text-sm'>{description}</span>
      </div>
    </div>
  )
}

