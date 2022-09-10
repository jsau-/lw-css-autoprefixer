import { filter } from '../../src/plugin/filter';

describe('plugin/filter', () => {
  it('Does not prefix if property vendor prefixed', () => {
    expect(filter('-webkit-filter', 'grayscale(0.5)')).toBeUndefined();
  });

  it('Adds prefixes to filter', () => {
    expect(filter('filter', 'grayscale(0.5)')).toEqual([
      ['-webkit-filter', 'grayscale(0.5)'],
    ]);
  });
});
