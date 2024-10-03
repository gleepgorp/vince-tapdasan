import BackButton from "./BackButton";
import FeaturedProject from "./FeaturedProject";
import ProductDemoInages from "./ProductDemoInages";
import TitleHeaderLayout from "./TitleHeaderLayout";
import { ReactNode } from "react";

type ProjectShowcaseLayoutProps = {
  title: string;
  description: string;
  imgURL: string;
  imgAlt: string;
  techStack: ReactNode;
  whatIDid: string[];
  demoImages: string[];
  demoTitle: string;
}

export default function ProjectShowcaseLayout(props: ProjectShowcaseLayoutProps): JSX.Element {
  const { title, description, imgURL, imgAlt, techStack, whatIDid, demoImages, demoTitle } = props;

  const whatIDidMapped = whatIDid.map((item, index) => {
    return (
      <span key={index} className="text-sky-200/60">{item}</span>
    )
  })

  return (
    <div className='w-full h-full my-40'>
      <div className='flex flex-col justify-center gap-4'>
        <div className='pb-8 sm:pb-12 lg:pb-18 justify-start px-6 sm:px-24 md:px-32 lg:px-36 xl:px-96'>
          <BackButton link="/#works"/>
          <TitleHeaderLayout isAboutMe={true}>
            <div className='flex flex-col gap-4 lg:gap-6'>
              <span className='text-4xl lg:text-5xl font-bold'>{title}</span>
              <p className='text-sky-200/80 md:text-lg lg:text-xl md:w-96 lg:w-[824px]'>{description}</p>
              <FeaturedProject isLarge={true}/>
            </div>
          </TitleHeaderLayout>
        </div>
        <img src={imgURL} alt={imgAlt} className='w-full sm:h-[840px] object-cover lg:mb-24 xl:mb-36'/>
        <ProductDemoInages images={demoImages} title={demoTitle}/>
        <section className="px-6 flex flex-col lg:flex-row lg:justify-around gap-6 md:pt-8 sm:px-24 md:px-32 lg:px-36 xl:px-96">
          <div>
            <h1 className="font-mono text-sky-500 text-lg pb-2 md:text-xl">What I did: </h1>
            <div className="md:text-xl flex flex-col gap-2">{whatIDidMapped}</div>
          </div>
          <div>
            <h1 className="font-mono text-sky-500 text-lg pb-2 md:text-xl">Tech-stack: </h1>
            <div className="flex flex-wrap gap-2">{techStack}</div>
          </div>
        </section>
      </div>
    </div>
  ) 
}