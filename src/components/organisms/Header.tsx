import { RxHamburgerMenu } from "react-icons/rx";
import SmallScreenMenu from "../molecules/SmallScreenMenu";
import { useHeaderMenuContext } from "../../context/HeaderMenuContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import HeaderMenu from "../atoms/HeaderMenu";

export default function Header(): JSX.Element {
  const { setIsOpen } = useHeaderMenuContext();
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  
  function handleOpenMenu() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex flex-row items-center gap-2 h-24 px-8 sm:px-14 fixed w-full z-50 backdrop-blur-lg bg-blu/80">
        <div className="flex flex-row justify-between items-center w-full">
          <a href="/">
            <div className="w-11 h-11 flex justify-center items-center rounded-full">
                <img src="/assets/vins-logo.svg" alt="vins-logo"/>
            </div>
          </a>
          {!isLargeScreen ?
            <button onClick={handleOpenMenu} className="cursor-pointer relative active:bg-sky-200/60">
              <div className="absolute -top-7 -right-5 p-4 rounded-full">
                <RxHamburgerMenu className="text-2xl text-stone-200"/>
              </div>
            </button>
            : 
            <HeaderMenu />
          }
        </div>
      </div>
      {!isLargeScreen && 
        <SmallScreenMenu />}
    </>
  )
}