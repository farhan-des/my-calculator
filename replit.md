# Playback Speed Calculator

## Overview

This is a utility-focused web application that calculates video and podcast duration at different playback speeds. Users can input a media duration (hours, minutes, seconds) and a playback speed multiplier to see the adjusted time and time saved/lost. The application is built as a single-page calculator with examples and instructional content, emphasizing clarity and ease of use.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing. The application has a minimal route structure with a home page and a 404 fallback.

**UI Component Library**: Shadcn UI with Radix UI primitives. The design system follows the "new-york" style variant with a neutral base color scheme. Components are built with class-variance-authority for variant management and Tailwind CSS for styling.

**State Management**: React hooks (useState, useEffect) for local component state. No global state management library is used since the application is primarily stateless - calculations are performed on-demand based on user input.

**Type Safety**: TypeScript with strict mode enabled. Shared types and schemas are defined in `shared/schema.ts` using Zod for runtime validation.

**Design System**: Custom Tailwind configuration extending the base theme with specific color variables (HSL-based), border radius values, and utility classes. The design emphasizes tabular numbers for time displays and consistent spacing primitives (2, 4, 6, 8 unit increments).

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**API Structure**: RESTful API pattern with routes prefixed under `/api`. Currently, the routes file is a template without implemented endpoints, as the calculator performs all calculations client-side.

**Development Setup**: Vite middleware integration for hot module replacement during development. Production builds serve static assets from the `dist/public` directory.

**Storage Interface**: Abstract storage interface defined with in-memory implementation (MemStorage). The interface includes CRUD methods for user management but appears to be template code not actively used by the calculator functionality.

### Calculation Logic

**Client-Side Calculations**: All playback speed calculations occur in the browser using pure functions in `client/src/lib/calculations.ts`. The calculation converts time to seconds, divides by playback speed, and formats results back to HH:MM:SS format with time saved/lost indicators.

**Input Validation**: Zod schemas validate calculation inputs with constraints (hours: 0-999, minutes/seconds: 0-59, playback speed: 0.1-10).

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Complete suite of accessible, unstyled UI primitives (@radix-ui/react-*)
- **Shadcn UI**: Pre-built component patterns using Radix primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional class name utilities
- **Lucide React**: Icon library

### Form and Data Management
- **React Hook Form**: Form state management (@hookform/resolvers)
- **Zod**: Schema validation and type inference
- **TanStack Query**: Data fetching and caching (not actively used for server requests in current implementation)

### Database (Configured but Not Active)
- **Drizzle ORM**: TypeScript ORM configured for PostgreSQL
- **@neondatabase/serverless**: Neon serverless Postgres driver
- **drizzle-kit**: Database migrations and schema management
- The database configuration exists in `drizzle.config.ts` and schema in `shared/schema.ts`, but the application currently uses in-memory storage and doesn't require database connectivity for calculator functionality

### Development Tools
- **Vite**: Build tool and dev server with React plugin
- **@replit/vite-plugin-***: Replit-specific development plugins (cartographer, dev-banner, runtime-error-modal)
- **TypeScript**: Type checking with ESNext module resolution
- **esbuild**: Production build bundling for server code

### Date and Time
- **date-fns**: Date utility library (imported but minimal usage in current calculator implementation)

### Fonts
- **Google Fonts**: Inter font family loaded via CDN for typography