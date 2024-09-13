
export default function Home(): JSX.Element {

  return (
    <div className="h-screen flex items-center">
      <div className="flex flex-col gap-2.5">
        <span className="text-xl md:text-2xl">Hi, my name is</span>
        <span className="text-3xl md:text-5xl lg:text-7xl font-bold">Vince Tapdasan</span>
        <span className="text-3xl md:text-5xl lg:text-7xl font-bold text-soft-blu">I like looking at pixels.</span>
        <span className="text-soft-blu/70 md:text-xl lg:text-2xl">I'm an <strong>aspiring software developer</strong>, looking for work. ;)</span>
      </div>
    </div>
  )
}