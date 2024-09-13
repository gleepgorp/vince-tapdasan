import { RxHamburgerMenu } from "react-icons/rx";
import SmallScreenMenu from "../molecules/SmallScreenMenu";
import { useHeaderMenuContext } from "../../context/HeaderMenuContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import HeaderMenu from "../atoms/HeaderMenu";

export default function Header(): JSX.Element {
  const { setIsOpen, isOpen } = useHeaderMenuContext();
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  
  function handleOpenMenu() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex flex-row items-center gap-2 h-24 px-8 sm:px-14 fixed w-full z-50 backdrop-blur-lg bg-blu/80">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="w-11 h-11 bg-slate-400 flex justify-center items-center rounded-full">VT</div>
          {!isLargeScreen ?
            <div onClick={handleOpenMenu}>
              <RxHamburgerMenu className="text-2xl text-stone-200"/>
            </div>
            : 
            <HeaderMenu />
          }
        </div>
      </div>
      {isOpen && !isLargeScreen && <SmallScreenMenu />}
    </>
  )
}