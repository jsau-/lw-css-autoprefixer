import { margin } from '../../src/plugin/margin';
import { assertTestCases } from '../assertTestCases';

describe('plugin/margin', () => {
  assertTestCases(
    margin,
    [
      ['foo', 'bar', undefined],
      ['margin-block-end', 'foo', [['-webkit-margin-after', 'foo']]],
      ['margin-block-start', 'foo', [['-webkit-margin-before', 'foo']]],
      ['margin-inline-end', 'foo', [
        ['-webkit-margin-end', 'foo'],
        ['-moz-margin-end', 'foo'],
      ]],
      ['margin-inline-start', 'foo', [
        ['-webkit-margin-start', 'foo'],
        ['-moz-margin-start', 'foo'],
      ]],
    ],
  );
});
