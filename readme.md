# Recursive Node Tree - Backend

Backend service for the **Recursive Node Tree** project.  
Handles API requests for creating, reading, and deleting folder nodes, with data stored in MongoDB.

Built with:
- **Node.js** + **TypeScript**
- **Express 5**
- **MongoDB** + **Mongoose**
- **Zod** for request validation
- **CORS** for cross-origin requests
- **Morgan** for request logging
- **Dotenv** for environment configuration

---

## 📦 Features

- REST API for tree node CRUD operations
- Infinite parent-child nesting supported
- Input validation using Zod
- MongoDB persistence via Mongoose
- CORS-enabled for frontend integration
- Dev-friendly logging with Morgan

---
## Getting Started

### clone repo
```
git clone https://github.com/Minhaj199/RNT_B.git
cd RNT_B
```
### Install dependencies
```
npm install
```
### Configure environment variables
```
PORT=
DB_STRING=
CORS_ORIGIN=
```
