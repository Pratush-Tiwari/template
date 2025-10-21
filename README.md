# Template Monorepo

A modern, full-stack TypeScript monorepo template with React frontend, Express backend, and shared packages. Built with industry best practices and developer experience in mind.

## 🏗️ Monorepo Structure

```
template/
├── apps/                          # Applications
│   ├── backend/                   # Express.js API server
│   │   ├── src/
│   │   │   ├── controllers/       # Route controllers
│   │   │   ├── middlewares/       # Express middlewares
│   │   │   ├── routes/           # API routes
│   │   │   ├── config/           # Environment configuration
│   │   │   ├── app.ts            # Express app setup
│   │   │   └── index.ts          # Server entry point
│   │   └── package.json
│   └── frontend/                  # React SPA
│       ├── src/
│       │   ├── components/       # React components
│       │   ├── store/           # Redux store
│       │   └── main.tsx         # App entry point
│       └── package.json
├── packages/                      # Shared packages
│   ├── config/                   # Shared TypeScript configs
│   ├── db/                       # Database layer (Prisma)
│   ├── shared-types/             # Shared TypeScript types
│   └── ui/                       # Shared React components (shadcn/ui)
├── package.json                  # Root package with scripts
├── turbo.json                    # Turborepo configuration
└── pnpm-workspace.yaml          # PNPM workspace config
```

## 🚀 Tech Stack

### Frontend

- **React 19** - UI library with latest features
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **shadcn/ui** - Modern component library

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Zod** - Schema validation
- **T3 Env** - Environment variable validation

### Development Tools

- **Turborepo** - Monorepo build system
- **PNPM** - Fast package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TSX** - TypeScript execution

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **PNPM** >= 8.0.0
- **PostgreSQL** >= 13.0 (for database)

## 🎯 IDE Configuration (Trae AI)

This project includes configuration files specifically for **Trae AI IDE** in the `.trae/` directory:

```
.trae/
└── rules/
    └── project_rules.md    # Project-specific rules and guidelines
```

### For Trae AI Users

The `.trae/rules/project_rules.md` file contains important project conventions and rules that help Trae AI understand your project structure and provide better assistance.

### For Other IDE Users

If you're using a different IDE (VS Code, Cursor, etc.), you can:

1. **Delete the `.trae/` folder** - It won't affect your project functionality
2. **Create your own IDE project rules** - It's recommended to setup your own project rules based on the IDE. Look out for the steps to create a project rule, and then add the rules there.

The project will work perfectly fine without the `.trae/` folder - it's just the rules for Trae IDE.

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd template
pnpm install
```

### 2. Environment Setup

Create environment files:

**Backend** (`apps/backend/.env`):

```env
# Server Configuration
PORT=4000
NODE_ENV=development
# NODE_ENV=production

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=your_database

# Security
JWT_SECRET=your-super-secret-jwt-key-min-16-chars
```

**Frontend** (`apps/frontend/.env`) - Optional:

```env
# API Configuration (optional)
VITE_API_BASE_URL=/api
```

> **Note**: The frontend `.env` file is optional. If not provided, the frontend will default to `/api` for API calls (assuming same-origin requests). Create this file if you need more control over the API endpoint or want to point to a different backend server.

### 3. Database Setup

```bash
# Generate Prisma client
cd packages/db
pnpm prisma generate

# Run database migrations (if you have them)
pnpm prisma db push
```

### 4. Start Development

```bash
# Start both frontend and backend
pnpm dev

