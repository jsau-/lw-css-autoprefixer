import { size } from '../../src/plugin/size';

describe('plugin/size', () => {
  it('Does not affect unexpected properties', () => {
    expect(size('foo', 'bar')).toBeUndefined();
  });

  it('Does not affect properties with irrelevant values', () => {
    expect(size('height', 'inherit')).toBeUndefined();
  });

  // TODO
});
