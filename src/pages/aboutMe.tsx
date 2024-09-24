import Pill from "../components/atoms/Pill"
import TitleHeader from "../components/atoms/TitleHeader"
import { ImUser } from "react-icons/im";
import { useMediaQuery } from "../hooks/useMediaQuery";
import HorizontalLine from "../components/atoms/HorizontalLine";
import TitleHeaderLayout from "../components/atoms/TitleHeaderLayout";

export default function AboutMe(): JSX.Element {
  const isLargeScreen = useMediaQuery('(min-width: 768px) and (max-width: 980px)');

  const techStackPills = [
    { tech: <Pill content="Typescript"/>  },
    { tech: <Pill content="NextJS"/>  },
    { tech: <Pill content="Firebase"/> },
    { tech: <Pill content="TailwindCSS"/> },
    { tech: <Pill content="NestJS"/> }
  ]

  const mapped = techStackPills.map((pill, index) => {
    return (
      <div key={index}>
        <span>{pill.tech}</span>
      </div>
    )
  })

  return (
    <section id="about" className="h-full max-[425px]:mb-24 min-[1860px]:mx-72 py-24 max-w-[920px]">
      <div className="h-full flex flex-col gap-10 justify-center">
        <TitleHeaderLayout isAboutMe={true}>
          <TitleHeader content="About me"/> 
          <HorizontalLine />
        </TitleHeaderLayout>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-sky-200/80">I didn't initially plan to become a Software Developer—my long-term goal was to pursue <strong>Graphic Design</strong> because designing is what interests me the most. </p>
            <p className="text-sky-200/80">Fast forward to my first year in university, during the first semester, we were given a task to create our own website using <strong>HTML and CSS</strong>, and that’s when everything clicked. I realized that I could also design, create layouts, and express my creativity, all by typing some code. I instantly fell in love with it, and that’s where my interest in web development began to grow.</p>
            {!isLargeScreen && 
              <div className="flex flex-col gap-2 lg:mt-6 xl:mt-8">
                <p>My current tech stack:</p>
                <div className="flex flex-row flex-wrap gap-2.5">{mapped}</div>
              </div>
            }
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-center">
              <div className="bg-sky-200/30 p-1.5 rounded-lg">
                <ImUser className="w-44 h-44 lg:w-52 lg:h-52 xl:w-72 xl:h-72 fill-slate-300/60"/>
              </div>
            </div>
            {isLargeScreen && 
              <div className="flex flex-col gap-2 lg:mt-6 xl:mt-8">
                <p>My current tech stack:</p>
                <div className="flex flex-row flex-wrap gap-2.5">{mapped}</div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}