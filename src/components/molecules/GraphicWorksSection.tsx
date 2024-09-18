import React from 'react'
import TitleHeaderLayout from '../atoms/TitleHeaderLayout'
import TitleHeader from '../atoms/TitleHeader'
import HorizontalLine from '../atoms/HorizontalLine'
import CoolButton from '../atoms/CoolButton'
import { IoArrowForward } from "react-icons/io5";

export default function GraphicWorksSection() {
return (
    <div className='flex flex-col lg:gap-10 gap-4 mt-12'>
      <TitleHeaderLayout>
        <TitleHeader content={`Designs I've made`}/>
        <HorizontalLine />
      </TitleHeaderLayout>
      <div className='w-full relative'>
        <div className='mask flex flex-col lg:flex-row gap-2'>
          <div className='mask bg-sky-800 rounded-md flex-auto lg:w-64'>
            <img src='/assets/design-1.avif' alt='Fuyoog logo' className='rounded-md w-full h-60 object-cover opacity-60'/>
          </div>
          <div className='mask  bg-sky-800 rounded-md flex-auto w-2'>
            <img src='/assets/design-2.avif' alt='Shirt design' className='rounded-md max-[1024px]:hidden w-full h-60 object-cover opacity-60'/>
          </div>
        </div>
        <div className='w-48 absolute bottom-2 left-5 lg:left-8 group'>
          <CoolButton>
            <div className='flex flex-row items-center justify-between'>
              View works  
              <IoArrowForward className='text-xl group-hover:translate-x-[4px]'/>
            </div>
          </CoolButton>
        </div>
      </div> 
    </div>
  )
}

