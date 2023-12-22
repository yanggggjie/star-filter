import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
import { Routes } from './routes.gen'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    {/*<App />*/}
    <Routes></Routes>
  </QueryClientProvider>,
  // </React.StrictMode>,
)
