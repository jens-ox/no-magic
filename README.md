# no magic

Fullstack setup with as little hidden complexity as possible.

## Development

- `bun install`
- `bun run dev` starts the backend on port 3000 and the frontend on port 5173. Alternatively, you can run `bun dev` in the frontend and backend directory separately.

## Deployment

- `bun run build` generates build artifacts for the frontend and backend in `dist`.
- `bun run start` starts the backend, which also serves the frontend.

## Tech Stack

- [Hono](https://hono.dev/): Backend API framework
- [React](https://react.dev/)
- [Tanstack Router](https://tanstack.com/router/latest): Routing
- [TailwindCSS](https://tailwindcss.com/): Styling
- [Tanstack Query](https://tanstack.com/query/latest): State Management
- [Vite](https://vite.dev/): Frontend Tooling, Frontend Dev Server and Bundling
- [ESLint](https://eslint.org/): Linting
- [Biome](https://biomejs.dev/): Code formatting

## Why?

- Easy to understand what's happening: No Server Actions etc, where the separation between backend and frontend is unclear.
- Easy to deploy: Only four files are needed - `index.js` is the backend, `index.html` together with one `js` and one `css` file is the frontend.
- Easy to use: Only one command (`bun run dev`) to develop, only one command (`bun run build`) to build.