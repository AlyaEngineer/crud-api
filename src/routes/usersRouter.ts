import { IncomingMessage, ServerResponse } from 'http';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/usersController';

export const handleUsersRoute = (
  request: IncomingMessage,
  response: ServerResponse,
  pathname: string,
  method: string,
) => {
  const parts = pathname.split('/');
  const id = parts[3];

  if (method === 'GET' && !id) return getUsers(request, response);
  if (method === 'GET' && id) return getUserById(request, response, id);
  if (method === 'POST') return createUser(request, response);
  if (method === 'PUT' && id) return updateUser(request, response, id);
  if (method === 'DELETE' && id) return deleteUser(request, response, id);

  response.statusCode = 404;
  response.end(JSON.stringify({ message: 'Route not found' }));
};
