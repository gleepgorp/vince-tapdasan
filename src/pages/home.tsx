import Marquee from "../components/atoms/Marquee";

export default function Home(): JSX.Element {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2.5">
        <span className="text-xl md:text-2xl">Hi, my name is</span>
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">Vince Tapdasan</span>
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-strong-blu">I design & build things for the <span className="font-mono bg-gradient-to-r from-cyan-700 to-blue-700">{`</web>`}.</span></span>
        <span className="text-soft-blu/70 md:text-xl lg:text-2xl">I'm an <strong>aspiring software developer</strong>, looking for work.</span>
        <Marquee />
      </div>
    </div>
  )
}