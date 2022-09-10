import { CSSVendorBitmask } from '../CSSVendorBitmask';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

const prefixMask = CSSVendorBitmask.moz_webkit;

const prefixableValues: Record<string, 1> = {
  'grab': 1,
  'grabbing': 1,
  'zoom-in': 1,
  'zoom-out': 1,
};

export const cursor: Plugin = (property, value) => {
  if (property !== 'cursor') {
    return;
  }

  if (!prefixableValues[value]) {
    return;
  }

  return addVendorPrefixes(value, prefixMask).map(v => [property, v]);
}
