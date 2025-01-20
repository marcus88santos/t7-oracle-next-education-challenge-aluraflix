import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import AppRoutes from './routes.jsx'
import { VideosProvider } from './contexts/VideosContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VideosProvider>
      <AppRoutes />
    </VideosProvider>
  </StrictMode>,
)