# Or start individually
pnpm dev:frontend  # Frontend only (http://localhost:5173)
pnpm dev:backend   # Backend only (http://localhost:4000)
```

## 📜 Available Commands

### 🔧 Development Commands

| Command             | Description                     | Ports                         |
| ------------------- | ------------------------------- | ----------------------------- |
| `pnpm dev`          | Start both frontend and backend | Frontend: 5173, Backend: 4000 |
| `pnpm dev:frontend` | Start frontend only             | 5173                          |
| `pnpm dev:backend`  | Start backend only              | 4000                          |

### 🏗️ Build Commands

| Command      | Description                         |
| ------------ | ----------------------------------- |
| `pnpm build` | Build all packages and applications |

### 🚀 Production Commands

| Command      | Description                                     |
| ------------ | ----------------------------------------------- |
| `pnpm start` | Start production servers (requires build first) |

### 🔍 Code Quality Commands

| Command             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `pnpm lint`         | Run TypeScript and ESLint checks across all packages |
| `pnpm lint:fix`     | Fix auto-fixable linting issues (ESLint only)        |
| `pnpm typecheck`    | Run TypeScript type checking                         |
| `pnpm format`       | Format code with Prettier                            |
| `pnpm format:check` | Check code formatting                                |

### 🧹 Maintenance Commands

| Command            | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `pnpm clean`       | Remove all node_modules and build artifacts                  |
| `pnpm ci:pipeline` | Run complete CI pipeline (format → lint → typecheck → build) |

## 🧪 API Testing

### Health Check Endpoint

Test the backend API with curl:

```bash
# Health check
curl http://localhost:4000/api/health

# Expected response:
# {"status":"ok","nodeEnv":"development"}
```

### API Endpoints

- `GET /api/health` - Health check endpoint

## 🗄️ Database

### Schema

The database includes a basic User model:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Database Commands

```bash
# Generate Prisma client
cd packages/db && pnpm prisma generate

# View database in Prisma Studio
cd packages/db && pnpm prisma studio

# Reset database
cd packages/db && pnpm prisma db push --force-reset
```

## 🔧 Development Workflow

### 1. Daily Development

```bash
# Start development servers
pnpm dev

# In another terminal, run checks
pnpm lint
pnpm typecheck
```

### 2. Before Committing

```bash
# Format code
pnpm format

# Run full CI pipeline
pnpm ci:pipeline
```

### 3. Production Build

```bash
# Build everything
pnpm build

# Start production servers
pnpm start
```

## 📦 Package Management

### Adding Dependencies

```bash
# Add to specific package
pnpm add <package> --filter @template/frontend
pnpm add <package> --filter @template/backend

# Add to root (affects all packages)
pnpm add <package> -w
```

### Workspace Dependencies

Packages can reference each other using workspace protocol:

```json
{
  "dependencies": {
    "@template/shared-types": "workspace:*",
    "@template/ui": "workspace:*"
  }
}
```

## 🚀 Deployment

### Environment Variables

Ensure all required environment variables are set in production:

- `NODE_ENV=production`
- `DATABASE_URL`
- `JWT_SECRET`
- `PORT` (optional, defaults to 4000)

### Build Process

```bash
# Install dependencies
pnpm install --frozen-lockfile

# Run CI pipeline
pnpm ci:pipeline

# Start production
pnpm start
```

## 🛠️ Customization

### Adding New Packages

1. Create new directory in `packages/`
2. Add `package.json` with workspace dependencies
3. Update `pnpm-workspace.yaml` if needed
4. Add build configuration to `turbo.json`

### Adding New Apps

1. Create new directory in `apps/`
2. Add `package.json` with appropriate scripts
3. Update `turbo.json` pipeline configuration
4. Add environment configuration if needed

## 📚 Key Features

- ✅ **Type Safety** - Full TypeScript coverage
- ✅ **Fast Builds** - Turborepo with intelligent caching
- ✅ **Code Quality** - ESLint, Prettier, TypeScript checks
- ✅ **Modern Stack** - Latest React, Node.js, and tooling
- ✅ **Database Ready** - Prisma ORM with PostgreSQL
- ✅ **Developer Experience** - Hot reload, fast feedback
- ✅ **Production Ready** - Environment validation, error handling
- ✅ **Monorepo Benefits** - Shared code, unified tooling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm ci:pipeline` to ensure quality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
