import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useLocalStorage } from './useLocalStorage';

export interface IUser {
  id: string;
  username: string;
  email: string;
  authToken?: string;
}

export enum StorageKey {
  USER = 'user',
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: IUser) => {
    setUser(user);
    setItem(StorageKey.USER, JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem(StorageKey.USER, '');
  };

  return { user, addUser, removeUser };
};