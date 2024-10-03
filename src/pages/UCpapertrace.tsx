import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import ProjectShowcaseLayout from '../components/atoms/ProjectShowcaseLayout'
import { works, worksEnum } from '../constants/works'
import { retainScroll } from '../utils/retainScrollPosition'
import Pill from '../components/atoms/Pill'

export default function UCpapertrace() {

  useEffect(() => {
    retainScroll();
  }, [])

  const papertraceStack = works.find(item => item.id === 2);
  const papertrace = papertraceStack?.techstack.map((item, index) => {
    return (
      <div key={index}>
        <Pill content={item} mainPage={false}/>
      </div>
    )
  });

  const whatIDid = ["• Frontend development", "• UI/UX Design"];
  const traceDemos = [
    "/assets/demos/papertrace/trace-demo_1.avif",
    "/assets/demos/papertrace/trace-demo_2.avif",
    "/assets/demos/papertrace/trace-demo_3.avif",
    "/assets/demos/papertrace/trace-demo_4.avif",
    "/assets/demos/papertrace/trace-demo_5.avif",
  ];

  return (
    <MainLayout>
      <ProjectShowcaseLayout 
        demoTitle='UC-Papertrace'
        demoImages={traceDemos}
        whatIDid={whatIDid}
        techStack={papertrace}
        title={worksEnum.PaperTrace}
        description={worksEnum.DescTrace}
        imgURL={worksEnum.ImgPapertrace}
        imgAlt={worksEnum.papertraceAlt}
      />
    </MainLayout>
  )
}

