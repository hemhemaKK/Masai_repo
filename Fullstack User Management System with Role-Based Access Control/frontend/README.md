---

## 📌 Frontend README (`frontend/README.md`)

```markdown
# 🎨 Resource Management System – Frontend

## 📖 Overview
This is the **frontend** for the Resource Management System.  
It allows users to login, view resources, and admins to manage resources.

---

## ✨ Features
- User Authentication (Login with JWT)
- Role-based UI (Admin Dashboard, User Dashboard)
- Resource Management (View, Add, Delete)
- Responsive UI with inline CSS
- API integration with backend

---

## 🛠 Tech Stack
- **Frontend:** React (Vite)
- **Routing:** React Router DOM
- **State Management:** React Hooks + LocalStorage
- **HTTP Client:** Axios
- **Deployment:** Netlify / Vercel

---

## 📂 Folder Structure
frontend/
│── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Login, Dashboard, etc.
│ ├── App.jsx # Routes
│ └── main.jsx # Entry point
│
├── package.json
└── README.md

---

## ⚙️ Setup Instructions
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/resource-management-frontend.git
   cd frontend
Install dependencies:

npm install

Update API base URL in Axios (inside src/api.js or directly in components):

axios.defaults.baseURL = "https://your-backend.onrender.com/api";
Start the app:

npm run dev
