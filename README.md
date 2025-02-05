
# 🏥 MediNest  

A **Multi-vendor e-commerce platform** for purchasing medicines and healthcare products, built using the **MERN stack**. The platform ensures a seamless user experience, allowing users to buy medications, submit queries, and receive expert advice.  

---
<div align="center">
  <img height="auto" src="https://i.ibb.co.com/hFW7JmZ8/screencapture-medi-nest-r6-web-app-2025-02-05-19-37-17.png" alt="Medinest"  />
</div>

## ✨ Features  

✅ **Multi-Vendor Support** – Sellers can register and sell their products.  
✅ **Secure Payments** – Integrated with Stripe for safe transactions.  
✅ **User Authentication** – Sign-up, login, and role-based access.  
✅ **Product Management** – Add, edit, and delete products.  
✅ **Search & Filters** – Advanced product search and sorting.  
✅ **Cart & Checkout** – Smooth checkout experience with order tracking.  
✅ **Healthcare Consultation** – Users can submit queries and receive expert advice.  
✅ **Admin Dashboard** – Manage vendors, users, and products efficiently.  

---

## 🛠 Tech Stack  

**Frontend:**  
- React.js  
- @mui/material (Material UI)  
- Emotion & Styled Components for styling  
- React Query for state management  
- React Hook Form for forms  

**Backend:**  
- Node.js & Express.js  
- MongoDB with Mongoose ORM  
- Firebase Authentication  

**Payments & Utilities:**  
- Stripe API for payment processing  
- Axios for API calls  
- React Router for navigation  
- SweetAlert2 for notifications  
- React Toastify for alerts  

---

## 🚀 Installation  

### Prerequisites  
- Node.js (>=18.x)  
- MongoDB installed locally or an online instance  
- Firebase account for authentication  
- Stripe account for payment gateway  

### Steps to Run Locally  

#### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/juwel-r/medi-nest-client.git
cd medi-nest-client
```

#### 2️⃣ Install Dependencies  
```bash
npm install
```

#### 3️⃣ Setup Environment Variables  
Create a **.env** file in the root directory and add:  
```
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

#### 4️⃣ Run the Application  
```bash
npm run dev
```

The application will be available at **http://localhost:5000/**.  

---

## 📌 Usage  

- **For Users**  
  - Browse products, add them to your cart, and check out.  
  - Submit queries for expert advice.  

- **For Vendors**  
  - Register, list products, and manage orders.  

- **For Admins**  
  - Oversee platform activities, approve vendors, and manage users.  

---

## ⚙️ Configuration  

Modify settings in the **config.js** file to adjust API endpoints, authentication, and payment settings.  

---

## 🛠 Troubleshooting  

- **MongoDB Connection Error**  
  - Ensure MongoDB is running and `MONGO_URI` is correctly set in `.env`.  

- **Firebase Authentication Issues**  
  - Double-check API keys and permissions.  

- **Stripe Payment Not Processing**  
  - Verify Stripe API keys and ensure test mode is enabled.  

---
