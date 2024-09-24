import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

type FeaturedProjectProps = {
  isLarge?: boolean;
}

export default function FeaturedProject(props: FeaturedProjectProps) {
  const { isLarge } = props;

  return (
    <div className='flex flex-row gap-2 items-center relative'>
      <IoMdArrowDropright className={`fill-sky-300 absolute -left-2 ${isLarge ? "text-2xl" : "text-xl"}`}/>
      <span className={`${isLarge ? "" : "text-xs"} text-sky-500 font-semibold font-mono pl-5`}>Featured Project</span>
    </div>
  )
}