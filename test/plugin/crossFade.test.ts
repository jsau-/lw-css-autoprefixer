import { crossFade } from '../../src/plugin/crossFade';

describe('plugin/crossFade', () => {
  it('Does not prefix if property vendor prefixed', () => {
    expect(crossFade('foo', '-webkit-cross-fade(100% - 50px)')).toBeUndefined();
  });

  it('Adds prefixes to crossFade calls', () => {
    expect(crossFade('foo', 'cross-fade(100% - 50px)')).toEqual([
      ['foo', '-webkit-cross-fade(100% - 50px)'],
    ]);
  });
});
