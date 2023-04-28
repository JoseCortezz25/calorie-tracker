
import { ReactNode, createContext } from 'react';
import { IUser } from '../hooks/useUser';
import { useAuth } from '../hooks/useAuth';

interface AuthContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  removeUser: () => void
}

const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
  removeUser: () => {}
});


export function AuthContextProvider ({ children }: {children: ReactNode}) {
  const { user, login, logout } = useAuth();
  
  const setUser = (user: IUser) => {
    console.log('AuthContextProvider setUser', user);
    login(user)
  }
  
  const removeUser = () => {
    console.log('AuthContextProvider user', user);
    logout()

  }
  return <AuthContext.Provider value={{ user, setUser, removeUser } as AuthContext}>{children}</AuthContext.Provider>
}

export default AuthContext;