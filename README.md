# 🎁 Rewards Dashboard Application

A reward-based web application that allows users to sign up, sign in, and earn daily points through an interactive dashboard experience. The application uses **Supabase** for authentication and backend services, and **React** for the frontend.

---

## 🚀 Features

### 🔐 Authentication
- **Sign Up**
  - Name
  - Email
  - Password
  - Confirm Password
- **Sign In**
  - Email
  - Password
- Authentication handled via **Supabase Auth**
- Protected routes ensure only authenticated users can access the dashboard

---

## 🧩 Dashboard

- Users are redirected to the **Dashboard** after login
- The dashboard includes:
  - ✅ **Rewards Page** (fully implemented)
  - 🚧 **Coming Soon Pages** for all other sections
- Authentication state is checked on app load to prevent unauthorized access

---

## 🎁 Rewards System

- Users can **claim points once per day**
- Each daily claim:
  - Adds **+5 points** to total balance
  - Increments the **daily streak count**
  - Saves the claim date to prevent multiple claims per day
- Displays:
  - Total points balance
  - Daily streak count
  - Progress bar toward reward goals
- Claim button is disabled once the user has claimed for the day

---

## 🧱 Frontend Architecture

- Built with **React**
- Modular and reusable UI components stored in:


Includes:
- Buttons
- Inputs
- Tabs
- Cards / Paper components

- Custom hooks used for:
- Authentication state management
- User profile fetching
- Reward and streak logic

---

## 🗄 Backend (Supabase)

- **Supabase Authentication** for user accounts
- **Supabase Database** for storing user profiles and reward data
- `users` table includes:
- `id`
- `name`
- `email`
- `username`
- `count` (points)
- `days_count` (daily streak)
- `date` (last claim date)
- Row Level Security (RLS) ensures users can only access their own data

---

## 📱 Responsiveness

- Fully responsive design
- Optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Smooth UI experience across all screen sizes

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Supabase
- **Authentication:** Supabase Auth
- **State Management:** React Hooks
- **UI Notifications:** react-hot-toast

---

## 📌 Project Status

- ✅ Authentication implemented
- ✅ Rewards and daily claim logic completed
- ✅ Responsive UI across all devices
- 🚧 Additional dashboard features coming soon

---

## 🧠 Future Improvements

- Referral tracking and rewards
- Streak-based bonus rewards
- Admin dashboard
- Analytics and leaderboard
- Server-side reward validation via Supabase functions

---

## 📄 License

This project is for test purpose.


HOW TO RUN 

node version >= 20

npm install
npm run dev

Here are my submission details for the project:

GitHub repository: https://github.com/jefferynmose12/flowva-test

Deployed live URL: https://flowva-test-9bn8mffnq-jefferynmose12s-projects.vercel.app/


You can create an account with any email or use this details below to login 

Email: Jefferyjohnnmose@gmail.com 
Password: Cooking12345

Or 

Email: jefferyjohnisioman@gmail.com
Password: Cooking12345

