import { useLocation } from 'react-router-dom';
import { headerMenu } from '../../constants/menus';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import CoolButton from './CoolButton';
import { useHeaderMenuContext } from '../../context/HeaderMenuContext';

export default function HeaderMenu() {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const { setIsOpen } = useHeaderMenuContext();
  const location = useLocation();
  const hash = location.hash;

  const mappedMenu = headerMenu.map((entry, index) => {
    const isResume = entry.link === "#resume";
    const isActive = (route: string) => {
      if (entry.link === route) { return true; }
    }
    const closeMenu = () => {
      setIsOpen(false);
    }

    const title = <span className={`${(isActive(hash) && entry.link !== "#resume") && 'text-sky-500 font-bold py-1.5 px-2.5 rounded-lg bg-sky-800/20'} ${!isResume && 'hover:text-sky-500'}`}>{entry.title}</span>

    return (
      <a 
        key={index} 
        href={entry.link} 
        onClick={closeMenu}
        className="cursor-pointer flex items-center active:scale-95">
          { entry.link === "#resume"
            ? <CoolButton>{title}</CoolButton>
            : <>{title}</>
          }
      </a>
    )
  })

  return (
    <div className={`font-mono ${isLargeScreen ? 'flex flex-row gap-16 text-[15px]' : 'flex flex-col gap-14 items-center justify-center my-16 '}`}>
      {mappedMenu}
    </div>
  )
}

