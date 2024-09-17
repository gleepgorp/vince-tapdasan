//import { useRef } from "react";
import AboutMe from "./pages/aboutMe";
import Home from "./pages/home";
import MainLayout from "./layout/MainLayout";
import Works from "./pages/works";
import Contact from "./pages/contact";
import Footer from "./components/organisms/Footer";

export default function Index(): JSX.Element {
  //const aboutMeRef = useRef<HTMLDivElement>(null);

  return (
    <MainLayout>
      <Home />
      <AboutMe />
      <Works />
      <Contact />
      <Footer />
    </MainLayout>
  )
}