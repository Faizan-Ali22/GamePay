# 🎮 GamePay — Full-Stack Game Store Website

A modern, premium **Full-Stack Game Store Website** developed using **HTML5, Vanilla CSS3, JavaScript, Node.js (Express.js), and Microsoft SQL Server**. The application is an interactive gaming platform where users can discover trending titles, browse by genre, add games to their cart, register accounts, and check out, while administrators can manage games, user accounts, and customer orders through a dedicated dark-themed Admin Dashboard.

---

## 📌 Overview

GamePay is designed to demonstrate state-of-the-art web design aesthetics (glassmorphism, curated dark-mode color palettes, vibrant gradients, and responsive layouts) combined with robust full-stack backend architecture. 

It provides seamless integration between a frontend storefront and an Express + Microsoft SQL Server RESTful API, with built-in **Offline Fallback Protection** so the storefront remains interactive even when disconnected from the database.

---

## ✨ Features

### 👤 User Features
- **Interactive Hero Showcase:** Dynamic featured game card with real-time thumbnail switching and smooth transitions.
- **Game Categories & Filtering:** Filter games by price, genre, platform, release year, and Metacritic score.
- **Game of the Year Spotlight:** Interactive system requirements checker and media gallery.
- **Shopping Cart & Checkout:** Add games to cart, view totals, and complete transactions stored directly in SQL Server.
- **User Authentication:** Secure registration and login using encrypted passwords (`bcryptjs`).
- **Responsive Layout:** Optimized across mobile, tablet, desktop, and ultra-wide screens.

### 🛠 Admin Features
- **Manage Game Catalog:** View, update, and remove titles from the SQL Server database.
- **Add New Games:** Create new games with cover image upload via Multer.
- **Customer Orders:** Track checkout transactions, quantities, and order totals.
- **User Management:** Monitor registered customer accounts and administrator privileges.
- **Protected Endpoints:** Admin API routes protected via role-based authentication.

---

## 🏗 Project Structure

```text
GamePay/
│
├── css/
│   ├── styles.css           # Global CSS variables, design tokens, and typography
│   └── components.css       # Styled UI components (Hero, Cards, FAQ, Admin)
│
├── js/
│   ├── data.js              # Storefront catalog & demo fallback data
│   ├── api.js               # Frontend API client for SQL Server backend
│   ├── app.js               # Main storefront DOM controller & event handling
│   └── admin.js             # Admin dashboard UI & API controller
│
├── pages/
│   ├── admin.html           # Admin Dashboard (Manage Games, Orders, Users)
│   └── signup.html          # User Registration & Account Creation
│
├── sql/
│   └── schema.sql           # SQL Server database & table initialization script
│
├── uploads/                 # Storage directory for uploaded game cover images
├── index.html               # Main Storefront Homepage
├── server.js                # Express.js REST API & static file server
├── dbConfig.js              # Microsoft SQL Server connection configuration
├── package.json             # Project dependencies and npm scripts
└── README.md                # Project documentation
```

---

## 🛠 Technologies Used

### Frontend
- **HTML5:** Semantic markup and accessible structure.
- **CSS3:** Vanilla CSS with custom properties (tokens), CSS Grid/Flexbox, and glassmorphic styling.
- **JavaScript (ES6+):** Modular frontend logic and asynchronous API integration (`fetch`).
- **Vite:** High-speed development server and asset bundler.

### Backend
- **Node.js:** Server runtime environment.
- **Express.js:** Web framework for RESTful APIs and middleware handling.

### Database
- **Microsoft SQL Server (MSSQL):** Relational database management system.
- **SQL:** Data definition and query scripting.

### Packages & Libraries
- `express`: Web server and API routing.
- `mssql`: Microsoft SQL Server client for Node.js.
- `bcryptjs`: Password hashing and secure authentication.
- `multer`: Multipart form data and image upload handling.
- `uuid`: Request identifier generation.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (SQLEXPRESS or Local DB)
- [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/GamePay.git
cd GamePay
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure the Database
Open `dbConfig.js` and verify or update your SQL Server credentials:
```javascript
module.exports = {
  user: process.env.DB_USER || 'Faizan',       // Your SQL Server username
  password: process.env.DB_PASSWORD || 'pmIK804', // Your SQL Server password
  server: process.env.DB_SERVER || 'localhost',  // SQL Server host
  database: process.env.DB_NAME || 'gamestore',  // Database name
  options: {
    encrypt: false,
    trustServerCertificate: true,
    instanceName: 'SQLEXPRESS'
  }
};
```

### 4. Initialize the SQL Database
1. Open **SQL Server Management Studio (SSMS)** and connect to your SQL Server instance.
2. Open `sql/schema.sql` inside SSMS.
3. Click **Execute** (`F5`) to create the `gamestore` database and all required tables (`users`, `user_roles`, `games`, `orders`, `order_items`, `payments`, etc.).

### 5. Start the Full-Stack Server
```bash
node server.js
```
The application will start at:
- **Main Store:** `http://localhost:3000/index.html`
- **Admin Dashboard:** `http://localhost:3000/pages/admin.html`

> **Note:** If you only want to test the frontend design without running SQL Server, you can run `npm run dev` to launch Vite in Demo Mode.

---

## 📂 Functional Modules

### User Module
- **Registration & Login:** Account creation with encrypted password validation.
- **Catalog Navigation:** Real-time filtering by price, genre, platform, and ratings.
- **Cart & Checkout:** Persistent order creation inside SQL Server database transactions.

### Admin Module
- **Game Management:** Add new titles with cover images or remove existing products.
- **Order Monitoring:** Review transactions and customer purchasing activity.
- **User Administration:** Monitor and manage registered accounts.

### Database Module
- **SQL Server Transactions:** Safe multi-table insertions for orders, items, and payments.
- **Relational Integrity:** Foreign key enforcement across users, roles, products, and orders.

---

## 📚 Learning Outcomes

This project demonstrates practical implementation of:
- Full-Stack Web Development (Client–Server Architecture)
- RESTful API Design & Implementation
- Microsoft SQL Server Relational Database Schema Design
- Secure Password Hashing & Role-Based Access Control
- Asynchronous Multipart File Uploads (Multer)
- Modern Responsive UI/UX Design (Glassmorphism & Gradients)

---

## 🔮 Future Improvements

- JWT-based token authentication
- Stripe / PayPal payment gateway integration
- User Wishlists and Favorites
- Interactive Product Reviews & Star Ratings
- Docker containerization for automated deployment

---

## 📄 License

This project is developed for educational and academic purposes.

---

## 👨💻 Author

**Faizan Ali**

Computer Science Student | Full-Stack Web Developer

---

## ⭐ Show Your Support

If you found this project useful or learned something from it, consider giving the repository a ⭐ **Star** on GitHub!
