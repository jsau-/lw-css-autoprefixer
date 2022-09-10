export enum CSSVendorBitmask {
  moz = 1 << 0,
  ms = 1 << 1,
  webkit = 1 << 3,
  none = 0,
  all = ~(~0 << 4),
  moz_ms = CSSVendorBitmask.moz | CSSVendorBitmask.ms,
  moz_webkit = CSSVendorBitmask.moz | CSSVendorBitmask.webkit,
  ms_webkit = CSSVendorBitmask.ms | CSSVendorBitmask.webkit,
};

export type CSSVendor = Exclude<
  keyof typeof CSSVendorBitmask,
  'all' | 'moz_ms' | 'moz_webkit' | 'ms_webkit'
>;
