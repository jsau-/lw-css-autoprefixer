import { flexBasis } from '../../src/plugin/flexBasis';
import { assertTestCases } from '../assertTestCases';

describe('plugin/flexBasis', () => {
  assertTestCases(
    flexBasis,
    [
      ['foo', 'bar', undefined],
      ['foo', 100, undefined],
      ['foo', null, undefined],
      ['foo', undefined, undefined],
      ['flex-basis', '1', [
        ['-webkit-flex-basis', '1'],
        ['-ms-flex-preferred-size', '1'],
      ]],
      ['flex-basis', 'inherit', [
        ['-webkit-flex-basis', 'inherit'],
        ['-ms-flex-preferred-size', 'inherit'],
      ]],
      ['flex-basis', 'unset', [
        ['-webkit-flex-basis', 'unset'],
        ['-ms-flex-preferred-size', 'unset'],
      ]],
    ],
  );
});
