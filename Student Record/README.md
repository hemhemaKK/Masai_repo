# 🧑‍🎓 Student Dashboard

This is a simple **Student Dashboard** web application built using **HTML**, **CSS**, and **JavaScript**. It interacts with **Firebase Realtime Database** to fetch, edit, and delete student records.

---

## ✨ Features

- 🔄 **Fetch and Display** student records from Firebase
- ✏️ **Edit** student name using a prompt
- ❌ **Delete** a student record with confirmation
- 🎨 Clean and responsive UI with styled tables and buttons

---

## 🛠️ Technologies Used

- HTML
- CSS 
- JavaScript
- Firebase Realtime Database (REST API)

---

## 📦 Firebase Structure

The Firebase Realtime Database should have a `students` node with data structured like:

```json
{
  "student_id_1": {
    "name": "ABC",
    "age": 16,
    "grade": "10th",
    "section": "A",
    "score": 85
  },
  "student_id_2": {
    "name": "XYZ",
    "age": 17,
    "grade": "11th",
    "section": "B",
    "score": 92
  }
}
