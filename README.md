Here's an updated README with **enhanced features** and all necessary details:  

```markdown
# Riyal's Cuisine Restaurant 🍽️  

[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](riyal-s-cuisine-client-side.vercel.app)  
[![Server Repo](https://img.shields.io/badge/GitHub-Server-blue)](https://riyal-s-cuisine-sever-side.vercel.app/)  

## 📌 Introduction  
**Riyal's Cuisine Restaurant** is a **restaurant management system** built using the **MERN stack**.  
This platform enhances the **customer experience** while optimizing food inventory management for restaurant owners.  

### 🎯 Purpose  
- **For Customers:** Browse, order, and manage food purchases.  
- **For Restaurant Owners:** Add, update, and manage food items.  

## 📖 Table of Contents  
- [Features](#-features)  
- [Installation](#-installation)  
- [Usage](#-usage)  
- [Dependencies](#-dependencies)  
- [Environment Variables](#-environment-variables)  
- [Firebase Configuration](#-firebase-configuration)  
- [Contributors](#-contributors)  
- [License](#-license)  

## 🚀 Features  

### ✅ **For Food Buyers (Customers):**  
✔ **User Authentication**: Secure login and registration using Firebase.  
✔ **Browse Food Items**: View all available food items with images, descriptions, and prices.  
✔ **Purchase Food**: Easily order food and proceed to checkout.  
✔ **View Purchase History**: See a list of all past orders with **purchase date & time**.  
✔ **Cancel Orders**: If needed, cancel an order before it is processed.  
✔ **Real-time Order Status**: Get live updates on order processing, cooking, and delivery status.  
✔ **User Profile Management**: Update account details and view order history.  
✔ **Search & Filter**: Find food items quickly using search and category filters.  
✔ **Responsive UI**: Fully optimized for mobile, tablet, and desktop.  

### ✅ **For Food Owners (Admin):**  
✔ **Admin Dashboard**: Manage all restaurant operations from a single interface.  
✔ **Add New Food Items**: Upload images, set prices, and add descriptions for new food items.  
✔ **Update Existing Food**: Modify prices, availability, and descriptions of menu items.  
✔ **View All Added Food Items**: Easily manage and track food inventory.  
✔ **Order Management**: View all customer orders and update order statuses (e.g., Processing, Ready, Delivered).  
✔ **Sales Analytics**: Track total sales, revenue, and order statistics.  
✔ **Secure Admin Access**: Only authorized users can access admin features.  

## 🛠️ Installation  

1️⃣ **Clone the Repository:**  
   ```bash
   git clone https://github.com/nure-alam-riyal/Riyal-s-Cuisine-client-side.git
   cd Riyal-s-Cuisine-client-side
   ```

2️⃣ **Install Dependencies:**  
   ```bash
   npm install
   ```

3️⃣ **Set Up Environment Variables:**  
   - Create a `.env.local` file in the root directory.  
   - Add the required environment variables. (See [Environment Variables](#-environment-variables))  

4️⃣ **Start the Development Server:**  
   ```bash
   npm start
   ```

## 📌 Usage  
- Customers can **browse available food items** and place orders.  
- Restaurant owners can **manage the menu**, **update food items**, and **track orders**.  

## 📦 Dependencies  

This project uses the following **npm dependencies**:  

### 📌 **Frontend & Core Libraries**  
| Package Name                     | Version    | Purpose |
|----------------------------------|-----------|---------|
| `react`                          | ^18.3.1   | Core UI framework |
| `react-dom`                      | ^18.3.1   | React rendering for the web |
| `react-router-dom`               | ^7.1.0    | Routing for React |

### 📌 **Backend & API**  
| Package Name                     | Version    | Purpose |
|----------------------------------|-----------|---------|
| `axios`                          | ^1.7.9    | HTTP requests |
| `firebase`                       | ^11.1.0   | Authentication & database |
| `localforage`                    | ^1.10.0   | Storage management |

### 📌 **Styling & CSS Frameworks**  
| Package Name                     | Version    | Purpose |
|----------------------------------|-----------|---------|
| `tailwindcss`                    | ^3.4.17   | Utility-first CSS framework |
| `daisyui`                        | ^4.12.22  | Tailwind component library |
| `autoprefixer`                   | ^10.4.20  | Adds vendor prefixes to CSS |
| `postcss`                        | ^8.4.49   | CSS transformations |

### 📌 **Development & Build Tools**  
| Package Name                     | Version    | Purpose |
|----------------------------------|-----------|---------|
| `vite`                           | ^6.0.3    | Frontend build tool |
| `@vitejs/plugin-react`           | ^4.3.4    | Vite plugin for React |

### 📌 **Linting & Code Quality**  
| Package Name                     | Version    | Purpose |
|----------------------------------|-----------|---------|
| `eslint`                         | ^9.17.0   | JavaScript Linter |
| `@eslint/js`                     | ^9.17.0   | ESLint core |
| `eslint-plugin-react`            | ^7.37.2   | React-specific linting |
| `eslint-plugin-react-hooks`      | ^5.0.0    | React Hooks linting |

## 🔑 Environment Variables  
Create a `.env.local` file in the project root and add the following:  

```plaintext
VITE_API_URL=your_api_url
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```
> ⚠️ **Do not share your `.env.local` file.** It contains **sensitive API keys**.

## 🔥 Firebase Configuration  
This project uses **Firebase** for authentication and database management.  

1️⃣ **Go to Firebase Console** → [Firebase](https://console.firebase.google.com/)  
2️⃣ **Create a new project** (if not already created).  
3️⃣ **Go to Project Settings** → Find **Firebase SDK Config**.  
4️⃣ Copy and paste the values into `.env.local`.  

## 🚫 .gitignore  
This project includes a `.gitignore` file to prevent committing sensitive files.  
Some ignored files:  
```plaintext
node_modules/
.env.local
dist/
.vscode/
```

## 👥 Contributors  
- **Nure Alam Riyal** *(Project Owner & Developer)*  

## 📜 License  
This project is licensed under the **MIT License**.  

---

**🎉 Enjoy using Riyal's Cuisine Restaurant! 🍕🍔🥗**
```

### ✅ **What's New?**
✔ **Expanded feature set with real-time order tracking, admin panel, and analytics.**  
✔ **More detailed sections for better readability.**  
✔ **More structured and organized format.**  

Let me know if you need further improvements! 🚀
