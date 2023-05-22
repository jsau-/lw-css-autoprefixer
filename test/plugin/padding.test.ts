import { padding } from '../../src/plugin/padding';
import { assertTestCases } from '../assertTestCases';

describe('plugin/padding', () => {
  assertTestCases(
    padding,
    [
      ['foo', 'bar', undefined],
      ['foo', 100, undefined],
      ['foo', null, undefined],
      ['foo', undefined, undefined],
      ['padding-block-end', 'foo', [['-webkit-padding-after', 'foo']]],
      ['padding-block-start', 'foo', [['-webkit-padding-before', 'foo']]],
      ['padding-inline-end', 'foo', [
        ['-webkit-padding-end', 'foo'],
        ['-moz-padding-end', 'foo'],
      ]],
      ['padding-inline-start', 'foo', [
        ['-webkit-padding-start', 'foo'],
        ['-moz-padding-start', 'foo'],
      ]],
    ],
  );
});
