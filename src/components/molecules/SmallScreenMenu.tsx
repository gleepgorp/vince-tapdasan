import { IoCloseOutline } from "react-icons/io5";
import { useHeaderMenuContext } from "../../context/HeaderMenuContext";
import HeaderMenu from "../atoms/HeaderMenu";

export default function SmallScreenMenu() {
  const { setIsOpen, isOpen } = useHeaderMenuContext();
  
  return (
    <div className={`top-0 bottom-0 left-0 right-0 fixed flex justify-end z-50 ${isOpen ? "" : "pointer-events-none" }`}>
      <div className={`h-full drop-shadow-xl bg-blu-2 ${isOpen ? "w-2/3 ease-out duration-200" : "w-0" }`}>
        <div className={`flex flex-row items-center gap-2 h-24 ${isOpen ? "" : "opacity-0"}`}>
          <button onClick={() => { setIsOpen((open) => !open) }} className="flex flex-row justify-end items-center w-full relative">
            <div className={`active:bg-sky-200/60 p-2.5 right-3 sm:right-8 rounded-full absolute ${isOpen ? "" : "rotate-90"}`}>
              <IoCloseOutline className="text-4xl text-stone-200"/>
            </div>
          </button>
        </div>
        <div className={`flex flex-col gap-14 items-center justify-center my-16 ${isOpen ? "" : "opacity-0"}`}>
          <HeaderMenu />
        </div>
      </div>
    </div>
  )
}
