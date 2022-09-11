import type { Plugin } from '../prefixer';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import { isVendorPrefixed } from '../util/isVendorPrefixed';
import { Vendor } from '../Vendor';

const regexp = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

export const gradient: Plugin = (property, value) => {
  if (isVendorPrefixed(value) || !regexp.test(value)) {
    return;
  }

  return addVendorPrefixes('', Vendor.moz_wk).map(
    (pfx) => [property, value.replace(regexp, (grad) => `${pfx}${grad}`)],
  );
};
