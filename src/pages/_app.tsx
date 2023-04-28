import '../styles/globals.css'
import LayoutGeneral from '@layouts/LayoutGeneral'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../contexts/AuthContext'
import { useAuth } from '../hooks/useAuth'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { user } = useAuth();
  const privateRoutes: string[] = ['/register']

  if (!user?.authToken && privateRoutes.includes(router.pathname)) {
    router.replace('/')
  }

  return (
    <AuthContextProvider>
      <LayoutGeneral>
        <Component {...pageProps} />
      </LayoutGeneral>
    </AuthContextProvider>
  )
}
