
import "../style/index.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import App from '../src/App.tsx'


import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <HeroUIProvider>

    <App />
    
    </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/sw.js')
//       .then((reg) => {
//         console.log('[SW] Registered:', reg);
//       })
//       .catch((err) => {
//         console.error('[SW] Registration failed:', err);
//       });
//   });
// }