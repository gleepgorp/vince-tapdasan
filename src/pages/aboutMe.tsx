import Pill from "../components/atoms/Pill"
import TitleHeader from "../components/atoms/TitleHeader"
import { ImUser } from "react-icons/im";

export default function AboutMe(): JSX.Element {
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
    <div className="h-svh max-[425px]:mb-24 min-[1860px]:mx-52 flex items-center">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <TitleHeader content="About me"/> 
          <hr />
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <div className="flex flex-col gap-4 xl:text-lg">
            <p className="text-soft-blu">I wasn't originally to become a Software Developer, it was <strong>Graphic Design</strong> that I wanted to pursue. Fast forward, <strong>1st year in uni</strong>, still bummed that I couldn't get into a school that offers graphic design. </p>
            <p className="text-soft-blu">Teacher gave a project <strong>in Sublime</strong> using <strong>HTML and CSS</strong> and thats when <strong>everything clicked</strong>. I fell in love with it and the rest is history.</p>
            <div className="flex flex-col gap-2 lg:mt-6 xl:mt-8">
              <p>My current tech stack:</p>
              <div className="flex flex-row flex-wrap gap-2.5">{mapped}</div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-center">
              <div className="bg-soft-blu/30 p-1.5 rounded-lg">
                <ImUser className="w-44 h-44 lg:w-52 lg:h-52 xl:w-72 xl:h-72 fill-slate-300/60"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}