# Mini SaaS App - Personal Build

A personal SaaS application built with Next.js and TypeScript.

## Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Mini-SaaS-App-Personal-Build
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Frontend Development

The frontend is located in the `frontend/` directory and uses:
- Next.js App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for UI components
- Environment variables for configuration

### Current Features

- **Landing Page**: Professional pricing page with three tiers (Free, Pro, Enterprise)
- **Navigation**: Clean navbar with logo and action buttons (Login, Get Started)
- **Responsive Design**: Mobile-first approach with responsive grid layout
- **Modern UI Components**: Built with shadcn/ui components (Card, Button, Badge)
- **Environment Configuration**: Proper .env setup with example file

### Available Scripts

In the `frontend/` directory:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

This is a personal project.

## License

*License information to be added*