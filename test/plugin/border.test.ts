import { border } from '../../src/plugin/border';
import { assertTestCases } from '../assertTestCases';

describe('plugin/border', () => {
  assertTestCases(
    border,
    [
      ['foo', 'bar', undefined],
      ['border-block-end', 'foo', [['-webkit-border-after', 'foo']]],
      ['border-block-end-color', 'foo', [['-webkit-border-after-color', 'foo']]],
      ['border-block-end-style', 'foo', [['-webkit-border-after-style', 'foo']]],
      ['border-block-end-width', 'foo', [['-webkit-border-after-width', 'foo']]],
      ['border-block-start', 'foo', [['-webkit-border-before', 'foo']]],
      ['border-block-start-color', 'foo', [['-webkit-border-before-color', 'foo']]],
      ['border-block-start-style', 'foo', [['-webkit-border-before-style', 'foo']]],
      ['border-block-start-width', 'foo', [['-webkit-border-before-width', 'foo']]],
      ['border-inline-end', 'foo', [
        ['-webkit-border-end', 'foo'],
        ['-moz-border-end', 'foo'],
      ]],
      ['border-inline-end-color', 'foo', [
        ['-webkit-border-end-color', 'foo'],
        ['-moz-border-end-color', 'foo'],
      ]],
      ['border-inline-end-style', 'foo', [
        ['-webkit-border-end-style', 'foo'],
        ['-moz-border-end-style', 'foo'],
      ]],
      ['border-inline-end-width', 'foo', [
        ['-webkit-border-end-width', 'foo'],
        ['-moz-border-end-width', 'foo'],
      ]],
      ['border-inline-start', 'foo', [
        ['-webkit-border-start', 'foo'],
        ['-moz-border-start', 'foo'],
      ]],
      ['border-inline-start-color', 'foo', [
        ['-webkit-border-start-color', 'foo'],
        ['-moz-border-start-color', 'foo'],
      ]],
      ['border-inline-start-style', 'foo', [
        ['-webkit-border-start-style', 'foo'],
        ['-moz-border-start-style', 'foo'],
      ]],
      ['border-inline-start-width', 'foo', [
        ['-webkit-border-start-width', 'foo'],
        ['-moz-border-start-width', 'foo'],
      ]],
    ],
  );
});
