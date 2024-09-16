import React from 'react'
import TitleHeader from '../components/atoms/TitleHeader'

export default function Contact() {
  return (
    <div id='contact' className="h-screen my-40 xl:my-60">
      <div className="flex flex-col lg:gap-8 gap-4 justify-center items-center">
        <span className='font-mono lg:text-xl text-lg text-sky-400'>Let's connect!</span>
        <span className='lg:text-6xl text-4xl font-bold text-center'>Get In Touch</span>
        <span className='text-center text-sky-200 font-light lg:text-2xl lg:w-96'>
          Reach out to my email if you're looking for a software developer that aligns your tech stack to mine, and I'll respond to it as soon as possible!
        </span>
      </div>
    </div>
  )
}

