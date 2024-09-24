import BackButton from "./BackButton";
import FeaturedProject from "./FeaturedProject";
import TitleHeaderLayout from "./TitleHeaderLayout";

type ProjectShowcaseLayoutProps = {
  title: string;
  description: string;
  imgURL: string;
  imgAlt: string;
}

export default function ProjectShowcaseLayout(props: ProjectShowcaseLayoutProps): JSX.Element {
  const { title, description, imgURL, imgAlt } = props;
  
  return (
    <div className='w-full h-full my-40'>
      <div className='flex flex-col justify-center gap-4'>
        <div className='px-6 sm:px-24 md:px-32 lg:px-36 xl:px-96 pb-8 sm:pb-12 lg:pb-18'>
          <BackButton link="/#works"/>
          <TitleHeaderLayout isAboutMe={true}>
            <div className='flex flex-col gap-4 lg:gap-6'>
              <span className='text-4xl lg:text-5xl font-bold'>{title}</span>
              <p className='text-sky-200/80 md:text-lg lg:text-xl md:w-96 lg:w-[824px]'>{description}</p>
              <FeaturedProject isLarge={true}/>
            </div>
          </TitleHeaderLayout>
        </div>
        <img src={imgURL} alt={imgAlt} className='w-full sm:h-[840px] object-cover'/>
      </div>
    </div>
  ) 
}