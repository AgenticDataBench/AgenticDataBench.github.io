# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AgenticDataBench is a Vue 3 + TypeScript static website that serves as the homepage for a data agent benchmark. It displays benchmark information, evaluation modes, news, dataset details, submission guidelines, and a leaderboard.

## Commands

```bash
npm run dev      # Start development server with hot reload
npm run build   # Type check with vue-tsc and build for production
npm run preview # Preview production build locally
npm run deploy  # Build and deploy to GitHub Pages via gh-pages
```

## Architecture

The application uses Vue 3 with Composition API (`<script setup>`), Vue Router, and Ant Design Vue component library.

### Structure

- `src/main.ts` - Application entry point, sets up Vue app with router and Ant Design
- `src/App.vue` - Root layout component with header/footer
- `src/router/index.ts` - Vue Router configuration (hash history mode)
- `src/views/Home.vue` - Main page with hero, sections, and leaderboard sidebar
- `src/components/Leaderboard.vue` - Ant Design Table component for displaying benchmark results
- `src/types/index.ts` - TypeScript interfaces (`LeaderboardEntry`)
- `src/assets/styles/global.css` - Global styles with CSS custom properties (`:root`)
- `public/leaderboard.json` - Static JSON data for leaderboard entries

### Data Flow

Leaderboard data is loaded client-side from `public/leaderboard.json` via `fetch()` in the `onMounted` hook of `Home.vue`. The JSON is typed via the `LeaderboardEntry` interface.

### Routing

Uses hash history (`createWebHashHistory`) - routes are `/` for home, with a catch-all redirect to home.