import type { Plugin } from '../prefixer';
import { Vendor } from '../Vendor';
import { addVendorPrefixes } from './addVendorPrefixes';
import { isVendorPrefixed } from './isVendorPrefixed';

export const makeFunctionPlugin = (
  vendor: Vendor,
  regexp: RegExp,
  functionLiteralToFirstBracket: string,
): Plugin => (property, value) => {
  if (
    isVendorPrefixed(value) ||
    value.indexOf(functionLiteralToFirstBracket) === -1
  ) {
    return;
  }

  return addVendorPrefixes('', vendor).map(
    (pfx) => [property, value.replace(
      regexp,
      `${pfx}${functionLiteralToFirstBracket}`,
    )],
  );
};
