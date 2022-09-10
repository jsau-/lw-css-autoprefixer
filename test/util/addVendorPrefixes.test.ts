import { Vendor } from '../../src/Vendor';
import { addVendorPrefixes } from '../../src/util/addVendorPrefixes';

describe('util/addVendorPrefixes', () => {
  it('Returns empty for no matches', () => {
    expect(addVendorPrefixes('foo', Vendor.none)).toEqual([]);
  });

  it('Adds moz prefix', () => {
    expect(addVendorPrefixes('foo', Vendor.moz)).toEqual(['-moz-foo']);
  });

  it('Adds ms prefix', () => {
    expect(addVendorPrefixes('foo', Vendor.ms)).toEqual(['-ms-foo']);
  });

  it('Adds webkit prefix', () => {
    expect(addVendorPrefixes('foo', Vendor.wk)).toEqual(['-webkit-foo']);
  });

  it('Adds moz and ms prefixes', () => {
    expect(addVendorPrefixes('foo', Vendor.moz_ms)).toEqual([
      '-moz-foo',
      '-ms-foo',
    ]);
  });

  it('Adds ms and webkit prefixes', () => {
    expect(addVendorPrefixes('foo', Vendor.ms_wk)).toEqual([
      '-ms-foo',
      '-webkit-foo',
    ]);
  });

  it('Adds all prefixes', () => {
    expect(addVendorPrefixes('foo', Vendor.all)).toEqual([
      '-moz-foo',
      '-ms-foo',
      '-webkit-foo',
    ]);
  });
});
