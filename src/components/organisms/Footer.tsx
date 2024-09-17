import React from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import FooterMenu from '../atoms/FooterMenu';

export default function Footer() {
  const isLargeScreen = useMediaQuery('(min-width: 1440px)');

  return (
    <div className='flex flex-col gap-10 justify-center items-center w-full mt-16 mb-4 py-4'>
      {!isLargeScreen && <FooterMenu />}
      <span className='text-sky-300/50 text-center text-sm'>Designed by Vince Tapdasan<br></br> built in ReactJS</span>
    </div>
  )
}

