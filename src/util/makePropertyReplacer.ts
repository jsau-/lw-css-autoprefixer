import type { Plugin } from '../prefixer';

export const makePropertyReplacer = (replacements: Record<string, string[]>): Plugin => (property, value) => {
  if (!replacements[property]) {
    return;
  }

  return replacements[property].map((replacementProperty) => [
    replacementProperty,
    value,
  ]);
};
