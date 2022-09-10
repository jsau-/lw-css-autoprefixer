import { CSSVendorBitmask } from '../CSSVendorBitmask';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

const prefixMask = CSSVendorBitmask.webkit;

export const filter: Plugin = (property, value) => {
  if (property !== 'filter') {
    return;
  }

  return addVendorPrefixes(property, prefixMask).map((prefixedName) => [prefixedName, value]);
};
