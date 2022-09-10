import { Vendor } from '../Vendor';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

const prefixMask = Vendor.webkit;

export const backgroundClip: Plugin = (property, value) => {
  if (property !== 'background-clip') {
    return;
  }

  if (value !== 'text') {
    return;
  }

  return addVendorPrefixes(value, prefixMask).map(v => [property, v]);
}
