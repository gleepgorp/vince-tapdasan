import { ReactNode } from "react"
import Header from "../components/organisms/Header";
import { useHeaderMenuContext } from "../context/HeaderMenuContext";
import Sidebar from "../components/organisms/Sidebar";
import Footer from "../components/organisms/Footer";

type MainLayout = {
  children?: ReactNode
}


export default function MainLayout(props: MainLayout): JSX.Element {
  const { children } = props;
  const { isOpen } = useHeaderMenuContext();
    
  return (
    <div className="flex flex-col h-screen relative">
      <Header />
      <Sidebar />
      <div className={`${isOpen && 'blur-sm'} px-6 sm:px-24 md:px-32 lg:px-36 xl:px-48 flex flex-col items-center justify-center`}>{children}</div>
      <Footer />
    </div>
  )
}