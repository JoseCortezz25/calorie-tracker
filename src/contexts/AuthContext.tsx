
import { ReactNode, createContext, useState } from 'react';
import { IUser, useUser } from '../hooks/useUser';
import { useAuth } from '../hooks/useAuth';

interface IAuthContext {
  currentUser: () => IUser | null;
  login: (user: IUser | null) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  currentUser: () => null,
  login: () => { },
  logout: () => { }
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const { addUser, removeUser, getUser } = useUser()
  const login = (currentUser: IUser) => {
    console.log("🦚 ~ file: AuthContext.tsx:22 ~ login ~ currentUser:", currentUser)
    addUser(currentUser)
  }

  const logout = () => removeUser()

  const currentUser = (): IUser | null  => {
    const user: any = getUser();
    if (user === null || user === '') {
      return null
    }

    const currentUser = typeof getUser() === 'string' 
      ? JSON.parse(user)
      : getUser()  
    
    return currentUser
  }

  return <AuthContext.Provider value={{ login, logout, currentUser } as IAuthContext}>{children}</AuthContext.Provider>
}

export default AuthContext;