import React from 'react'
import FooterMenu from '../atoms/FooterMenu'
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function Sidebar() {
  const isLargeScreen = useMediaQuery('(min-width: 1440px)');

  return (
    <>
      {isLargeScreen && 
      <div>
        <div className='fixed top-[13.33%] left-[55px]'>
          <div className='flex flex-col items-center gap-12'>
            <div className='h-36 bg-sky-500/80 w-[1px]'></div>
            <FooterMenu />
          </div>
        </div>
        <div className='fixed bottom-[6.33%] -right-9'>
          <div className='flex flex-col items-center gap-32'>
            <a href='https://mail.google.com/mail/u/0/?fs=1&to=tapdasan.vins@gmail.com&su=&body=&tf=cm' target='_blank' className='rotate-90 text-sky-500/80 hover:text-sky-300 cursor-pointer'>tapdasan.vins@gmail.com</a>
            <div className='h-36 bg-sky-500/80 w-[1px]'></div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

