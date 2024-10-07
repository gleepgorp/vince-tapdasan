
type ProductDemoInages = {
  images: string[];
  title: string;
}

export default function ProductDemoInages(props: ProductDemoInages) {
  const { images, title } = props;

  const imagesMapped = images.map((item, index) => {
    return (
      <div key={index}>
        <img src={item} alt='' className='w-96 sm:w-full object-cover rounded-sm lg:rounded-md xl:rounded-lg'/>
      </div>
    )
  })

  return (
    <div className='px-6 py-4 sm:px-24 md:px-32 lg:px-36 xl:px-96 flex flex-col gap-2.5 lg:gap-6 items-center'>
      <div className='flex items-start w-full'>
        <span className='text-sky-200/80 font-semibold sm:text-xl xl:text-2xl'>{title} demo: </span>
      </div>
      {imagesMapped}
    </div>
  )
}

