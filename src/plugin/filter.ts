import { CSSVendorBitmask } from '../CSSVendorBitmask';
import { isPropertyVendorPrefixed } from '../util/isPropertyVendorPrefixed';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from './Plugin';

const prefixMask = CSSVendorBitmask.webkit;

export const filter: Plugin = (property, value) => {
  if (
    !isPropertyVendorPrefixed(property) ||
    value.indexOf('filter(') === -1
  ) {
    return;
  }

  return addVendorPrefixes(property, prefixMask).map((prefixedName) => [prefixedName, value]);
};
