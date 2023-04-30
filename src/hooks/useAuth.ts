import { useEffect, useState } from 'react';
import { IUser, StorageKey, useUser } from './useUser';
import { useLocalStorage } from './useLocalStorage';

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem(StorageKey.USER);
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user: IUser) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};