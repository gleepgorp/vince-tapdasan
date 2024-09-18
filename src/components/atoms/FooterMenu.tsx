import React from 'react'
import { footerMenu } from '../../constants/menus';
import { useMediaQuery } from '../../hooks/useMediaQuery';


export default function FooterMenu() {
  const isLargeScreen = useMediaQuery('(min-width: 1440px)');

  const mappedMenu = footerMenu.map((item, index) => {
    return (
      <a title={item.title} href={item.link} target='_blank' key={index} className='p-1.5 active:bg-sky-700/20 active:scale-95 rounded-full cursor-pointer '>
        <item.icon className='social text-sky-500/80 hover:text-sky-300 text-2xl'/>
      </a>
    )
  })

  return (
    <div className={`flex gap-4 sm:gap-6 justify-center w-full ${isLargeScreen ? "flex-col" : "flex-row" }`}>
      {mappedMenu}
    </div>
  )
}

