import { flexGrowShrink } from '../../src/plugin/flexGrowShrink';
import { assertTestCases } from '../assertTestCases';

describe('plugin/flexGrowShrink', () => {
  assertTestCases(
    flexGrowShrink,
    [
      ['foo', 'bar', undefined],
      ['foo', 100, undefined],
      ['foo', null, undefined],
      ['foo', undefined, undefined],
      ['flex-grow', '1', [
        ['-webkit-box-flex', '1'],
        ['-webkit-flex-grow', '1'],
        ['-moz-box-flex', '1'],
        ['-ms-flex-positive', '1'],
      ]],
      ['flex-grow', 'auto', [
        ['-webkit-box-flex', 'auto'],
        ['-webkit-flex-grow', 'auto'],
        ['-moz-box-flex', 'auto'],
        ['-ms-flex-positive', 'auto'],
      ]],
      ['flex-grow', 'inherit', [
        ['-webkit-box-flex', 'inherit'],
        ['-webkit-flex-grow', 'inherit'],
        ['-moz-box-flex', 'inherit'],
        ['-ms-flex-positive', 'inherit'],
      ]],
      ['flex-grow', 'unset', [
        ['-webkit-box-flex', 'unset'],
        ['-webkit-flex-grow', 'unset'],
        ['-moz-box-flex', 'unset'],
        ['-ms-flex-positive', 'unset'],
      ]],
      ['flex-shrink', '1', [
        ['-webkit-flex-shrink', '1'],
        ['-ms-flex-negative', '1'],
      ]],
      ['flex-shrink', 'auto', [
        ['-webkit-flex-shrink', 'auto'],
        ['-ms-flex-negative', 'auto'],
      ]],
      ['flex-shrink', 'inherit', [
        ['-webkit-flex-shrink', 'inherit'],
        ['-ms-flex-negative', 'inherit'],
      ]],
      ['flex-shrink', 'unset', [
        ['-webkit-flex-shrink', 'unset'],
        ['-ms-flex-negative', 'unset'],
      ]],
    ],
  );
});
