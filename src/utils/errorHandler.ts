import { ServerResponse } from 'http';

const errorMessage = 'Some internal server error';

export const handleServerError = (response: ServerResponse) => {
  response.statusCode = 500;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ errorMessage }));
};
