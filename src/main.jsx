import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
    {/* https://resturant-management-server-side.vercel.app */}
    {/* https://resturant-management-server-side.vercel.app */}
  </StrictMode>,
)
