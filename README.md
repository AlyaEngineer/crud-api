# <h1 align="center">CRUD API</h1>

## Description

The simple CRUD API for managing users with an in-memory database, supporting create, read, update, and delete operations. Built with Node.js and TypeScript, it handles request validation, error responses, and supports development and production modes. Completed as part of the [Nodejs educational course](https://rs.school/courses/nodejs) of the RS School.

## Install and Run the Application

- Clone the repository from GitHub:

```bash
git clone https://github.com/AlyaEngineer/crud-api.git
```

- Go to the develop-branch:

```bash
git switch develop
```

- Install the dependencies:

```bash
npm install
```

- Create an `.env` file in the root directory of the project. You can use the provided `.env.example` as a template:

```bash
cp .env.example .env
```

- Open the `.env` file and fill in the required environment variables:

```bash
PORT=value_of_port
```

- Start the development server:

```bash
npm run start:dev
```

The application will be available at `http://localhost:4000` or at `http://localhost:3000` if port 4000 is busy.


## API Testing Instructions

To test the CRUD API functionality via the terminal, send HTTP-requests directly from the command line:

- **GET** (to get all users)
```bash
curl -X GET http://localhost:4000/api/users
```

- **GET** (to get user by id)
```bash
curl -X GET http://localhost:4000/api/users/userId
```

- **POST** (to add a new user)
```bash
curl -X POST http://localhost:4000/api/users \
-H "Content-Type: application/json" \
-d '{"username":"Emmaa","age":35,"hobbies":["reading","chess"]}'
```

- **PUT** (to update user's data)
```bash
curl -X PUT http://localhost:4000/api/users/userId \
-H "Content-Type: application/json" \
-d '{"username":"Emma","age":36,"hobbies":["reading","chess","programming"]}'
```

- **DELETE** (to delete a user)
```bash
curl -X DELETE http://localhost:4000/api/users/userId
```

For clarity, you can go to `http://localhost:4000/api/users` in your browser and reload the page after each data update.

You can also use `Postman` or similar rest clients to check the app's functionality.


## Available Scripts

In the project directory, you can run:

- Start the development server:

```bash
npm run start:dev
```

- Build the project for production:

```bash
npm run build
```

- Start the production server:

```bash
npm run start:prod
```

- Run linting:

```bash
npm run lint
```

- Fix linting issues:

```bash
npm run lint:fix
```

- Format code with Prettier:

```bash
npm run format
```
