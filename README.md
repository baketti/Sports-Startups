# Sports startups

## Overview
### Final exam for Start2Impact university's typescript course
This project is a simple TypeScript application that defines and implements interfaces and classes for three models: `Startup`, `Cittadino`, and `Incentivo`. The primary goal of this project is to demonstrate how to create and use TypeScript interfaces and classes effectively.

## Project Structure
The project consists of the following interfaces and classes:

- **Startup**: Represents an innovative startup in the sports sector.
- **Cittadino**: Represents a citizen interested in participating in startups activities promoted by incentives.
- **Incentivo**: Represents state incentives aimed at promoting physical activity and sports.

## Installation
To run this project, you need to have Node.js and TypeScript installed on your machine. If TypeScript is not installed globally, you can install it using the following command:

```bash
npm install -g typescript
```
The other one dependency is chalk to color logs.
```bash
npm install chalk
```

## Scripts
The project contains the following npm scripts:

- `dev`: This script uses `tsx` to watch for changes in your TypeScript files and automatically recompile them. It is useful for development purposes.
```bash
  npm run dev
```

- `build`: This script compiles the TypeScript files into JavaScript using the `tsconfig.json` configuration. It compiles `.ts` files into `.js` files in the `dist` folder. The executable file will be `index.js`.
```bash
  npm run build
```

- `start`: This script runs the compiled `index.js` file within  `dist` folder
```bash
  npm start
```
