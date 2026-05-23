# Netflix GPT

A React-based movie discovery application inspired by Netflix, enhanced with GPT-style search flow and Firebase authentication.

The app fetches movie data from The Movie Database (TMDB), renders trailers using a YouTube embed, and supports login/signup through Firebase Auth. Users can search using natural language, see genre-aware movie suggestions, and browse popular, now playing, top-rated, and upcoming titles.

---

## 🚀 Features

- Firebase Authentication for sign in / sign up
- Browse movies by category: Now Playing, Popular, Top Rated, Upcoming
- Natural language search triggers TMDB recommendations
- Dynamic trailer background using YouTube embeds
- Multi-language GPT search placeholder support (English, Hindi, Telugu)
- Redux Toolkit for state management
- Client-side routing with React Router
- Tailwind CSS utility styling

---

## 🧰 Tech Stack

- React 19
- Redux Toolkit
- React Router DOM 7
- Firebase Auth
- TMDB API
- Tailwind CSS
- PostCSS
- React Icons
- React Scripts

---

## 📁 Folder Structure

```
netflix-gpt/
├── build/                    # Production build output
├── public/                   # Static public files
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── Body.js
│   │   ├── Browse.js
│   │   ├── GptSearch.js
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── MainContainer.js
│   │   ├── MovieCard.js
│   │   ├── MovieList.js
│   │   ├── MovieSuggestions.js
│   │   ├── SearchBar.js
│   │   ├── SecondaryContainer.js
│   │   ├── VideoBackground.js
│   │   └── VideoTitle.js
│   ├── hooks/                # Custom React hooks for API fetch logic
│   │   ├── useMovieTrailer.js
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useTopRatedMovies.js
│   │   └── useUpcomingMovies.js
│   ├── utils/                # Redux slices, constants, config, helpers
│   │   ├── appStore.js
│   │   ├── configSlice.js
│   │   ├── constant.js
│   │   ├── firebase.js
│   │   ├── gptSlice.js
│   │   ├── languageConstants.js
│   │   ├── movieLogic.js
│   │   ├── moviesSlice.js
│   │   ├── userSlice.js
│   │   └── validate.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Prerequisites

- Node.js (v18+ recommended)
- npm

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env` file in the root of the project and add the following values:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_TMDB_AUTH_TOKEN=your_tmdb_auth_bearer_token
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

### 4. Start the application

```bash
npm start
```

Open http://localhost:3000 in your browser.

### 5. Build for production

```bash
npm run build
```

### 6. Run tests

```bash
npm test
```

---

## 🌐 Routing

- `/` — Login and signup page
- `/browse` — Main browsing experience after successful auth

---

## 📡 External APIs and Endpoints

This app consumes these APIs:

- Firebase Authentication - handles login and signup flows
- TMDB API:
  - `https://api.themoviedb.org/3/movie/now_playing?page=1`
  - `https://api.themoviedb.org/3/movie/popular?page=1`
  - `https://api.themoviedb.org/3/movie/top_rated?page=1`
  - `https://api.themoviedb.org/3/movie/upcoming?page=1`
  - `https://api.themoviedb.org/3/movie/{movie_id}/videos?language=en-US`
  - `https://api.themoviedb.org/3/discover/movie?api_key={API_KEY}&with_genres={genreId}`
  - `https://api.themoviedb.org/3/search/movie?query={movie}&include_adult=false&language=en-US&page=1`
- YouTube embed via `https://www.youtube.com/embed/{videoKey}` for background trailers

---

## 🧠 How It Works

1. The app boots in `src/index.js` and renders `App.js`.
2. `App.js` wraps the app with Redux Provider using `src/utils/appStore.js`.
3. `src/components/Body.js` configures client-side routes: `/` and `/browse`.
4. `Login.js` uses Firebase Auth to sign in or create new users.
5. After login, `Browse.js` fetches movie categories using custom hooks in `src/hooks/`.
6. `Header.js` toggles between browsing and GPT search mode.
7. `SearchBar.js` detects a genre from the user query, uses TMDB discover/search endpoints, and stores results in Redux.
8. `MovieSuggestions.js` renders GPT-based search results in dynamic carousels.

---

## 🧩 Key Files

- `src/utils/firebase.js` — Firebase setup and auth exports
- `src/utils/constant.js` — TMDB configuration and global constants
- `src/utils/gptSlice.js` — GPT search UI state management
- `src/hooks/*` — API fetch hooks for movies and trailers
- `src/components/Header.js` — navigation, language selection, auth state
- `src/components/SearchBar.js` — GPT-style search input + TMDB lookup

---

## ✅ Notes

- The app is currently configured for demo use with hardcoded API keys. Make environment variables mandatory before deploying.
- `openai` is installed, but no direct OpenAI API call exists in the current code. It can be used to extend GPT search logic later.
- The app uses `react-router-dom` for navigation and `tailwindcss` for styling.

---

## 📘 Recommended Improvements

- Move all secrets into `.env` and `src/utils/constant.js` should reference `process.env` values.
- Add proper error handling and loading states for network requests.
- Secure Firebase with rules and limit API key usage.
- Add real screenshots to the `screenshots/` folder.
- Add a `.env.example` file to document required environment variables.

