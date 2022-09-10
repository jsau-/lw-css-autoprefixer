# lw-css-prefixer

[![npm version](https://img.shields.io/npm/v/lw-css-prefixer.svg)](https://www.npmjs.com/package/lw-css-prefixer)
[![build status](https://github.com/jsau-/lw-css-prefixer/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/jsau-/lw-css-prefixer/actions/workflows/ci.yml)
[![npm downloads](https://img.shields.io/npm/dm/lw-css-prefixer.svg)](https://www.npmjs.com/package/lw-css-prefixer)

**NOTE: This project is under active development and is _not_ considered
stable for production use.**

A lightweight auto-prefixer for CSS properties and values.

```
npm i lw-css-prefixer
```

```ts
import { plugins } from 'lw-css-prefixer';
import { prefixer } from 'lw-css-prefixer';
import { propertyPrefixes } from 'lw-css-prefixer';

const pfx = prefixer(plugins, propertyPrefixes);

// [['-webkit-align-content', 'inherit'], ['align-content', 'inherit']]
const styles = pfx('align-content', 'inherit');

// '-webkit-align-content:inherit;align-content:inherit;'
const style = styles.map(([prop, val]) => `${prop}:${val};`).join('');
```

* [Documentation](https://jsau-.github.io/lw-css-prefixer)
* [Code Coverage Report](https://jsau-.github.io/lw-css-prefixer/coverage/lcov-report)
* [Unit Test Report](https://jsau-.github.io/lw-css-prefixer/coverage/test_report.html)

## Intended Browser Support

* IE10+
* Edge 12+
* Chrome 17+
* Firefox 17+
* Safari 6+

## Contributing

While contributions are appreciated, they may be rejected if not in line
with the intended project direction. It's recommended to check before
undertaking a major piece of work and/or refactoring.

Contributions should be based off the `develop` branch, and any pull
requests made into `develop`.

### Useful Snippets

```
// Install dependencies
npm ci

// Run tests
npm run lint
npm run test

// Build the library
npm run build
```

## Feedback and Support

For suggestions, issues, and/or support raise a GitHub issue!
