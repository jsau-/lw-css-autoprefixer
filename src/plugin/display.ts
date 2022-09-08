import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from './Plugin';

const replacements: Record<string, string[]> = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

export const display: Plugin = (property, value) => {
  if (property !== 'display') {
    return;
  }

  const replaceValueWith = replacements[value];

  if (!replaceValueWith) {
    return;
  }

  return replaceValueWith.map(v => [property, v]);
};
