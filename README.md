# TypeScript Learning 

This repository contains a collection of TypeScript concepts and examples. The content is organized into separate modules for easier learning and practice.

## Overview

- Part 1: Introduction to TypeScript basics
- Part 2: Using TypeScript with Node.js and a React + TypeScript app
- Part 3: Using TypeScript with Bun

## Project Structure

```text
udemy-typescript/
├── README.md
├── note.txt
├── part1_Intro/
│   └── basic.ts
├── part2_using-node/
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── ArrayEnum.ts
│   │   ├── fetchReq.ts
│   │   ├── functionTs.ts
│   │   ├── index.ts
│   │   ├── interface.ts
│   │   ├── interfaceAndGenerics.ts
│   │   ├── moreTypes.ts
│   │   ├── objectTS.ts
│   │   ├── oop.ts
│   │   ├── typeNarrowing.ts
│   │   ├── typesInTs.ts
│   │   ├── unionAndany.ts
│   │   └── webReq.ts
│   └── reactts/
│       ├── package.json
│       ├── tsconfig.json
│       ├── tsconfig.app.json
│       ├── tsconfig.node.json
│       ├── vite.config.ts
│       ├── index.html
│       ├── public/
│       └── src/
│           ├── App.css
│           ├── App.tsx
│           ├── index.css
│           ├── main.tsx
│           └── components/
│               └── ChaiCard.tsx
└── part3_using-ts-with-bun/
    ├── index.ts
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

## Getting Started

### 1. Part 1: Basics
Navigate to the folder and run the TypeScript file directly using the TypeScript compiler or your preferred setup.

### 2. Part 2: Node + React TypeScript
Inside the part2_using-node folder:

```bash
npm install
npm run dev
```

To work with the React + TypeScript app:

```bash
cd part2_using-node/reactts
npm install
npm run dev
```

### 3. Part 3: Bun
Inside the part3_using-ts-with-bun folder:

```bash
bun install
bun run index.ts
```

## Notes

This project is mainly for learning purposes and demonstrates how TypeScript can be used in different environments such as plain Node.js, React, and Bun.
---