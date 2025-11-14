import { User, NewUser } from '@/types/userTypes';
import { v4 as uuidv4 } from 'uuid';

export let users: User[] = [];

export const findUserById = (id: string): User | undefined => users.find((user) => user.id === id);

export const addUser = (data: NewUser): User => {
  const newUser: User = { id: uuidv4(), ...data };
  users.push(newUser);
  return newUser;
};

export const updateUserData = (id: string, data: NewUser): User => {
  const index = users.findIndex((user) => user.id === id);
  const updatedUser: User = { id, ...data };
  users[index] = updatedUser;
  return updatedUser;
};

export const deleteUserById = (id: string): void => {
  users = users.filter((user) => user.id !== id);
};
