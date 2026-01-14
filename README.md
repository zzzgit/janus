# eslint-config-janus

An opinionated ESLint configuration for modern JavaScript and TypeScript projects using ESLint 9+ flat config.

## Requirements

- Node.js >= 22.0.0
- npm >= 10.0.0  
- ESLint >= 9.9.0

## Installation

```bash
npm install --save-dev eslint-config-janus
```

## Usage

```javascript
// eslint.config.js
import janus from 'eslint-config-janus/js'

export default janus
```

### Available Configs

- `eslint-config-janus/js` - JavaScript
- `eslint-config-janus/node` - Node.js
- `eslint-config-janus/browser` - Browser
- `eslint-config-janus/ts` - TypeScript
- `eslint-config-janus/react` - React
- `eslint-config-janus/jest` - Jest
- `eslint-config-janus/mocha` - Mocha
- `eslint-config-janus/lit` - Lit
- `eslint-config-janus/array` - Array rules
- `eslint-config-janus/promise` - Promise rules
- `eslint-config-janus/security` - Security rules

## Key Features

- No `var`, prefer `const`
- No floating promises
- Tab indentation, single quotes, no semicolons
- Security checks (eval, buffer, child process)
- Array and promise best practices
- React prop validation and optimization

## Extending

```javascript
import janus from 'eslint-config-janus/js'

export default [
  ...janus,
  {
    rules: {
      'no-console': 'warn'
    }
  }
]
```

## License

LGPL-3.0-or-later

## Author

jonkee
