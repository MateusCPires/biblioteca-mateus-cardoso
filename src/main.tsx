import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Atv1 from '../src/atv/Atv1.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Atv1 />
  </StrictMode>,
)
