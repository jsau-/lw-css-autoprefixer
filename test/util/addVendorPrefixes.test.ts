import { CSSVendorBitmask } from '../../src/CSSVendorBitmask';
import { addVendorPrefixes } from '../../src/util/addVendorPrefixes';

describe('util/addVendorPrefixes', () => {
  it('Returns empty for no matches', () => {
    expect(addVendorPrefixes('foo', CSSVendorBitmask.none)).toEqual([]);
  });

  it('Adds moz prefix', () => {
    expect(addVendorPrefixes('foo', CSSVendorBitmask.moz)).toEqual(['-moz-foo']);
  });

  it('Adds ms prefix', () => {
    expect(addVendorPrefixes('foo', CSSVendorBitmask.ms)).toEqual(['-ms-foo']);
  });

  it('Adds webkit prefix', () => {
    expect(addVendorPrefixes('foo', CSSVendorBitmask.webkit)).toEqual(['-webkit-foo']);
  });

  it('Adds moz and ms prefixes', () => {
    expect(addVendorPrefixes('foo', CSSVendorBitmask.moz_ms)).toEqual([
      '-moz-foo',
      '-ms-foo',
    ]);
  });

  it('Adds ms and webkit prefixes', () => {
    expect(addVendorPrefixes('foo', CSSVendorBitmask.ms_webkit)).toEqual([
      '-ms-foo',
      '-webkit-foo',
    ]);
  });

  it('Adds all prefixes', () => {
    expect(addVendorPrefixes('foo', CSSVendorBitmask.all)).toEqual([
      '-moz-foo',
      '-ms-foo',
      '-webkit-foo',
    ]);
  });
});
