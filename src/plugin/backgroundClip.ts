import { CSSVendorBitmask } from '../CSSVendorBitmask';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from '../prefixer';

const prefixMask = CSSVendorBitmask.webkit;

export const backgroundClip: Plugin = (property, value) => {
  if (property !== 'background-clip') {
    return;
  }

  if (value !== 'text') {
    return;
  }

  return addVendorPrefixes(value, prefixMask).map(v => [property, v]);
}
