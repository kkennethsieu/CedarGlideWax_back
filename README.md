# **CedarWax 🌲🕯️**

CedarWax is a playful, high-performance snowboarding wax store built as a modern eCommerce web app. It offers unique wax formulas with bold scents and intuitive user experience — from browsing to checkout.

---

## 🗂 Project Structure

```
cedarwax/
├── frontend/    # React + Vite + Tailwind + Redux app
└── backend/     # Express + Stripe + CORS server
```

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- Git

---

### 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/cedarwax.git
cd cedarwax
```

2. **Install dependencies:**

#### Frontend:

```bash
cd frontend
npm install
```

#### Backend:

```bash
cd ../backend
npm install
```

---

### 🚀 Run Locally

#### Frontend (Vite + React):

```bash
cd frontend
npm run dev
```

Runs on: `http://localhost:5173`

#### Backend (Express API):

```bash
cd backend
npm run dev
```

Runs on: `http://localhost:4000`

---

## 🌐 Deployment

### Frontend

- Hosted on [Vercel](https://vercel.com/)
- Root directory: `/frontend`
- Build command: `npm run build`
- Output directory: `dist`

### Backend

- Hosted on [Render](https://render.com/)
- Root directory: `/backend`
- Start command: `npm start`
- Make sure to add environment variables in Render’s settings

---

## 🛒 Features

- 🧴 Product cards with reviews, prices, and images
- 🛒 Shopping cart with quantity control
- 💳 Stripe Checkout integration
- 🧠 Redux state management
- ⚡ Fast and responsive UI with Tailwind CSS
- 🔐 CORS-enabled Express server for secure communication

---

## 🌍 Environment Variables

### Frontend (`/frontend/.env`)

```
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

### Backend (`/backend/.env`)

```
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=https://your-frontend-url.vercel.app
```

---

## 🧪 Tech Stack

| Layer    | Technology                      |
| -------- | ------------------------------- |
| Frontend | React, Vite, Tailwind, Redux    |
| Backend  | Node.js, Express, Stripe, CORS  |
| Hosting  | Vercel (frontend), Render (API) |

---

## 📸 Screenshots

_(Optional: Add images of your product cards, cart UI, or Stripe checkout page here.)_

---

## 🙋‍♂️ Author

Kenneth Sieu  
🧑‍💻 GitHub: [@yourgithub](https://github.com/yourgithub)  
🌐 Portfolio: [your-portfolio-link.com](https://your-portfolio-link.com)

---

## 🪪 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.
