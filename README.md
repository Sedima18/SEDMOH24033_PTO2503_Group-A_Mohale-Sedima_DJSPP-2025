# 🎙️ Podcast App (React)

A modern podcast browsing application built with **React** that allows users to explore podcasts, view show details, play episodes globally, and manage favourites.  
This project focuses on clean architecture, global state management with Context API, and a smooth user experience.

---

## 🚀 Features

- 📚 Browse and explore podcasts
- 🔍 Search, sort, and filter shows
- 🎧 Global audio player (persistent across pages)
- ❤️ Favourite episodes and shows
- 🌙 Light / Dark theme toggle (saved in localStorage)
- 📄 Show detail pages with seasons and episodes
- 💾 State persistence using localStorage
- 🧭 Client-side routing with React Router

---

## 🛠️ Tech Stack

- **React**
- **React Router v6**
- **Context API** (global state management)
- **Vite** (development & build tool)
- **CSS Modules**
- **LocalStorage** (theme & favourites persistence)

---

## 📁 Project Structure

src/
├── components/
│ ├── UI/
│ │ ├── index.js # Barrel file exporting all UI components
│ │ ├── Header.jsx
│ │ ├── AudioPlayerBar.jsx
│ │ └── Header.module.css
│ ├── podcast/
│ │ └── index.js # Barrel file exporting podcast-related components
│ └── filters/
│ └── index.js # Barrel file exporting filter components
│
├── pages/
│ ├── Home.jsx
│ ├── ShowDetail.jsx
│ └── Favourites.jsx
│
├── context/
│ ├── PodcastContext.jsx
│ ├── AudioPlayerContext.jsx
│ ├── ThemeContext.jsx
│ └── FavouritesContext.jsx
│
├── utils/
│ ├── api.js
│ └── genreMap.js
│
├── App.jsx
├── main.jsx
└── index.css


---

## 📦 Importing via Barrel Files

Barrel files simplify imports by re-exporting multiple components from a single file:

```js
// Instead of importing each file individually:
import Header from './components/UI/Header';
import AudioPlayerBar from './components/UI/AudioPlayerBar';

// With the barrel file (index.js):
import { Header, AudioPlayerBar } from './components/UI';
This pattern is used in:

components/UI/index.js

components/podcast/index.js

components/filters/index.js

▶️ Getting Started
1️⃣ Clone the repository
git clone <your-repo-url>
cd podcast-app
2️⃣ Install dependencies
npm install
3️⃣ Start the development server
npm run dev
Open your browser at:

http://localhost:5173
🎧 Audio Player
Global audio player persists across routes

Playback state managed via AudioPlayerContext

Users can play, pause, and seek episodes

Playback state updates automatically in the UI

🌗 Theme Support
Light and Dark themes available

User preference saved in localStorage

Theme is applied automatically on app load

❤️ Favourites
Users can add/remove favourite episodes

Favourites persist across sessions using localStorage

Accessible via the /favourites route

🧪 Error Handling & Stability
Guarded rendering prevents runtime crashes

Fixed case-sensitive import issues

Removed invalid asset references

App now renders reliably across refreshes and routes

📜 Build for Production
npm run build
👨‍💻 Author
Sedima Mohale
Podcast App – DJS Portfolio Project