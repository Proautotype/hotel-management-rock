import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { appRoutes } from './router/Routes.ts'
import { ThemeProvider } from './components/theme-provider.tsx'

const baseRouter = createBrowserRouter(appRoutes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey='app-theme'>
      <RouterProvider router={baseRouter} />
    </ThemeProvider>
  </StrictMode>,
)
