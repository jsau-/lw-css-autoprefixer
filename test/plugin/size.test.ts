import { affectedProperties, size, valueReplacements } from '../../src/plugin/size';

describe('plugin/size', () => {
  it('Does not affect unexpected properties', () => {
    expect(size('foo', 'bar')).toBeUndefined();
  });

  it('Does not affect properties with irrelevant values', () => {
    expect(size('height', 'inherit')).toBeUndefined();
  });

  it('Replaces expected properties', () => {
    const props = Object.keys(affectedProperties);
    const vals = Object.keys(valueReplacements);

    expect.assertions(props.length * vals.length);

    props.forEach((prop) => {
      vals.forEach((val) => {
        expect(size(prop, val)).toEqual([
          [prop, `-moz-${val}`],
          [prop, `-webkit-${val}`],
        ]);
      });
    });
  });
});
