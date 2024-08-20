# TS, React and Tailwind

Opinionated, easy to use and scalable boilerplate for your next project.

## Features

- Elements separated into directories: features, pages, ui, everything is separated;
- UI developed around Atomic Design;
- Linting and formatting using ESLint and Prettier;
- Storybook for comfortable UI development;
- Tailwind for styling;
- React Router for routing;
- React Query for API communication;
- Code generation with Plop;
- Tests using Vitest and React Testing Library;
- E2E tests using Playwright;
- Code examples for pages, features and UI.

## Getting started

1. Clone the repository:

```bash
~ git clone git@github.com:tomekbuszewski/ts-react-starter-v2.git;
~ cd ts-react-starter-v2;
```

2. Install dependencies:

```bash
~ npm i
```

3. PROFIT

```bash
~ npm run dev;
### OR
~ npm run build && npm run preview;
```

## Important scripts

- `dev` - starts the development server;
- `build` - builds the project;
- `build:mocks` - builds the project with MSW mocks;
- `preview` - previews the build;
- `storybook` - starts Storybook;
- `generate:*` - starts Plop and generates chosen element;

## Structure

```
├── README.md
├── config                      # Configuration files
│   ├── consts.ts
│   ├── plop                    # Plop generators
│   └── test.setup.ts
├── e2e                         # E2E tests
│   └── ApiPage.test.ts
├── eslint.config.js
├── index.html
├── mocks                       # Mocks for tests
│   ├── browser.ts
│   ├── handlers.ts
│   └── node.ts
├── package-lock.json
├── package.json
├── playwright.config.ts
├── plopfile.mjs
├── postcss.config.js
├── prettier.config.mjs
├── public                      # Public files
│   ├── mockServiceWorker.js
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── features                # Features
│   │   └── index.ts
│   ├── hooks                   # Hooks
│   │   └── index.ts
│   ├── main.tsx
│   ├── pages                   # Pages
│   │   ├── index.ts
│   │   └── lazy.tsx
│   ├── providers               # Providers
│   │   └── index.ts
│   ├── style.css
│   ├── ui                      # UI components
│   │   ├── atoms
│   │   │   └── index.ts
│   │   ├── molecules
│   │   │   └── index.ts
│   │   ├── organisms
│   │   │   └── index.ts
│   │   └── views
│   │       └── index.ts
│   ├── utils                   # Utils
│   │   ├── index.ts
│   └── vite-env.d.ts
├── storybook                   # Storybook
│   ├── main.ts
│   └── preview.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
