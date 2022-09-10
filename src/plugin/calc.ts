import { Vendor } from '../Vendor';
import { isVendorPrefixed } from '../util/isVendorPrefixed';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

const prefixMask = Vendor.moz_webkit;

export const calc: Plugin = (property, value) => {
  if (
    isVendorPrefixed(value) ||
    value.indexOf('calc(') === -1
  ) {
    return;
  }

  return addVendorPrefixes(value, prefixMask).map((prefixedVal) => [property, prefixedVal]);
};
