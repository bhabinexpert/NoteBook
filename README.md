# NoteBook

![NoteBook Screenshot Placeholder](<img width="2879" height="1635" alt="image" src="https://github.com/user-attachments/assets/5bd72e78-9ffb-467f-bd60-96c62af6ad19" />
)


A simple MERN project were we can keep our notes. Notes can be created, viewed, edited, and deleted through a React frontend backed by an Express/MongoDB API.

## Features
- Create, edit, and delete notes
- Clean, responsive UI with Tailwind + DaisyUI
- Toast feedback after API actions
- CRUD REST API powered by Express + MongoDB
- Upstash rate limiter code exists but is currently disabled

## Tech Stack
- **Frontend:** React 19, React Router, Axios, Tailwind CSS, DaisyUI
- **Backend:** Node.js, Express 5, Mongoose, MongoDB Atlas
- **Tooling:** Vite, Nodemon, ESLint

## Project Structure
```
Backend/
  src/
    config/      # Mongo connection + optional Upstash setup
    controllers/ # Note CRUD logic
    routes/      # /api/notes endpoints
Frontend/
  src/
    components/  # Reusable UI blocks
    pages/       # Home, Create, Note details
    lib/         # Axios instance
```

## Getting Started
```bash
# clone the repo
git clone <repo-url>
cd Note-App

# backend setup
cd Backend
npm install
npm start

# frontend setup (new terminal)
cd ../Frontend
npm install
npm run dev
```
Open `http://localhost:5173` (Vite) and ensure the API is running on `http://localhost:8080/api/notes`.

### Backend `.env`
```
MONGO_URI=your-mongodb-uri
PORT=8080
# Optional: only required if the Upstash rate limiter is re-enabled
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

## Production Build
```bash
cd Frontend
npm run build    # creates dist/
```
The Express backend already serves `Frontend/dist` when running `npm start` in `Backend/`.

## API Summary
Base URL: `http://localhost:8080/api/notes`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | List all notes |
| GET    | `/:id`   | Get note by ID |
| POST   | `/`      | Create a note |
| PUT    | `/:id`   | Update a note |
| DELETE | `/:id`   | Delete a note |

## Roadmap / Next Steps
- � Add user authentication & authorization (pending)
- 🚦 Re-enable Upstash rate limiting once connectivity issues are solved
- 🧪 Add automated tests for both client and server
- � Replace the screenshot placeholder above with real UI shots

Happy coding! Contributions and coursework improvements are encouraged.
