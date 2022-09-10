import { Vendor } from '../Vendor';
import { vendorPrefixes } from './vendorPrefixes';

/**
 * Prefix a given string with vendor-specific prefixes.
 *
 * @example ```ts
 * // ['-moz-hello-world', '-ms-hello-world']
 * addVendorPrefixes('hello-world', Vendor.moz_ms);
 *
 * // []
 * addVendorPrefixes('hello-world', Vendor.none);
 * ```
 *
 * @param toPrefix - The value which we want to prefix with relevant standard
 * vendor prefixes.
 * @param bitmask - The bitmask denoting the set of vendors we want to apply
 * prefixes for.
 * @returns An array containing the provided string prefixed with all relevant
 * vendor prefixes (note that this does **not** include the provided unprefixed
 * string).
 */
export const addVendorPrefixes = (toPrefix: string, bitmask: Vendor) => {
  const toReturn: string[] = [];

  Object.keys(vendorPrefixes).forEach((vendor) => {
    if (bitmask & Vendor[vendor as keyof typeof vendorPrefixes]) {
      toReturn.push(
        `${vendorPrefixes[vendor as keyof typeof vendorPrefixes]}${toPrefix}`
      );
    }
  });

  return toReturn;
};
