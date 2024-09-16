import Marquee from "../components/atoms/Marquee";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Home(): JSX.Element {
  const isLargeScreen = useMediaQuery('(min-width: 1860px)');

  return (
    <div className={`h-full flex items-center justify-center ${!isLargeScreen ? '' : 'py-32'}`}>
      <div className="flex flex-col gap-2.5">
        <span className="text-xl md:text-2xl font-mono">Hi, my name is</span>
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">Vince Tapdasan</span>
        <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-strong-blu ${isLargeScreen && 'flex flex-row items-center gap-4'} `}>I design & build things for the <span className="font-mono bg-gradient-to-r from-cyan-700 to-blue-700">{`</web>`}.</span></span>
        <span className="text-sky-200/60 md:text-xl lg:text-2xl">I'm a <strong> Software Developer</strong> and a <strong>Graphic Designer</strong></span>
        <Marquee />
      </div>
    </div>
  )
}