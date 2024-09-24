// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from ".";
import Chsms from "./pages/chsms";
import UCpapertrace from "./pages/UCpapertrace";
import ErrorPage from "./pages/errorPage";
import Designs from "./pages/designs";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/chsms" element={<Chsms />}/>
        <Route path="/uc-papertrace" element={<UCpapertrace />}/>
        <Route path="/designs" element={<Designs />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}