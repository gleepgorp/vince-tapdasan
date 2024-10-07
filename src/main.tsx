import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HeaderMenuProvider from './context/HeaderMenuContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderMenuProvider>
      <App />
    </HeaderMenuProvider>
  </StrictMode>,
)
