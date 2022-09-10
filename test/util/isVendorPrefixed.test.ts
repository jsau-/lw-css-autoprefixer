import { isVendorPrefixed } from '../../src/util/isVendorPrefixed';
import { vendorPrefixes } from '../../src/util/vendorPrefixes';

describe('util/isVendorPrefixed', () => {
  it('Returns false if not vendor prefixed', () => {
    expect(isVendorPrefixed('foo')).toBe(false);
  });

  it('Returns true if vendor prefixed', () => {
    const prefixes = Object.keys(vendorPrefixes).map(
      (vendor) => vendorPrefixes[vendor as keyof typeof vendorPrefixes],
    );

    expect.assertions(prefixes.length);

    prefixes.forEach((prefix) => {
      expect(isVendorPrefixed(`${prefix}foo`)).toBe(true);
    });
  });
});
