import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { keepPreviousData, QueryClient } from '@tanstack/react-query'
import { Routes } from '@generouted/react-router'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: keepPreviousData,
      retry: false,
      gcTime: Infinity,
      refetchOnWindowFocus: false,
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
    <ReactQueryDevtools initialIsOpen={false} />
  </PersistQueryClientProvider>,
  // </React.StrictMode>,
)
