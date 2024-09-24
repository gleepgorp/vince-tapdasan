//import { useRef } from "react";
import AboutMe from "./pages/aboutMe";
import Home from "./pages/home";
import MainLayout from "./layout/MainLayout";
import Works from "./pages/works";
import Contact from "./pages/contact";
import { useEffect } from "react";

export default function Index(): JSX.Element {
  const hash = window.location.hash;

  useEffect(() => {
    const worksSection = document.getElementById("works");
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    if (hash.startsWith("/")) {
      return;
    } else if (hash.startsWith("#works")) {
      worksSection?.scrollIntoView({ behavior: "smooth" });
    } else if (hash.startsWith("#about")) {
      aboutSection?.scrollIntoView({ behavior: "smooth" });
    } else if (hash.startsWith("#contact")) {
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }

  }, [hash]);

  return (
    <MainLayout>
      <Home />
      <AboutMe />
      <Works />
      <Contact />
    </MainLayout>
  )
}