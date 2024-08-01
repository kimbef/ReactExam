# Blog System

## Description
A blogging system built with React.js for the frontend and Node.js with MongoDB for the backend. The application allows users to register, login, create, edit, delete, and view blog posts. Public users can view all posts and post details, while authenticated users can create, edit, and delete their posts.

## Technologies Used
- React.js
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- React Router for client-side routing
- CSS for styling

## Features
- Public pages: Home, Login, Register, Post Details
- Private pages: Profile, Create Post, Edit Post
- User authentication (register, login, logout)
- CRUD operations for posts
- Error handling and data validation
- State management with Context API (or React Redux)
- Route guards for private and public routes

## Project Structure
```plaintext
src/
├── components/
├── pages/
├── context/
├── services/
├── App.js
├── index.js
└── ...
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── server.js
└── .env