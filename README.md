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
- [TailwindCSS](https://tailwindcss.com/): Styling
- [Tanstack Query](https://tanstack.com/query/latest): State Management
- [Vite](https://vite.dev/): Frontend Tooling, Frontend Dev Server and Bundling
- [ESLint](https://eslint.org/): Linting
- [Biome](https://biomejs.dev/): Code formatting
