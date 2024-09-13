// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from ".";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
      </Routes>
    </BrowserRouter>
  )
}