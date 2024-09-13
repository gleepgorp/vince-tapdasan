import { RxHamburgerMenu } from "react-icons/rx";
import HeaderMenu from "../molecules/HeaderMenu";
import { useHeaderMenuContext } from "../../context/HeaderMenuContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Header(): JSX.Element {
  const { setIsOpen, isOpen } = useHeaderMenuContext();
  const isLargeScreen = useMediaQuery('(min-width: 769px)');
  
  function handleOpenMenu() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex flex-row items-center gap-2 h-24 p-6 fixed w-full z-50 backdrop-blur-lg bg-blu/80">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="w-11 h-11 bg-slate-400 flex justify-center items-center rounded-full">VT</div>
          {!isLargeScreen &&
            <div onClick={handleOpenMenu}>
              <RxHamburgerMenu className="text-4xl text-stone-200"/>
            </div>
          }
        </div>
      </div>
      {isOpen && !isLargeScreen && <HeaderMenu />}
    </>
  )
}