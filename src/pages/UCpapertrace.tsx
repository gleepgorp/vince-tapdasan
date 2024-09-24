import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import ProjectShowcaseLayout from '../components/atoms/ProjectShowcaseLayout'
import { worksEnum } from '../constants/works'
import { retainScroll } from '../utils/retainScrollPosition'

export default function UCpapertrace() {

  useEffect(() => {
    retainScroll();
  }, [])

  return (
    <MainLayout>
      <ProjectShowcaseLayout 
        title={worksEnum.PaperTrace}
        description={worksEnum.DescTrace}
        imgURL={worksEnum.ImgPapertrace}
        imgAlt={worksEnum.papertraceAlt}
      />
    </MainLayout>
  )
}

