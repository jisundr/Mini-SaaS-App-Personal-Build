# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

Next.js frontend has been initialized in the `frontend/` directory with TypeScript, Tailwind CSS, shadcn/ui configured, a complete pricing landing page, navigation bar, and authentication pages (login/signup).

## Development Setup

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Copy environment variables: `cp .env.example .env.local`
4. Start development server: `npm run dev`
5. Access at http://localhost:3000

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
│   │   ├── login/     # Login page
│   │   │   └── page.tsx
│   │   ├── signup/    # Signup page
│   │   │   └── page.tsx
│   │   ├── layout.tsx # Root layout with navbar
│   │   └── page.tsx   # Landing page with pricing
│   ├── components/    # UI components
│   │   ├── ui/       # shadcn/ui components
│   │   ├── navbar.tsx     # Navigation component
│   │   └── pricing-table.tsx  # Pricing component
│   ├── lib/          # Utilities (utils.ts)
│   ├── public/       # Static assets
│   ├── .env.example  # Environment template
│   ├── .env.local    # Local environment (gitignored)
│   ├── components.json  # shadcn/ui config
│   ├── tailwind.config.ts
│   ├── next.config.ts
│   └── package.json
├── README.md
└── CLAUDE.md
```

## Notes for Future Development

- Frontend is now set up with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui
- Landing page implemented with pricing tiers (Free $0, Pro $29, Enterprise $99)
- Authentication pages: login (/login) and signup (/signup) with form validation
- Social login options (Google, Facebook) ready for OAuth integration
- Navigation bar with logo and action buttons (Login, Get Started)
- Environment variables properly configured with .env.example template
- Professional pricing table component with responsive design
- Updated metadata with proper SEO title and description
- Consider adding backend API (Express.js, Prisma, PostgreSQL)
- Plan for authentication system
- Database design for SaaS features
- Deployment configuration (Vercel for frontend)