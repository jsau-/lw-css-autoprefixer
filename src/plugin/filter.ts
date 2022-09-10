import { Vendor } from '../Vendor';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

const prefixMask = Vendor.webkit;

export const filter: Plugin = (property, value) => {
  if (property !== 'filter') {
    return;
  }

  return addVendorPrefixes(property, prefixMask).map((prefixedName) => [prefixedName, value]);
};
