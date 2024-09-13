import { menu } from '../../constants/headerMenu';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export default function HeaderMenu() {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const mappedMenu = menu.map((entry, index) => {
    return (
      <div key={index}>
        <span>{entry.title}</span>
      </div>
    )
  })

  return (
    <div className={`${isLargeScreen ? 'flex flex-row gap-16' : 'flex flex-col gap-14 items-center justify-center my-16 '}`}>
      {mappedMenu}
    </div>
  )
}

