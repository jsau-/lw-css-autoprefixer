import { vendorPrefixes } from './vendorPrefixes';

export const isPropertyVendorPrefixed = (property: string) => {
  const allPrefixes = Object.keys(vendorPrefixes).map(
    (prefix) => vendorPrefixes[prefix as keyof typeof vendorPrefixes],
  );

  const regexp = new RegExp(`^${allPrefixes.join('|')}/`);

  return regexp.test(property);
};
