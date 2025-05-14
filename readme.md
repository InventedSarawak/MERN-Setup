# MERN Template 🚀

A modern MERN (MongoDB, Express, React, Node.js) monorepo template with full TypeScript support, TailwindCSS for styling, and scalable folder structures for both frontend and backend projects. Built for performance, developer experience, and production-readiness.

## 📌 Features

### 🖙 Backend (Express + TypeScript)

- Built with Express.js and TypeScript
- Scalable file structure (controllers, routes, services, middlewares, models)
- Centralized configuration and constants
- API documentation with Swagger
- Database integration ready
- Linting with ESLint and Prettier
- Testing with Cypress
- Easy CI/CD Integration Possibility

### 🌐 Frontend (React + Vite + TailwindCSS + Shad/cn)

- Fast bundling with Vite
- Modern React with TypeScript
- UI styling via TailwindCSS
- Component-based architecture
- Utility functions and shared libraries
- Shad/cn for TailwindCSS
- Ready for expansion using component libraries

### 🩰 Tooling

- Package management using PNPM
- Workspace-based project management
- Consistent formatting using Prettier
- Modular folder structure
- Git-ready with proper .gitignore files
- Fully typed configurations

## 🚀 Getting Started

### 1️⃣ Prerequisites

- Node.js ≥ 20
- PNPM (Install via npm i -g pnpm)
- Rename .env.example to .env

### 2️⃣ Install Dependencies

```bash
pnpm install
```

### 3️⃣ Start Development

```bash
pnpm run dev
```

### 4️⃣ Build for Production

```bash
pnpm run build
```

## 🧪 Scripts

### Format code

```bash
pnpm format
```

### Run ESLint

```bash
pnpm lint
```

## 📂 Project Structure

```bash
.
├── .env                  # Environment variables
├── .env.example          # Example env file
├── .gitignore            # Git ignored files
├── .prettierrc           # Prettier config
├── .prettierignore       # Prettier ignore
├── backend/              # Express backend
│   ├── src/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/
│   │   ├── constants.ts
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── tests/
│   │   └── utils/
├── frontend/             # React frontend
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   └── index.css
├── package.json          # Root config
├── pnpm-lock.yaml        # Lock file
└── README.md             # You’re here!
```

Made with ❤️ by [Vedant](https://github.com/InventedSarawak)
