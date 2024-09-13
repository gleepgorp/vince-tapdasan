import { SiTypescript, SiJavascript } from "react-icons/si";
import { RiNextjsFill, RiFirebaseFill, RiTailwindCssFill, RiReactjsFill, RiHtml5Fill, RiCss3Fill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { useEffect } from "react";
import { addAnimation } from "../../utils/addAnimation.util";
import { Link } from "react-router-dom";

export default function Marquee() {
  useEffect(() => {
    addAnimation();
  }, [])

  const marquee = [
    { title: 'Typescript', icon: <SiTypescript className="fill-[#377CC8]"/>, link: 'https://www.typescriptlang.org/' },
    { title: 'NextJS', icon: <RiNextjsFill />, link: 'https://nextjs.org/' },
    { title: 'Firebase', icon: <RiFirebaseFill className="fill-amber-500"/>, link: 'https://firebase.google.com/docs' },
    { title: 'TailwindCSS', icon: <RiTailwindCssFill className="fill-[#3EBFF8]"/>, link: 'https://tailwindcss.com/' },
    { title: 'React', icon: <RiReactjsFill className="fill-[#66DBFB]"/>, link: 'https://react.dev/' },
    { title: 'HTML', icon: <RiHtml5Fill className="fill-[#E4552D]"/>, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { title: 'CSS', icon: <RiCss3Fill className="fill-[#2D53E5]"/>, link: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' },
    { title: 'NestJS', icon: <SiNestjs className="fill-[#E12A54]"/>, link: 'https://nestjs.com/' },
    { title: 'Javascript', icon: <SiJavascript className="fill-yellow-400"/>, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  ]

  const mappedMarquee = marquee.map((item, index) => {
    return (
      <Link
        to={item.link} 
        target="_blank" 
        key={index} 
        className="text-sm flex flex-row items-center gap-2.5 bg-soft-blu/30 px-4 py-2 rounded-full cursor-pointer hover:bg-soft-blu/20"
      >
        <span className={`text-xl`}>{item.icon}</span> {item.title}
      </Link>
    )
  })

  return (
    <div className="scroller text-stone-200 font-semibold p-2 max-w-60 xs:max-w-[324px] md:max-w-[524px] lg:max-w-[624px] overflow-hidden">
      <ul className="scroller-inner flex flex-row gap-4">
        {mappedMarquee}
      </ul>
    </div>
  )
}

