import { IncomingMessage, ServerResponse } from 'http';
import {
  users,
  findUserById,
  addUser,
  updateUserData,
  deleteUserById,
} from '../models/userDatabase';
import { parseRequestBody, sendResponse } from '../utils/httpHandlers';
import { validate as uuidValidate } from 'uuid';

export const getUsers = (_request: IncomingMessage, response: ServerResponse) => {
  sendResponse(response, 200, users);
};

export const getUserById = (_request: IncomingMessage, response: ServerResponse, id: string) => {
  if (!uuidValidate(id))
    return sendResponse(response, 400, { message: 'Invalid user ID, please check ID' });

  const user = findUserById(id);
  if (!user) return sendResponse(response, 404, { message: 'A user with this ID was not found' });

  sendResponse(response, 200, user);
};

export const createUser = async (request: IncomingMessage, response: ServerResponse) => {
  try {
    const data = await parseRequestBody(request);
    const { username, age, hobbies } = data;

    if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
      return sendResponse(response, 400, { message: 'Invalid user data' });
    }

    const newUser = addUser({ username, age, hobbies });
    sendResponse(response, 201, newUser);
  } catch {
    sendResponse(response, 400, {
      message: 'Cannot read data: the request body is not valid JSON',
    });
  }
};

export const updateUser = async (
  request: IncomingMessage,
  response: ServerResponse,
  id: string,
) => {
  if (!uuidValidate(id))
    return sendResponse(response, 400, { message: 'Invalid user ID, please check ID' });

  const user = findUserById(id);
  if (!user) return sendResponse(response, 404, { message: 'A user with this ID was not found' });

  try {
    const data = await parseRequestBody(request);
    const { username, age, hobbies } = data;

    if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
      return sendResponse(response, 400, { message: 'Invalid user data, please check the data' });
    }

    const updated = updateUserData(id, { username, age, hobbies });
    sendResponse(response, 200, updated);
  } catch {
    sendResponse(response, 400, {
      message: 'Cannot read data: the request body is not valid JSON',
    });
  }
};

export const deleteUser = (_request: IncomingMessage, response: ServerResponse, id: string) => {
  if (!uuidValidate(id))
    return sendResponse(response, 400, {
      message: 'Invalid user ID, check ID and try one more time',
    });

  const user = findUserById(id);
  if (!user) return sendResponse(response, 404, { message: 'User not found or already deleted' });

  deleteUserById(id);
  sendResponse(response, 204, null);
};
