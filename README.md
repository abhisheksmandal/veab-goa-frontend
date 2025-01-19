# VEAB Goa Frontend

Frontend application for VEAB Goa project built with React and Vite.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/abhisheksmandal/veab-goa-frontend.git
cd veab-goa-frontend
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```

This will start the Vite development server with hot module replacement (HMR).

## Building for Production

To create a production build:
```bash
npm run build
```

The built files will be available in the `dist` directory.

## Project Structure

```
veab-goa-frontend/
├── public/           # Static assets
├── src/             # Source code
├── index.html       # Entry HTML file
├── vite.config.js   # Vite configuration
└── package.json     # Project dependencies and scripts
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## ESLint Configuration

The project uses ESLint for code quality. Configuration can be found in `eslint.config.js`.

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request
