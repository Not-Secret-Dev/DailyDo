# DailyDo 📅✨

> A modern, cloud-ready habit tracking application built with **React Native**, **Expo**, and **Supabase**. Designed to help users build consistency, track progress, and stay productive through a clean, scalable UI and intelligent tracking architecture.

---

## 📖 Overview

DailyDo is a cross-platform habit tracker focused on simplicity, performance, and user retention. It currently features a fully functional local tracking system with a polished UI, Supabase-backed authentication, and a modular architecture built for seamless cloud sync, real-time updates, and advanced analytics.

The app is structured for scalability: themed components, TypeScript-first data models, centralized services, and a clear separation between UI state and storage logic.

---

## ✅ Current Features

### 🔐 Authentication

- Supabase email/password login & signup
- Secure session management & user profile storage

### 📋 Habit Tracking (Local)

- `AsyncStorage`-based persistence with structured JSON models
- Dynamic "Habits for Today" dashboard
- Real-time completion counter & empty state handling
- Completion toggle architecture with persistent state updates

### ➕ Habit Creation Flow

- Bottom-sheet modal with form validation
- Habit metadata: `id`, `title`, `icon`, `frequency`, `duration`, `reminderEnabled`, `reminderTime`
- Native time picker integration for reminder scheduling
- Reusable, theme-driven input components

### 🎨 UI & Architecture

- Centralized theme system with consistent spacing & typography
- Fully typed TypeScript interfaces across components & services
- Modular component structure ready for navigation, settings, & analytics
- Optimized state updates & clean component boundaries

---

## 🚧 Next Phase & Roadmap

### ☁️ Cloud Sync & Supabase Integration

- Create `habits` table with `user_id` foreign key
- Implement full CRUD: create, fetch, update, delete, toggle completion
- Enable Supabase Realtime for instant cross-device sync
- Migrate from `AsyncStorage` to cloud-first with offline fallback

### 📱 Notification System

- Integrate `expo-notifications`
- Request & handle notification permissions
- Schedule daily reminders based on user-selected time
- Auto-cancel/reschedule on habit edit or deletion

### 📊 Progress & Analytics Engine

- Streak tracking & daily reset logic
- Missed habit detection & recovery prompts
- Weekly/monthly completion analytics
- Optional calendar view & statistics dashboard

### 🎨 UI/UX Enhancements

- Complete habit card design with icons, duration badges & progress rings
- Swipe gestures / long-press menus for edit & delete
- Micro-interactions & animation feedback (Reanimated / Moti)
- Responsive spacing & dark/light theme support

### 🏗️ Architectural Refactor

- Extract habit logic into reusable hooks (`useHabits`, `useReminders`, `useStreaks`)
- Separate UI state from storage/business logic
- Improve type safety & reduce unnecessary re-renders
- Implement error boundaries & loading states for async operations

### 🔮 Future Features

- Onboarding flow & app walkthrough
- User settings, cloud backup & data export
- Achievement badges & motivational quotes
- Advanced offline sync & conflict resolution
- Social sharing & accountability features

---

## 🛠 Tech Stack

| Category         | Technology                                  |
| ---------------- | ------------------------------------------- |
| Framework        | React Native + Expo                         |
| Language         | TypeScript                                  |
| Auth & Backend   | Supabase (PostgreSQL, Auth, Realtime)       |
| Local Storage    | `@react-native-async-storage/async-storage` |
| Navigation       | React Navigation                            |
| Notifications    | `expo-notifications` (planned)              |
| Animations       | React Native Reanimated / Moti (planned)    |
| State Management | React Hooks + Context + Custom Services     |
| Styling          | Centralized Theme + StyleSheet / NativeWind |

---

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, fonts
├── components/      # Reusable UI (buttons, inputs, cards, modals)
├── screens/         # Main app screens (Auth, Habits, Settings, etc.)
├── services/        # AsyncStorage, Supabase, Notifications, Helpers
├── hooks/           # Custom hooks (useHabits, useAuth, useTheme)
├── styles/          # Centralized theme, spacing, typography, utilities
├── types/           # TypeScript interfaces & type guards
├── utils/           # Formatters, date logic, validation
└── navigation/      # Root & app navigators
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18`
- npm / yarn / pnpm
- Expo CLI: `npm install -g expo-cli`
- A [Supabase](https://supabase.com) project

### Installation

```bash
# Clone the repository
git clone https://github.com/Not-Secret-Dev/dailydo.git
cd dailydo

# Install dependencies
npm install

# Start the Expo development server
npx expo start
```

Scan the QR code with the **Expo Go** app (iOS/Android) or run on a simulator/emulator.

---

## 🔑 Environment Setup

Create a `.env` file in the root directory:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> 🔒 Never commit `.env` to version control. Supabase Row Level Security (RLS) should be enabled on all tables.

---

## 📝 Development Guidelines

- Follow the centralized theme for all UI components
- Keep storage & business logic isolated in `services/` and `hooks/`
- Use TypeScript strictly; avoid `any`
- Test async operations with loading & error states
- Commit messages should follow conventional commits (`feat:`, `fix:`, `refactor:`, etc.)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to implement.

1. Fork the repo
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

> Built with ❤️ by **Aayan Mumtaz** | DailyDo © 2026
