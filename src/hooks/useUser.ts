import { useLocalStorage } from './useLocalStorage';

export interface IUser {
  id: string;
  username: string;
  email: string;
  authToken: string;
}

export enum StorageKey {
  USER = 'USER',
}

export const useUser = () => {
  const [user, setUser] = useLocalStorage(StorageKey.USER, {});

  const addUser = (user: IUser) => {
    console.log("🚀 ~ file: useUser.ts:19 ~ addUser ~ JSON.stringify(user):", JSON.stringify(user))
    setUser(JSON.stringify(user));
  };

  const removeUser = () => {
    setUser('');
  };

  const getUser = (): IUser | null => {
    const currentUser: IUser | null = user
    return currentUser
  }

  return {
    addUser,
    removeUser,
    user,
    getUser
  };
};