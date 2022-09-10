import { Vendor } from '../Vendor';
import { isVendorPrefixed } from '../util/isVendorPrefixed';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

export const crossFade: Plugin = (property, value) => {
  if (
    isVendorPrefixed(value) ||
    value.indexOf('cross-fade(') === -1
  ) {
    return;
  }

  return addVendorPrefixes(value, Vendor.wk).map((prefixedVal) => [property, prefixedVal]);
};
