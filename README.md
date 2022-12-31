[[_TOC_]]

# Adasa Website Template

This webite is a [Next.js](https://nextjs.org/) template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Before you start

Please make sure you have the followings:

- [Node v15](https://nodejs.org/en/download/) or higher
- [Yarn](https://yarnpkg.com/getting-started/install) (package manager)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (VSCode extension for linting)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (VSCode extension for code formatting)

Recommended:

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) (VSCode extension for seeing who screw up)
- [Path intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) (VSCode extension for autocompleting import)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) (VSCode extension for giving icons to each file type)

# Getting Started

First, run the development server:

```sh
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file. Please make sure to read the README.md within each file before creating/updating any code.

# Technical stack

## Front-end

- **[`TypeScript`](https://www.typescriptlang.org)** - A typed superset of JavaScript that compiles to plain JavaScript
- **[`Next.js`](https://nextjs.org)** - A modern server side rendering for React application
- **[`sass`](https://sass-lang.com/)** : `^1.49.9`
- **[`axios`](https://www.npmjs.com/package/axios)** : `^0.26.1`
- **[`date-fns`](https://www.npmjs.com/package/date-fns)** : `2.28.0`
- **`dotenv`** : `^16.0.0`
- **`lodash`** : `^4.17.21`
- **`next`** : `12.1.0`
- **`react`** : `17.0.2`
- **`react-dom`**: `17.0.2`

## Test

- **[`cypress`](https://www.cypress.io/)** End to End testing
- **[`jest`](https://jestjs.io/)** JavaScript Testing Framework
