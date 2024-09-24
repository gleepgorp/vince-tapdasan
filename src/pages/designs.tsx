import BackButton from "../components/atoms/BackButton";
import MainLayout from "../layout/MainLayout";
import { designImages } from "../constants/designs";

export default function Designs(): JSX.Element {
  const designs = designImages.map((img, index) => {
    return (
      <div key={index} className="overflow-hidden bg-sky-800/50 group">
        <img loading="lazy" src={img.img} alt={img.alt} className="rounded-md w-full h-full object-cover hover:scale-105 opacity-80 group-hover:opacity-100"/>
      </div>
    )
  })

  return (
    <MainLayout>
      <div className="h-full w-full my-24 lg:my-40">
        <BackButton link="/#works"/>
        <div className="xl:w-3/4 mb-4">
          <span className="text-sky-200/80 lg:text-xl">Here are some of my graphic works dating back from 2018 to 2023. I do illustrations, logos, shirt concept designs, and even brand identity. But I'm putting my focus on software development and do graphic works on the side.</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex flex-col lg:flex-row flex-grow gap-2">
            {designs.slice(0,2)}
          </div>
          <div className="grid lg:grid-cols-3 flex-grow gap-2">
            {designs.slice(6,9)}
          </div>
          <div className="grid lg:grid-cols-2 flex-grow gap-2">
            {designs.slice(2,4)}
          </div>
          <div className="flex flex-col lg:flex-row flex-grow gap-2">
            {designs.slice(4,6)}
          </div>
          <div className="grid lg:grid-cols-4 flex-grow gap-2">
            {designs.slice(9,13)}
          </div>
          <div className="grid lg:grid-cols-2 flex-grow gap-2">
            {designs.slice(13,15)}
          </div>
          <div className="flex flex-col flex-grow gap-2">
            {designs.slice(15,18)}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}