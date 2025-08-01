# INDEC React Front 🚀

## Table of Contents

1. [Setup](#setup)
2. [Structure](#structure)
3. [Routes](#routes)
4. [Authentication](#authentication)
5. [Dependencies](#dependencies)
6. [Deployment](#deployment)
7. [Development](#development)

## Setup

Set up your environment variables for development:

```sh
cp _develop.env .env
```

Install dependencies and start the project:

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at [http://localhost:6011](http://localhost:6011).

## Structure

```
src/
  components/     # Shared components
  constants/      # Application constants
  context/        # React Context providers
  hooks/          # Custom React hooks
  pages/          # Application pages/routes
  routes/         # Route configuration
  services/       # API services and HTTP client
  utils/          # Utility functions
  styles.css      # Global styles
```

### Directory Details

- **components**: Reusable UI components shared across the application
- **constants**: Application-wide constants including API routes and app routes
- **context**: React Context providers for global state (token, user)
- **hooks**: Custom React hooks for common functionality
- **pages**: Page components that correspond to routes
- **routes**: Route definitions and authentication logic
- **services**: HTTP client configuration and API interaction
- **utils**: Helper functions and utilities

## Routes

Routes are managed in `src/routes/index.js`. The application uses:
- Protected routes that require authentication
- Public routes (login, maintenance)
- Automatic redirection based on authentication status

## Authentication

Authentication is handled through:
- **Token-based authentication**: Tokens are stored and managed via the `TokenProvider` context
- **Session management**: The `useSession` hook handles user sessions and token validation
- **URL token extraction**: Tokens can be passed via URL parameters (`?accessToken=`)
- **Automatic token cleanup**: Access tokens are removed from the URL after being stored

## Dependencies

Core dependencies:

- [React](https://reactjs.org) - UI library
- [React Router](https://reactrouter.com) - Client-side routing
- [@tanstack/react-query](https://tanstack.com/query) - Server state management
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [@indec/react-commons](https://github.com/indec-it/react-commons) - INDEC's component library
- [Axios](https://axios-http.com) - HTTP client
- [Webpack](https://webpack.js.org) - Module bundler and build tool

## Deployment

To build for production:

```sh
npm run build
```

This creates a `dist` folder with the production build.

To serve the production build:

```sh
node server.js
```

Or with PM2:

```sh
pm2 start server.js --name indec-front
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Style

The project uses:
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for styling
- Montserrat font family

### Environment Variables

Configure your `.env` file with the required variables:
- API endpoints
- Environment-specific configurations

### Styling

- Global styles are in `src/styles.css`
- The application uses Tailwind CSS with custom theme variables
- Montserrat font is configured as the default font family
- Styles from `@indec/react-commons` are imported globally