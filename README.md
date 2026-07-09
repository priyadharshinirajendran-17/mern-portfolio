# Priyadharshini R — MERN Stack Portfolio

A full-stack personal portfolio website built with the MERN stack (MongoDB,
Express, React, Node.js). The frontend is a Vite + React + Tailwind CSS
single-page app; the backend is a small Express + MongoDB REST API that
serves projects and skills, and stores contact form submissions.

## Project Overview

```
portfolio/
├── client/     React (Vite) frontend
├── server/     Express + MongoDB backend
└── README.md   You are here
```

**Live sections:** Hero, About, Skills, Experience, Projects, Education,
Certifications, Contact — all in `client/src/pages/Home.jsx`.

**Design:** Dark theme with purple (`#8B5CF6`) + cyan (`#22D3EE`) accents,
glassmorphism cards, Space Grotesk / Inter / JetBrains Mono type, and a
terminal-style "whoami" hero card as the signature visual.

## Technologies Used

| Layer | Stack |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, React Router, Axios, Framer Motion, React Icons |
| Backend | Node.js, Express, MongoDB, Mongoose |
| Deployment | Vercel (frontend), Render (backend) |

## Folder Structure

```
client/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── resume.pdf        ← add your resume here (see note below)
├── src/
│   ├── api/               axios instance + one file per resource
│   ├── assets/             images/static assets
│   ├── components/         reusable UI components
│   ├── context/            ToastContext (global toast notifications)
│   ├── hooks/               useScrollAnimation (IntersectionObserver hook)
│   ├── pages/               Home.jsx, NotFound.jsx
│   ├── utils/                constants.js (all personal/profile content)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json

server/
├── config/db.js            MongoDB connection
├── controllers/             route handlers
├── models/                  Mongoose schemas (Contact, Project, Skill)
├── routes/                   Express routers
├── middleware/                errorHandler, validateContact
├── seed/seed.js               populates projects + skills collections
├── server.js
└── package.json
```

## Installation

Requires **Node.js 18+** and a MongoDB instance (local or Atlas).

```bash
# 1. Clone / unzip the project, then install both apps
cd server && npm install
cd ../client && npm install
```

## Environment Variables

Copy the example env files and fill in real values.

**server/.env** (copy from `server/.env.example`)
```
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

**client/.env** (copy from `client/.env.example`)
```
VITE_API_URL=http://localhost:5000/api
```

## MongoDB Setup

**Option A — Local MongoDB**
1. Install and start MongoDB Community Edition.
2. Use `mongodb://127.0.0.1:27017/portfolio` as `MONGO_URI`.

**Option B — MongoDB Atlas (recommended for deployment)**
1. Create a free cluster at https://www.mongodb.com/atlas.
2. Add a database user and allow access from your IP (or `0.0.0.0/0` for Render).
3. Copy the connection string into `MONGO_URI` in `server/.env`.

**Seed initial data** (projects + skills, so the site isn't empty):
```bash
cd server
npm run seed
```

## Run the Backend

```bash
cd server
npm run dev      # nodemon, auto-restarts on changes
# or
npm start        # plain node
```
API runs at `http://localhost:5000`. Health check: `GET /api/health`.

## Run the Frontend

```bash
cd client
npm run dev
```
App runs at `http://localhost:5173`.

> The frontend has fallback content (`client/src/utils/constants.js`) for
> projects and skills, so it still renders correctly even if the backend
> isn't running yet — useful while you're setting things up.

## API Reference

| Method | Route | Description |
|---|---|---|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | List all projects |
| GET | `/api/projects/:id` | Get a single project |
| GET | `/api/skills` | List all skills |
| POST | `/api/contact` | Submit a contact form message |
| GET | `/api/contact` | List submitted messages (owner use) |

## Before You Deploy — Personalize These

1. `client/src/utils/constants.js` — replace the placeholder GitHub/LinkedIn
   URLs (`your-username`, `your-profile`) with your real links.
2. `client/public/resume.pdf` — add your actual resume PDF (delete
   `RESUME_PLACEHOLDER.txt` once added).
3. `client/index.html` — update the `og:url` and Twitter meta tags with
   your real deployed domain, and add an `og-image.png` to `public/`.
4. `client/public/sitemap.xml` and `robots.txt` — update the domain.
5. `server/seed/seed.js` — update `githubUrl` / `liveUrl` for each project.

## Deployment Steps

**Backend → Render**
1. Push the `server/` folder to a GitHub repo.
2. On Render: New → Web Service → connect the repo.
3. Build command: `npm install`. Start command: `npm start`.
4. Add environment variables (`MONGO_URI`, `CLIENT_URL`, `NODE_ENV=production`).
5. Deploy — note the resulting URL (e.g. `https://your-api.onrender.com`).

**Frontend → Vercel**
1. Push the `client/` folder to a GitHub repo (or the same monorepo, setting
   the root directory to `client/` in Vercel's project settings).
2. Framework preset: Vite.
3. Add environment variable `VITE_API_URL=https://your-api.onrender.com/api`.
4. Deploy.

**After both are live:** update `CLIENT_URL` on Render to your Vercel
domain (so CORS allows it), and redeploy the backend.

## Code Quality Notes

- Functional components + hooks throughout, no class components.
- No Redux, no TypeScript, no authentication — kept intentionally simple
  for a trainee-level MERN project, per the project brief.
- Route-level code splitting via `React.lazy` in `App.jsx`.
- All colors/spacing/type driven by Tailwind config tokens, not inline
  magic values, so the design system stays consistent.

## License

Personal portfolio project — free to use as a reference or starting point
for your own portfolio.
