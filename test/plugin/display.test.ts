import { display } from '../../src/plugin/display';

describe('plugin/display', () => {
  it('Does not prefix if property != display', () => {
    expect(display('foo', 'flex')).toBe(undefined);
  });

  it('Does not prefix unnecessary display property', () => {
    expect(display('display', 'inherit')).toBe(undefined);
  });

  it('Replaces display:flex', () => {
    expect(display('display', 'flex')).toEqual([
      ['display', '-webkit-box'],
      ['display', '-moz-box'],
      ['display', '-ms-flexbox'],
      ['display', '-webkit-flex'],
      ['display', 'flex'],
    ]);
  });

  it('Replaces display:inline-flex', () => {
    expect(display('display', 'inline-flex')).toEqual([
      ['display', '-webkit-inline-box'],
      ['display', '-moz-inline-box'],
      ['display', '-ms-inline-flexbox'],
      ['display', '-webkit-inline-flex'],
      ['display', 'inline-flex'],
    ]);
  });
});
