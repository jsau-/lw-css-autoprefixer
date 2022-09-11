import { Vendor } from '../Vendor';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

export const propertiesThatPrefixProperty: Record<string, 1> = {
  'column-width': 1,
};

export const propertiesThatPrefixValue: Record<string, 1> = {
  height: 1,
  'max-height': 1,
  'max-width': 1,
  'min-height': 1,
  'min-width': 1,
  width: 1,
};

export const valueReplacements: Record<string, 1> = {
  'fill-available': 1,
  'fit-content': 1,
  'max-content': 1,
  'min-content': 1,
};

export const size: Plugin = (property, value) => {
  const shouldPrefixProperty = !!propertiesThatPrefixProperty[property];
  const shouldPrefixValue = !!propertiesThatPrefixValue[property] && !!valueReplacements[value];

  if (shouldPrefixProperty) {
    return addVendorPrefixes(property, Vendor.moz_wk).map((prefixedProperty) => [prefixedProperty, value]);
  } else if (shouldPrefixValue) {
    /*
     * Firefox uses `-moz-available`.
     */
    if (value === 'fill-available') {
      return addVendorPrefixes('available', Vendor.moz)
        .concat(addVendorPrefixes(value, Vendor.wk))
        .map((prefixedVal) => [property, prefixedVal]);
    }

    return addVendorPrefixes(value, Vendor.moz_wk).map((prefixedVal) => [property, prefixedVal]);
  }
};
