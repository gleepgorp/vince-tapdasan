import { menu } from '../../constants/headerMenu';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function HeaderMenu() {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const mappedMenu = menu.map((entry, index) => {
    return (
      <a href={entry.link} key={index} className='cursor-pointer'>
        <span>{entry.title}</span>
      </a>
    )
  })

  return (
    <div className={`font-mono ${isLargeScreen ? 'flex flex-row gap-16 text-[15px]' : 'flex flex-col gap-14 items-center justify-center my-16 '}`}>
      {mappedMenu}
    </div>
  )
}

