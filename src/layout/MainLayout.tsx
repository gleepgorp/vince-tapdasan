import { ReactNode } from "react"
import Header from "../components/organisms/Header";
import { useHeaderMenuContext } from "../context/HeaderMenuContext";
import Sidebar from "../components/organisms/Sidebar";
import Footer from "../components/organisms/Footer";
import { useLocation } from "react-router-dom";

type MainLayout = {
  children?: ReactNode
}


export default function MainLayout(props: MainLayout): JSX.Element {
  const { children } = props;
  const { isOpen } = useHeaderMenuContext();
  const location = useLocation();
  const isChsms = location.pathname.startsWith("/chsms");
  const isPapertrace = location.pathname.startsWith("/uc-papertrace");
    
  return (
    <div className="flex flex-col h-screen relative">
      <Header />
      {isChsms || isPapertrace ? null : <Sidebar />}
      <div className={`${isOpen && 'blur-sm'} ${isChsms || isPapertrace ? "" : "px-6 sm:px-24 md:px-32 lg:px-36 xl:px-48"} flex flex-col items-center justify-center`}>{children}</div>
      <Footer />
    </div>
  )
}