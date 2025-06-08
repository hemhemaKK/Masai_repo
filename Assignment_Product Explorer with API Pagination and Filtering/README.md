# Product Explorer Web App

A dynamic and responsive web application to browse, filter, sort, search, and paginate through products using the [Fake Store API](https://fakestoreapi.com/products).

## Demo link
link: `https://legendary-squirrel-b59472.netlify.app/`

## Objective

To build a fully functional Product Explorer that teaches how to:
- Handle API requests
- Implement pagination, sorting, and filtering

---

##  Features

###  Fetch & Display Products
- Retrieves product list from `https://fakestoreapi.com/products`
- Displays:
  - Product image
  - Title
  - Price
  - Category
- Products shown in **4x2 grid** (8 per page)

###  Pagination
- **Next** and **Previous** buttons
- Current page indicator
- Dynamic logic to load 8 products per page

### 🔃 Sorting
- Dropdown menu:
  - Price: Low to High
  - Price: High to Low
  - Title: A to Z
- Works smoothly with filtering and pagination

### 🧰 Filtering
- Filter by category:
  - `electronics`
  - `jewelery`
  - `men's clothing`
  - `women's clothing`
- Combined with sorting and pagination for full control

### 🔍 Search 
- Search bar to filter products by title
- Debounced input (1 second delay after typing)

### 🎨 Styling
- Responsive and clean UI
- 4x2 product grid layout

---

## 🛠️ Tech Stack

- HTML, CSS, JavaScript
- Fetch API
- Responsive layout with Flexbox/Grid

