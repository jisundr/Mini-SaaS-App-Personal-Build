# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

Next.js frontend has been initialized in the `frontend/` directory with TypeScript, Tailwind CSS, and shadcn/ui configured.

## Development Setup

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access at http://localhost:3000

## Commands

### Frontend Commands
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint linting

## Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Location**: `frontend/` directory

### Project Structure
```
├── frontend/           # Next.js application
│   ├── app/           # App Router pages
│   ├── components/    # UI components
│   │   └── ui/       # shadcn/ui components
│   ├── lib/          # Utilities (utils.ts)
│   ├── public/       # Static assets
│   ├── components.json  # shadcn/ui config
│   ├── tailwind.config.ts
│   ├── next.config.ts
│   └── package.json
├── README.md
└── CLAUDE.md
```

## Notes for Future Development

- Frontend is now set up with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui
- Consider adding backend API (Express.js, Prisma, PostgreSQL)
- Plan for authentication system
- Database design for SaaS features
- Deployment configuration (Vercel for frontend)