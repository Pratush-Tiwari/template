# Project Rules

## 🚫 Critical Don'ts

- **NEVER** use `npm` or `yarn` - this project uses **pnpm**
- **NEVER** bypass Turbo.js - use `pnpm dev`, `pnpm build`, etc.
- **NEVER** manually code shadcn/ui components - use CLI: `pnpm dlx shadcn@latest add <component>`
- **NEVER** add dependencies to root package.json (except dev tools)

## ✅ Essential Commands

```bash
# Development
pnpm dev                    # Start all servers
pnpm dev:backend           # Backend only
pnpm dev:frontend          # Frontend only

# Build & Quality
pnpm build                 # Build all packages
pnpm lint                  # Lint all packages
pnpm format                # Format all code

# Database (from packages/db)
pnpm prisma:generate       # Generate Prisma client
pnpm prisma migrate dev    # Run migrations

# UI Components (from packages/ui)
pnpm dlx shadcn@latest add <component>
```

## 📁 Structure

```
apps/
├── backend/              # Express.js + Prisma
└── frontend/             # React + Redux Toolkit + RTK Query + Vite
packages/
├── db/                   # Prisma schema & client
├── shared-types/         # Zod schemas
├── ui/                   # shadcn/ui components
└── config/               # Shared TypeScript config
```

## 🛠 Tech Stack

- **Package Manager**: pnpm workspaces
- **Build Tool**: Turbo.js
- **Backend**: Express.js + Prisma + PostgreSQL
- **Frontend**: React 19 + Redux Toolkit + RTK Query + Vite + Tailwind
- **Validation**: Zod
- **Types**: TypeScript (ESM with `.js` imports)

## 🎯 For AI Assistants

1. Use **pnpm** and **Turbo.js** commands only
2. Check existing workspace packages before adding dependencies
3. Use **shadcn/ui CLI** for components
4. Follow **ESM conventions** (`.js` extensions in imports)
5. Use **workspace references** (`workspace:*`) for internal packages
