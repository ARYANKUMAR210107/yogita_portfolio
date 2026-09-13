# Yogita Sharma — Portfolio Website

A professional, modern portfolio website built with React + TypeScript (Vite) for the frontend and Node.js + Express for the backend.

## Tech Stack

### Frontend
- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations
- **Lucide React** — icons

### Backend
- **Node.js** + **Express** + **TypeScript**
- **Nodemailer** — contact form emails
- **Helmet** — security headers
- **express-rate-limit** — rate limiting
- **express-validator** — input validation

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### 1. Clone and Install

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Configure Environment

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your SMTP credentials if you want email support
```

### 3. Run Development Servers

Open two terminal windows:

```bash
# Terminal 1 — Backend
cd backend
npm run dev

# Terminal 2 — Frontend
cd frontend
npm run dev
```

The frontend runs at `http://localhost:5173` and proxies API requests to the backend at `http://localhost:3001`.

### 4. Resume File

Place your resume PDF at `frontend/public/Yogita_Sharma_Resume.pdf` for the download button to work.

### 5. Contact Form

The contact form works out of the box — it logs submissions to the console. To enable actual email delivery:

1. Open `backend/.env`
2. Set your SMTP credentials:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```
3. For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833)

### 6. Production Build

```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/`.

## Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── sections/       # Page sections (Hero, About, etc.)
│   │   ├── data/           # Portfolio data (single source of truth)
│   │   ├── hooks/          # Custom React hooks
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── index.html          # SEO-optimized HTML entry
│
├── backend/
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic (email, etc.)
│   │   ├── middleware/      # Validation, auth, etc.
│   │   └── utils/          # Helper utilities
│   └── .env.example        # Environment variable template
│
└── README.md
```

## Features

- ✅ Dark theme with glassmorphism design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Interactive project case studies
- ✅ GitHub API integration
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Accessible (semantic HTML, keyboard nav)
- ✅ Rate-limited API
- ✅ No fabricated information

## License

© Yogita Sharma. All rights reserved.
