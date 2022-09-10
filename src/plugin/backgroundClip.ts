import { Vendor } from '../Vendor';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

export const backgroundClip: Plugin = (property, value) => {
  if (property !== 'background-clip' || value !== 'text') {
    return;
  }

  return addVendorPrefixes(property, Vendor.all).map(prefixedProperty => [prefixedProperty, value]);
}
