import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

type BackButtonProps = {
  link: string;
}

export default function BackButton(props: BackButtonProps) {
  const { link } = props;

  return (
    <div className='flex mb-10'>
      <Link to={link} className='py-2 px-3 rounded-full hover:bg-sky-200/30 bg-sky-200/20 flex flex-row items-center gap-2 cursor-pointer group'>
        <IoArrowForward className='rotate-180 text-sky-100 text-xl group-hover:translate-x-[-2px]'/>
        <span className='font-mono'>Back</span>
      </Link>
    </div>
  )
}

