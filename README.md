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
- **Authentication Pages**: Complete login and signup forms with social login options
- **Profile Management**: User profile page with subscription details and account settings
- **Admin Dashboard**: User management interface with statistics and user list table
- **Complete User Flow**: Connected navigation from pricing → signup → login → profile → admin
- **Navigation**: Clean navbar with logo and action buttons (Login, Get Started)
- **Responsive Design**: Mobile-first approach with responsive grid layout
- **Modern UI Components**: Built with shadcn/ui components (Card, Button, Badge, Input, Label, Avatar, Table)
- **Environment Configuration**: Proper .env setup with example file

### Available Pages

- `/` - Landing page with pricing tiers
- `/login` - User login page with email/password and social login
- `/signup` - User registration page with form validation
- `/profile` - User profile and subscription management
- `/admin` - Admin dashboard with user management and statistics

### User Journey

1. **Landing Page** - View pricing options (Free $0, Pro $29, Enterprise $99)
2. **Sign Up** - Create account (Free/Pro buttons → signup page)
3. **Log In** - Sign in to account (redirects to profile)
4. **Profile** - Manage personal info, view subscription, change plans
5. **Admin** - Access user management dashboard (admin button in profile)

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