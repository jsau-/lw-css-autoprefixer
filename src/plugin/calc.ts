import { CSSVendorBitmask } from '../CSSVendorBitmask';
import { isPropertyVendorPrefixed } from '../util/isPropertyVendorPrefixed';
import { prefixedProperties } from '../util/prefixProperty';
import type { Plugin } from './Plugin';

const prefixMask = CSSVendorBitmask.moz_webkit;

export const calc: Plugin = (property, value) => {
  if (!isPropertyVendorPrefixed(property) || value.indexOf('calc(') === -1) {
    return
  }

  return prefixedProperties(property, prefixMask).map((prefixedName) => [prefixedName, value]);
};
