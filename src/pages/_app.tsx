import '../styles/globals.css'
import LayoutGeneral from '@layouts/LayoutGeneral'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../contexts/AuthContext'
import { PrivateRoute } from '@layouts/PrivateRoute'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthContextProvider>
      <LayoutGeneral>
        <PrivateRoute>
          <Component {...pageProps} />
        </PrivateRoute>
      </LayoutGeneral>
    </AuthContextProvider>
  )
}
