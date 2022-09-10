import { Vendor } from '../Vendor';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

export const affectedProperties: Record<string, 1> = {
  'column-width': 1,
  height: 1,
  'max-height': 1,
  'max-width': 1,
  'min-height': 1,
  'min-width': 1,
  width: 1,
};

export const valueReplacements: Record<string, 1> = {
  'contain-floats': 1,
  'fill-available': 1,
  'fit-content': 1,
  'max-content': 1,
  'min-content': 1,
};

export const size: Plugin = (property, value) => {
  if (!affectedProperties[property] || !valueReplacements[value]) {
    return;
  }

  return addVendorPrefixes(value, Vendor.moz_wk).map((prefixedVal) => [property, prefixedVal]);
};
