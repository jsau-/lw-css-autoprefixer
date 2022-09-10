# lw-css-prefixer

[![npm version](https://img.shields.io/npm/v/lw-css-prefixer.svg)](https://www.npmjs.com/package/lw-css-prefixer)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/lw-css-prefixer)](https://bundlephobia.com/package/lw-css-prefixer)
[![build status](https://github.com/jsau-/lw-css-prefixer/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/jsau-/lw-css-prefixer/actions/workflows/ci.yml)
[![npm downloads](https://img.shields.io/npm/dm/lw-css-prefixer.svg)](https://www.npmjs.com/package/lw-css-prefixer)

**NOTE: This project is under active development and is _not_ considered
stable for production use. Exposed APIs are liable to change in major
ways before a 1.0.0 release.**

A lightweight auto-prefixer for CSS properties and values. Intended for
runtime use, e.g. in CSS-in-JS libraries where inclusion of a
fully-fledged solution like
[Autoprefixer](https://github.com/postcss/autoprefixer) is too big an
impact on your overall bundle size.

```
npm i lw-css-prefixer
```

## Code Samples

### Converting a property/value pair to a CSS string

```ts
import { prefixer } from 'lw-css-prefixer';

/*
 * To ensure the impact on your bundle size is as small as possible
 * plugins and propertyPrefixes must be loaded separately.
 *
 * If you're particularly conscious of your own bundle size it may
 * be sensible to define your own property prefix and plugins list in
 * line with your own needs, only supporting the narrowest set possible.
 */
import { plugins } from 'lw-css-prefixer';
import { propertyPrefixes } from 'lw-css-prefixer';

const pfx = prefixer(plugins, propertyPrefixes);

// [['-webkit-align-content', 'inherit'], ['align-content', 'inherit']]
const styles = pfx('align-content', 'inherit');

// '-webkit-align-content:inherit;align-content:inherit;'
const style = styles.map(([prop, val]) => `${prop}:${val};`).join('');
```

### With [Goober](https://github.com/cristianbote/goober)

```ts
import { setup } from 'goober';
import { prefixer } from 'lw-css-prefixer';

/*
 * To ensure the impact on your bundle size is as small as possible
 * plugins and propertyPrefixes must be loaded separately.
 *
 * If you're particularly conscious of your own bundle size it may
 * be sensible to define your own property prefix and plugins list in
 * line with your own needs, only supporting the narrowest set possible.
 */
import { plugins } from 'lw-css-prefixer';
import { propertyPrefixes } from 'lw-css-prefixer';

setup(React.createElement, prefixer(plugins, propertyPrefixes));
```

## Links

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
