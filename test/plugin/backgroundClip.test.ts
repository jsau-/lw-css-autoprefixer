import { backgroundClip } from '../../src/plugin/backgroundClip';

describe('plugin/backgroundClip', () => {
  it('Does not prefix if property != background-clip', () => {
    expect(backgroundClip('not-background-clip', 'text')).toBeUndefined();
  });

  it('Does not prefix if value != text', () => {
    expect(backgroundClip('background-clip', 'not-text')).toBeUndefined();
  });

  it('Prefixes background-clip: text', () => {
    expect(backgroundClip('background-clip', 'text')).toEqual([
      ['background-clip', '-webkit-text'],
    ]);
  });
});
