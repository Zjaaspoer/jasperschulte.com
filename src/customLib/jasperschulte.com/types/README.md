# TypeScript Types for Portfolio.js

This directory contains TypeScript type definitions for the `portfolio.js` exports, allowing you to get full TypeScript support with minimal changes to your existing JavaScript project.

## What's Included

- **`portfolio.d.ts`** - Complete type definitions for all portfolio exports
- **`src/types/global.d.ts`** - Asset import declarations for portfolio.js
- **`portfolio-validator.ts`** - TypeScript validator that provides strict type checking

## Type Checking

The portfolio data is validated against the TypeScript types using `src/portfolio-validator.ts`. This provides strict type checking for all portfolio objects.

To check your TypeScript files for type errors:

```bash
npm run compile
```

For continuous monitoring in watch mode:

```bash
npm run develop
```

### How It Works

The `portfolio-validator.ts` file imports the entire export from `portfolio.js` and validates it against the `Portfolio` interface. This ensures:

- All objects match their expected types
- All properties have correct types (e.g., `userName` must be string, not boolean)
- No missing or extra properties
- Nested objects are properly structured

```typescript
import * as portfolioData from './portfolio'
import type { Portfolio } from './customLib/jasperschulte.com/types/portfolio'

const portfolio: Portfolio = portfolioData // Validates entire export
```

The validator provides all the type checking we need, so no module declarations are required in the type definitions.
