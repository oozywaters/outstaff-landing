# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an outstaff landing page built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint code
npm run lint
```

## Architecture

### Next.js App Router Structure
- **app/layout.tsx**: Root layout with metadata, font configuration (Geist Sans & Geist Mono), and global styles
- **app/page.tsx**: Home page component
- **app/globals.css**: Global styles with Tailwind directives

### TypeScript Configuration
- Path alias `@/*` maps to root directory for cleaner imports
- Target: ES2017
- Strict mode enabled
- JSX: react-jsx (new JSX transform)

### Styling
- Tailwind CSS 4 configured via PostCSS plugin (`@tailwindcss/postcss`)
- No separate `tailwind.config.js` - Tailwind 4 uses CSS-based configuration
- Dark mode support via `dark:` class variants

### ESLint
- Uses Next.js flat config format with `defineConfig`
- Includes `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Conventions

- Font variables are configured in root layout and applied via CSS custom properties (`--font-geist-sans`, `--font-geist-mono`)
- Page components are server components by default (App Router)
- Use `next/image` for optimized images
- Use `next/font/google` for font optimization
