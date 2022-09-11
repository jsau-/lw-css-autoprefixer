/**
 * Enum describing possible vendors we might want to apply prefixes to either
 * CSS properties or values for.
 *
 * Vendors values are ascending powers of two, allowing encoding information
 * about which vendors apply in a single number. Helper values have been defined
 * on the enum including all possible permutations to save you having to do the
 * bitwise operations yourself.
 *
 * @example ```ts
 * let numToTest = Vendor.none;
 *
 * const isNumberAffectedByVendor = (num: number, vendor: Vendor) => {
 *   return num & vendor;
 * };
 *
 * // false
 * isNumberAffectedByVendor(numToTest, Vendor.moz);
 *
 * numToTest |= Vendor.mz;
 *
 * // true
 * isNumberAffectedByVendor(numToTest, Vendor.moz);
 * ```
 */
export enum Vendor {
  /**
   * Mozilla, e.g. Firefox
   */
  moz = 1 << 0,
  /**
   * Microsoft, e.g. Internet Explorer, Edge
   */
  ms = 1 << 1,
  /**
   * Webkit, e.g. Google Chrome, Safari
   */
  wk = 1 << 2,
  /**
   * No vendors
   */
  none = 0,
  /**
   * All vendors
   */
  all = ~(~0 << 3),
  /**
   * Mozilla and Microsoft
   */
  moz_ms = Vendor.moz | Vendor.ms,
  /**
   * Mozilla and Webkit
   */
  moz_wk = Vendor.moz | Vendor.wk,
  /**
   * Microsoft and Webkit
   */
  ms_wk = Vendor.ms | Vendor.wk,
}
