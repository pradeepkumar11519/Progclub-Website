import Navbar from '@/components/Navbar'
import { ContextProvider } from '@/context/Context'
import '@/styles/globals.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClientProvider, useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from '@tanstack/react-query'

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      
      <ContextProvider>
     
     
        <Navbar/>
        <Component {...pageProps} />
      </ContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
