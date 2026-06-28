# Task Tracker

A full-stack **Task Tracker** web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). The app supports complete CRUD functionality for managing tasks — create, view, update, delete, and mark tasks as complete or pending — with a responsive UI and real-time updates without page reloads.

🔗 **Live App:** `<add your deployed frontend URL here>`
🔗 **Backend API:** `<add your deployed backend URL here>`
📦 **Repository:** `<add your GitHub repo URL here>`

---

## ✨ Features

- ✅ Create, view, update, and delete tasks (full CRUD)
- ✅ Mark tasks as **Complete** / **Pending**
- ✅ Form validation on task creation/editing
- ✅ Search/filter tasks
- ✅ Toast notifications (via **react-toastify**) on add, update, delete, and complete actions
- ✅ Fully responsive UI
- ✅ Dynamic UI updates without page refresh (REST API + React state)
- ✅ Environment-based configuration (`.env`)
- ✅ Reusable, modular React components

---

## 🛠️ Tech Stack

| Layer        | Technology                              |
|--------------|------------------------------------------|
| Frontend     | React (Vite), Axios, react-toastify       |
| Backend      | Node.js, Express.js                       |
| Database     | MongoDB with Mongoose                     |
| Deployment   | `<e.g. Vercel/Netlify (client) + Render/Railway (server)>` |

---

## 📁 Project Structure

```
task-tracker/
│
├── client/                      
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx     
│   │   │   ├── TaskItem.jsx     
│   │   │   └── TaskList.jsx     
│   │   │
│   │   ├── services/
│   │   │   └── api.js           
│   │   │
│   │   ├── App.jsx              
│   │   └── main.jsx             
│   │
│   └── package.json
│
├── server/                      
│   ├── config/
│   │   └── db.js                
│   │
│   ├── controllers/
│   │   └── taskController.js    
│   │
│   ├── models/
│   │   └── Task.js              
│   │
│   ├── routes/
│   │   └── taskRoutes.js        
│   │
│   ├── .env                     
│   ├── server.js                
│   └── package.json
│
└── README.md
```

---

## 🔌 REST API Endpoints

Base URL: `/api/tasks`

| Method | Endpoint          | Description                          | Body / Params                          |
|--------|--------------------|---------------------------------------|------------------------------------------|
| GET    | `/api/tasks`       | Fetch all tasks (optionally filtered) | Query: `?search=keyword`                |
| POST   | `/api/tasks`       | Create a new task                     | `{ title, description, status }`       |
| PUT    | `/api/tasks/:id`   | Update a task (edit fields or toggle status) | `{ title?, description?, status? }` |
| DELETE | `/api/tasks/:id`   | Delete a task                         | —                                        |

> Adjust the table above if your `taskRoutes.js` / `taskController.js` use different paths, methods, or a separate endpoint for toggling status.

### Sample Task Schema (`models/Task.js`)

```js
{
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
}
```

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- npm

### 1. Clone the repository

```bash
git clone <your-github-repo-url>
cd task-tracker
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
CLIENT_URL=http://localhost:5173
```

Run the server:

```bash
npm start
```

The API will be available at `http://localhost:5000`.

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file inside `client/` (Vite requires the `VITE_` prefix):

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Run the client:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🚀 Deployment

| Part      | Platform              | Link                              |
|-----------|------------------------|------------------------------------|
| Frontend  | `<e.g. Vercel / Netlify>` | `<your-deployed-frontend-url>` |
| Backend   | `<e.g. Render / Railway>` | `<your-deployed-backend-url>`  |
| Database  | MongoDB Atlas          | —                                  |

Make sure to set the same environment variables (`MONGO_URI`, `CLIENT_URL`, `VITE_API_BASE_URL`) on your hosting platform's dashboard, pointing to the deployed URLs instead of `localhost`.

---

## 🧩 Bonus Features Implemented

- 🔍 Task search/filtering
- 🔔 Toast notifications for add, update, delete, and complete actions
- 🧱 Reusable React components (`TaskForm`, `TaskItem`, `TaskList`)
- 🔐 Environment variables for configuration

---

## 👤 Author

**`<Your Name>`**
`<your email / portfolio / LinkedIn — optional>`

---

## 📄 License

This project is open source and available for educational/assignment purposes.
