import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from "next-themes";

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark" >
          {/* El browser router es la configurtacion de react-router-dom para manejar las rutas de la aplicacion */}
          <App />
        </NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
