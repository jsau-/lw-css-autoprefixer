import { flexDirection } from '../../src/plugin/flexDirection';
import { assertTestCases } from '../assertTestCases';

describe('plugin/flexDirection', () => {
  assertTestCases(
    flexDirection,
    [
      ['foo', 'bar', undefined],
      ['flex-direction', 'auto', [
        ['-webkit-box-orient', 'vertical'],
        ['-webkit-box-direction', 'normal'],
        ['-webkit-flex-direction', 'auto'],
        ['-moz-box-orient', 'vertical'],
        ['-moz-box-direction', 'normal'],
        ['-ms-flex-direction', 'auto'],
      ]],
      ['flex-direction', 'column', [
        ['-webkit-box-orient', 'vertical'],
        ['-webkit-box-direction', 'normal'],
        ['-webkit-flex-direction', 'column'],
        ['-moz-box-orient', 'vertical'],
        ['-moz-box-direction', 'normal'],
        ['-ms-flex-direction', 'column'],
      ]],
      ['flex-direction', 'column-reverse', [
        ['-webkit-box-orient', 'vertical'],
        ['-webkit-box-direction', 'reverse'],
        ['-webkit-flex-direction', 'column-reverse'],
        ['-moz-box-orient', 'vertical'],
        ['-moz-box-direction', 'reverse'],
        ['-ms-flex-direction', 'column-reverse'],
      ]],
      ['flex-direction', 'inherit', [
        ['-webkit-box-orient', 'inherit'],
        ['-webkit-box-direction', 'inherit'],
        ['-webkit-flex-direction', 'inherit'],
        ['-moz-box-orient', 'inherit'],
        ['-moz-box-direction', 'inherit'],
        ['-ms-flex-direction', 'inherit'],
      ]],
      ['flex-direction', 'initial', [
        ['-webkit-box-orient', 'initial'],
        ['-webkit-box-direction', 'initial'],
        ['-webkit-flex-direction', 'initial'],
        ['-moz-box-orient', 'initial'],
        ['-moz-box-direction', 'initial'],
        ['-ms-flex-direction', 'initial'],
      ]],
      ['flex-direction', 'revert', [
        ['-webkit-box-orient', 'vertical'],
        ['-webkit-box-direction', 'normal'],
        ['-webkit-flex-direction', 'revert'],
        ['-moz-box-orient', 'vertical'],
        ['-moz-box-direction', 'normal'],
        ['-ms-flex-direction', 'revert'],
      ]],
      ['flex-direction', 'revert-layer', [
        ['-webkit-box-orient', 'vertical'],
        ['-webkit-box-direction', 'normal'],
        ['-webkit-flex-direction', 'revert-layer'],
        ['-moz-box-orient', 'vertical'],
        ['-moz-box-direction', 'normal'],
        ['-ms-flex-direction', 'revert-layer'],
      ]],
      ['flex-direction', 'row', [
        ['-webkit-box-orient', 'horizontal'],
        ['-webkit-box-direction', 'normal'],
        ['-webkit-flex-direction', 'row'],
        ['-moz-box-orient', 'horizontal'],
        ['-moz-box-direction', 'normal'],
        ['-ms-flex-direction', 'row'],
      ]],
      ['flex-direction', 'row-reverse', [
        ['-webkit-box-orient', 'horizontal'],
        ['-webkit-box-direction', 'reverse'],
        ['-webkit-flex-direction', 'row-reverse'],
        ['-moz-box-orient', 'horizontal'],
        ['-moz-box-direction', 'reverse'],
        ['-ms-flex-direction', 'row-reverse'],
      ]],
      ['flex-direction', 'unset', [
        ['-webkit-box-orient', 'unset'],
        ['-webkit-box-direction', 'unset'],
        ['-webkit-flex-direction', 'unset'],
        ['-moz-box-orient', 'unset'],
        ['-moz-box-direction', 'unset'],
        ['-ms-flex-direction', 'unset'],
      ]],
    ],
  );
});
