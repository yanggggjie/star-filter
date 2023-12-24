import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient } from '@tanstack/react-query'
import { Routes } from '@generouted/react-router'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: Infinity,
    },
  },
})
const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    {/*<App />*/}
    <Routes></Routes>
  </PersistQueryClientProvider>,
  // </React.StrictMode>,
)
