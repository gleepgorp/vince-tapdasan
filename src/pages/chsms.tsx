import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import { worksEnum } from '../constants/works'
import ProjectShowcaseLayout from '../components/atoms/ProjectShowcaseLayout'
import { retainScroll } from '../utils/retainScrollPosition'

export default function Chsms() {

  useEffect(() => {
    retainScroll();
  }, [])

  return (
    <MainLayout>
      <ProjectShowcaseLayout 
        title={worksEnum.Chsms}
        description={worksEnum.DescChsms}
        imgURL={worksEnum.ImgChsms}
        imgAlt={worksEnum.chsmsAlt}
      />
    </MainLayout>
  ) 
}

