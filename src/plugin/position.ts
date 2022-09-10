import { Plugin } from '../prefixer';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import { Vendor } from '../Vendor';

export const position: Plugin = (property, value) => {
  if (property !== 'position' || value !== 'sticky') {
    return;
  }

  return addVendorPrefixes(value, Vendor.wk).map((prefixedVal) => [property, prefixedVal]);
};
