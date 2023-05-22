import { Vendor } from '../Vendor';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

const prefixableValues: Record<string, 1> = {
  'grab': 1,
  'grabbing': 1,
  'zoom-in': 1,
  'zoom-out': 1,
};

export const cursor: Plugin = (property, value) => {
  if (typeof value !== 'string' || property !== 'cursor') {
    return;
  }

  if (!prefixableValues[value]) {
    return;
  }

  return addVendorPrefixes(value, Vendor.moz_wk).map(v => [property, v]);
}
