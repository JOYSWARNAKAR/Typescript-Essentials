# Using TypeScript with Node.js

This directory contains TypeScript exercises and examples that demonstrate core language concepts, working with Node.js tooling, making web requests, and building a small React application with Vite.

## Project Structure

```text
part2_using-node/
├── src/                 TypeScript concepts and Node.js examples
├── dist/                Compiled JavaScript, declarations, and source maps
├── reactts/             React 19 + TypeScript + Vite example app
├── package.json         Node.js scripts and dependencies
├── package-lock.json    npm dependency lockfile
└── tsconfig.json        Main TypeScript compiler configuration
```

## TypeScript Examples

The `src/` directory includes examples of:

- Primitive types and unions
- Arrays and enums
- Objects and interfaces
- Functions and generics
- Interfaces combined with generics
- Type narrowing
- Object-oriented programming
- Fetching data with the Web `fetch` API

The entry point is `src/index.ts`. Several files are independent examples that can be run directly or compiled with the TypeScript compiler.

## React TypeScript Example

The `reactts/` subdirectory is a Vite application using React 19 and TypeScript. It demonstrates typed components, props, state, forms, lists, and a custom data-fetching hook.

### React Structure

```text
reactts/
├── src/
│   ├── components/      Reusable typed React components
│   ├── hooks/           Custom React hooks
│   ├── App.tsx          Main application composition
│   ├── main.tsx         React entry point
│   └── types.ts         Shared TypeScript types
├── package.json
└── vite.config.ts
```

## Prerequisites

- Node.js and npm
- Bun, because the scripts in this directory use it to run JavaScript and TypeScript
- TypeScript is installed locally through npm dependencies

## Getting Started

Open this directory from the repository root:

```bash
cd part2_using-node
npm install
```

### Compile the Node/TypeScript examples

```bash
npm run dev
```

This runs `npx tsc` using `tsconfig.json`. Source files in `src/` compile into `dist/` as JavaScript and declaration files.

### Run the compiled entry point

```bash
npm start
```

The start script runs `dist/index.js` with Bun.

### Run an example directly with Bun

```bash
npm run fast
```

This runs `src/index.ts` directly with Bun.

### Run the React example

```bash
cd reactts
npm install
npm run dev
```

Then open the local URL printed by Vite.

Other React scripts:

```bash
npm run build    # Type-check and create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

## Compiler Settings

The main `tsconfig.json` uses:

- `strict` type checking
- `nodenext` modules
- `ESNext` output targets
- `src/` as the source directory
- `dist/` as the output directory
- Declaration and source-map generation
