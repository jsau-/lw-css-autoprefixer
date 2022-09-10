import { vendorPrefixes } from './vendorPrefixes';

/**
 * Gets whether a given property begins with a standard vendor prefix. May be
 * used e.g. in a plugin to decide to skip any further work.
 *
 * @example ```ts
 * // false
 * isVendorPrefixed('hello-world');
 *
 * // true
 * isVendorPrefixed('-moz-hello-world');
 * ```
 *
 * @param str - Property to check to see if it begins with a standard
 * vendor prefix.
 * @returns Is the provided property prefixed with a standard vendor prefix?
 */
export const isVendorPrefixed = (str: string) => {
  const allPrefixes = Object.keys(vendorPrefixes).map(
    (pfx) => vendorPrefixes[pfx as keyof typeof vendorPrefixes],
  );

  const regexp = new RegExp(`^${allPrefixes.join('|')}`);

  return regexp.test(str);
};
