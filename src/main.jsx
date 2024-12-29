import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/lib/firebase'
import './global.css'
import App from './App.jsx'

const $root = document.getElementById('🪄');

createRoot($root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
