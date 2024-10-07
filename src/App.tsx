// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from ".";
import Chsms from "./pages/chsms";
import UCpapertrace from "./pages/UCpapertrace";
import ErrorPage from "./pages/errorPage";
import Designs from "./pages/designs";
import Resume from "./pages/resume";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/chsms" element={<Chsms />}/>
        <Route path="/uc-papertrace" element={<UCpapertrace />}/>
        <Route path="/designs" element={<Designs />}/>
        <Route path="*" element={<ErrorPage />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </BrowserRouter>
  )
}