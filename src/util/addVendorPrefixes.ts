import { CSSVendorBitmask } from '../CSSVendorBitmask';
import { vendorPrefixes } from './vendorPrefixes';

export const addVendorPrefixes = (toPrefix: string, bitmask: CSSVendorBitmask) => {
  let toReturn: string[] = [];

  Object.keys(vendorPrefixes).forEach((vendor) => {
    if (bitmask & CSSVendorBitmask[vendor as keyof typeof vendorPrefixes]) {
      toReturn.push(
        `${vendorPrefixes[vendor as keyof typeof vendorPrefixes]}${toPrefix}`
      );
    }
  });

  return toReturn;
};
