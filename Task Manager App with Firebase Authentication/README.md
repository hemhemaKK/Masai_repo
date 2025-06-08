# Task Manager Web App

## Overview
This is a simple Task Manager Web Application that allows users to **Sign Up**, **Login**, and manage their personal tasks (Create, Read, Update, Delete) using **Firebase Authentication** and HTTP methods (`fetch()`). The app supports user authentication, task CRUD operations, and basic authorization.

---
## Live demo
link - (https://spiffy-kelpie-5fb12d.netlify.app/)

---

## Features

- **User Authentication:**
  - Sign Up and Login with email & password using Firebase Authentication.
  - Store user info (UID/token) on login.
  - Logout functionality.

- **Task Management (after login):**
  - Add new tasks (title, description).
  - View tasks created by the logged-in user.
  - Edit tasks.
  - Delete tasks.
  - Uses HTTP methods (`POST`, `GET`, `PATCH`, `DELETE`) via `fetch()` to firebasedatabase JSON server.

- **Authorization:**
  - Only logged-in users can access the Task Manager page.
  - Redirect unauthorized users to login.
  - 
---

## Tech Stack

- HTML, CSS, JavaScript
- Firebase Authentication (Email/Password)
- Fetch API for backend communication
- Mock API (firebase api project name called taskmanagement)

---


