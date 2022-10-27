## Tic Tac Toe

### Tech stack

-   [Next.js](https://nextjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [SCSS-Sassy CSS](https://sass-lang.com/)
-   Data storage is a combination of [React Context API](https://reactjs.org/docs/context.html) and `localStorage`
-   [eslint](https://eslint.org/)
-   [Jest](https://jestjs.io/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

### Development

```bash
npm run dev
```

Starts the application in development mode with hot-code reloading

### Build

```bash
npm run build
```

Creates an optimized production build of your application. The output displays information about each route.

### Start

```bash
npm run start
```

Starts the application in production mode. The application should be compiled with `npm run build` first.

### Test

```bash
npm run test

npm run test path/to/fileB.test.tsx
```

Run all tests. To run only the tests that were specified with a pattern or filename, you add the relative path to the script

### Lint

```bash
npm run lint
```

Runs `ESLint` for all files in the pages, components, and lib directories.
