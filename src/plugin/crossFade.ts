import { CSSVendorBitmask } from '../CSSVendorBitmask';
import { isPropertyVendorPrefixed } from '../util/isPropertyVendorPrefixed';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from './Plugin';

const prefixMask = CSSVendorBitmask.webkit;

export const crossFade: Plugin = (property, value) => {
  if (
    !isPropertyVendorPrefixed(property) ||
    value.indexOf('cross-fade(') === -1
  ) {
    return;
  }

  return addVendorPrefixes(property, prefixMask).map((prefixedName) => [prefixedName, value]);
};
