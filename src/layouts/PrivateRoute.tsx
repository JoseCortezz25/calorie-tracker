import { useRouter } from 'next/router';
import React, { ReactNode, useContext, useEffect } from 'react'
import AuthContext from '../contexts/AuthContext';
import { IUser, useUser } from '../hooks/useUser';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { currentUser }  = useContext(AuthContext);
  const user: IUser | null = currentUser();

  console.log("🚀 ~ file: PrivateRoute.tsx:8 ~ PrivateRoute ~ user:", user)
  const privateRoutes: string[] = ['/register', '/dashboard']
  useEffect(() => {
    if (!user.authToken && privateRoutes.includes(router.pathname)) {
      router.replace('/')
    }
  }, [])
  

  return <>{children}</>;

}

export { PrivateRoute }