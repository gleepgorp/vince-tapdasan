import React from 'react'
import TitleHeader from '../components/atoms/TitleHeader'

export default function Works() {
  return (
    <div className="h-svh flex items-center">
      <div className="flex flex-col gap-4">
        <TitleHeader content='My Works'/>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem natus velit nesciunt possimus aspernatur architecto, a accusamus laudantium ex maxime, recusandae sed consectetur aliquid voluptas deleniti voluptates nulla odio.</span>
      </div>
    </div>
  )
}

