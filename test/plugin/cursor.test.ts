import { cursor } from '../../src/plugin/cursor';

describe('plugin/cursor', () => {
  it('Does not prefix if property != cursor', () => {
    expect(cursor('foo', 'grab')).toBeUndefined();
  });

  it('Does not prefix if irrelevant property', () => {
    expect(cursor('cursor', 'inherit')).toBeUndefined();
  });

  it('Prefixes cursor:grab', () => {
    expect(cursor('cursor', 'grab')).toEqual([
      ['cursor', '-moz-grab'],
      ['cursor', '-webkit-grab'],
    ]);
  });

  it('Prefixes cursor:grabbing', () => {
    expect(cursor('cursor', 'grabbing')).toEqual([
      ['cursor', '-moz-grabbing'],
      ['cursor', '-webkit-grabbing'],
    ]);
  });

  it('Prefixes cursor:zoom-in', () => {
    expect(cursor('cursor', 'zoom-in')).toEqual([
      ['cursor', '-moz-zoom-in'],
      ['cursor', '-webkit-zoom-in'],
    ]);
  });

  it('Prefixes cursor:zoom-out', () => {
    expect(cursor('cursor', 'zoom-out')).toEqual([
      ['cursor', '-moz-zoom-out'],
      ['cursor', '-webkit-zoom-out'],
    ]);
  });
});
