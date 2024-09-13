import { ReactNode } from "react"
import Header from "../components/organisms/Header";
import { useHeaderMenuContext } from "../context/HeaderMenuContext";

type MainLayout = {
  children?: ReactNode
}


export default function MainLayout(props: MainLayout): JSX.Element {
  const { children } = props;
  const { isOpen } = useHeaderMenuContext();
  
  return (
    <div className="flex flex-col relative">
      <Header />
      <div className={`${isOpen && 'blur-sm'} px-10 md:px-24 xl:px-48 xl:mx-48`}>{children}</div>
    </div>
  )
}