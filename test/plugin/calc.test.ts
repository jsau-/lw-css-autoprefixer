import { calc } from '../../src/plugin/calc';

describe('plugin/calc', () => {
  it('Does not prefix if property vendor prefixed', () => {
    expect(calc('foo', '-webkit-calc(100% - 50px)')).toBeUndefined();
  });

  it('Adds prefixes to calc calls', () => {
    expect(calc('foo', 'calc(100% - 50px)')).toEqual([
      ['foo', '-moz-calc(100% - 50px)'],
      ['foo', '-webkit-calc(100% - 50px)'],
    ]);
  });
});
