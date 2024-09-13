import { IoCloseOutline } from "react-icons/io5";
import { useHeaderMenuContext } from "../../context/HeaderMenuContext";
import HeaderMenu from "../atoms/HeaderMenu";

export default function SmallScreenMenu() {
  const { setIsOpen } = useHeaderMenuContext();

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <div className="top-0 bottom-0 left-0 right-0 fixed flex justify-end z-50">
      <div className="h-full w-2/3 sm:w-1/3 drop-shadow-xl bg-blu-2">
        <div className="flex flex-row items-center gap-2 h-24 p-6">
          <div onClick={handleCloseMenu} className="flex flex-row justify-end items-center w-full">
            <IoCloseOutline className="text-4xl text-stone-200"/>
          </div>
        </div>
        <div className="flex flex-col gap-14 items-center justify-center my-16">
          <HeaderMenu />
        </div>
      </div>
    </div>
  )
}
