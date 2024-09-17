import React, { ReactNode } from 'react'

type ProjectCardLayoutProps = {
  children: ReactNode;
}

export default function ProjectCardLayout(props: ProjectCardLayoutProps) {
  const { children } = props;

  return (
    <div className='w-full bg-slate-600/15 rounded-lg'>
      {children}
    </div>
  )
}

