import { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import { works, worksEnum } from '../constants/works'
import ProjectShowcaseLayout from '../components/atoms/ProjectShowcaseLayout'
import { retainScroll } from '../utils/retainScrollPosition'
import Pill from '../components/atoms/Pill'

export default function Chsms() {

  useEffect(() => {
    retainScroll();
  }, [])

  const chsmsStack = works.find(item => item.id === 1);
  const chsms = chsmsStack?.techstack.map((item, index) => {
    return (
      <div key={index}>
        <Pill content={item} mainPage={false}/>
      </div>
    )
  });

  const whatIDid = ["• Frontend development", "• Backend development", "• UI/UX Design"];
  const chsmsDemos = [
    "/assets/demos/chsms/chsms-1.avif",
    "/assets/demos/chsms/chsms-2.avif",
    "/assets/demos/chsms/chsms-3.avif",
  ];

  return (
    <MainLayout>
      <ProjectShowcaseLayout 
        demoTitle='Chsms!'
        demoImages={chsmsDemos}
        whatIDid={whatIDid}
        techStack={chsms}
        title={worksEnum.Chsms}
        description={worksEnum.DescChsms}
        imgURL={worksEnum.ImgChsms}
        imgAlt={worksEnum.chsmsAlt}
      />
    </MainLayout>
  ) 
}

