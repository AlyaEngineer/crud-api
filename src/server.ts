import http from 'http';
import { parse } from 'url';
import { handleUsersRoute } from './routes/usersRouter';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (request, response) => {
  const parsedUrl = parse(request.url || '', true);
  const method = request.method || 'GET';
  const pathname = parsedUrl.pathname || '';

  response.setHeader('Content-Type', 'application/json');

  if (pathname.startsWith('/api/users')) {
    return handleUsersRoute(request, response, pathname, method);
  }

  response.statusCode = 404;
  response.end(JSON.stringify({ message: `Route not found: ${pathname}` }));
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
