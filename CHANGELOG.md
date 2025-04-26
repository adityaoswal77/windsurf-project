# Changelog

## [Unreleased]

### Added

- [2025-04-26] Added Navbar component with home button, login/logout functionality
- [2025-04-26] Created investing dashboard page with sample investment card
- [2025-04-26] Added automatic redirect from /investing to /get-started page
- [2025-04-26 16:13] Added equity page with mock data and visualizations
  - Interactive charts using Recharts
  - Portfolio overview with value tracking
  - Vesting schedule visualization
  - Holdings table with detailed information
- [2025-04-26 17:42] Deployed application to Netlify with production Supabase configuration
  - Set up production environment variables
  - Configured Netlify deployment settings
  - Added build commands and Next.js plugin

### Changed

- [2025-04-26] Updated routing flow to skip login requirement:
  - Modified "Start investing" option to go directly to investing dashboard
  - Reorganized auth routes under /auth directory
  - Updated navigation paths in Navbar and get-started page
- [2025-04-26] Improved layout structure with persistent Navbar across pages
- [2025-04-26] Enhanced UI with consistent styling and animations
- [2025-04-26 16:13] Decided to use Supabase for backend services instead of custom implementation
- [2025-04-26 17:42] Updated security configuration:
  - Added production Supabase URL and anon key
  - Configured secure environment variables
  - Reviewed and validated credential security

### Fixed

- [2025-04-26] Fixed blank page issue at /investing with automatic redirect
- [2025-04-26] Resolved navigation issues in get-started page options

## [0.1.0] - Initial Release - 2025-04-26

### Initial Features

- Initial project setup with Next.js and TypeScript
- Basic routing structure
- Core UI components:
  - Button component with variants and loading state
  - Progress bar component with animations

### Dashboard Layout

- Created main dashboard layout
- Set up responsive grid system
- Integrated Framer Motion for smooth animations
- Added "Start New SPV" CTA button with navigation

### SPV Setup Wizard

- Created initial wizard structure
- Implemented first step with:
  - Basic information input
  - Deal summary input
- Added navigation between dashboard and wizard

### UI/UX

- Switched from Geist to system fonts for better performance
- Implemented consistent color scheme:
  - Primary: #0070f3
  - Secondary: #666
  - Accent: #fafafa
- Added CSS component classes for consistent styling
- Improved focus states and accessibility

### Infrastructure

- Set up client-side routing with Next.js App Router
- Configured TypeScript for type safety
- Integrated Tailwind CSS for styling
- Set up ESLint and Prettier
- Optimized Tailwind configuration for better maintainability
- Added support for CSS variables in Tailwind theme

### Bug Fixes

- Fixed button click issues with Framer Motion
- Resolved routing edge cases
- Fixed responsive layout issues on mobile devices
