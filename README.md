# Ecommerce Website (PKSHOP)

This repository contains the source code for an e-commerce web application built with React, Vite, TypeScript, and Tailwind CSS.

## Project Structure

- `src/` - Main application source code
  - `components/` - Reusable React components (cards, modals, navbar, etc.)
  - `pages/` - Page components (Home, Cart) with search/filter UI and order summary
  - `context/` - React context providers (`CartContext`, `ToastContext`, `ThemeContext`)
  - `data/` - Static data files (e.g., product list)

## Getting Started

This version includes UI enhancements to make the site presentation-ready:

- Dark mode with toggle (persists preference & respects system setting)
- Toast notifications for cart actions
- Product detail modal for a closer look
- Responsive cards, dark/light styling and animations using Tailwind CSS
- Improved hero section with emphasis card
- Local storage persistence for cart and theme

These updates make the project more polished and easier to demo.


1. Install dependencies:
   ```bash
   npm install
   # if you run into missing Tailwind plugins, install:
   npm install -D @tailwindcss/line-clamp
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Gitignore

Unnecessary files and folders are ignored via `.gitignore` to keep the repository clean (node_modules, logs, build output, environment files, etc.).

## License

Specify your license here.
