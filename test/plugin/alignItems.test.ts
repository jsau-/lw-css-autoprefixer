import { alignItems } from '../../src/plugin/alignItems';
import { assertTestCases } from '../assertTestCases';

describe('plugin/alignItems', () => {
  assertTestCases(
    alignItems,
    [
      ['foo', 'bar', undefined],
      ['align-items', 'auto', [
        ['-webkit-box-align', 'auto'],
        ['-webkit-align-items', 'auto'],
        ['-moz-box-align', 'auto'],
        ['-ms-flex-align', 'auto'],
      ]],
      ['align-items', 'baseline', [
        ['-webkit-box-align', 'baseline'],
        ['-webkit-align-items', 'baseline'],
        ['-moz-box-align', 'baseline'],
        ['-ms-flex-align', 'baseline'],
      ]],
      ['align-items', 'center', [
        ['-webkit-box-align', 'center'],
        ['-webkit-align-items', 'center'],
        ['-moz-box-align', 'center'],
        ['-ms-flex-align', 'center'],
      ]],
      ['align-items', 'end', [
        ['-webkit-box-align', 'end'],
        ['-webkit-align-items', 'end'],
        ['-moz-box-align', 'end'],
        ['-ms-flex-align', 'end'],
      ]],
      ['align-items', 'first baseline', [
        ['-webkit-box-align', 'first baseline'],
        ['-webkit-align-items', 'first baseline'],
        ['-moz-box-align', 'first baseline'],
        ['-ms-flex-align', 'first baseline'],
      ]],
      ['align-items', 'flex-end', [
        ['-webkit-box-align', 'end'],
        ['-webkit-align-items', 'flex-end'],
        ['-moz-box-align', 'end'],
        ['-ms-flex-align', 'end'],
      ]],
      ['align-items', 'flex-start', [
        ['-webkit-box-align', 'start'],
        ['-webkit-align-items', 'flex-start'],
        ['-moz-box-align', 'start'],
        ['-ms-flex-align', 'start'],
      ]],
      ['align-items', 'initial', [
        ['-webkit-box-align', 'initial'],
        ['-webkit-align-items', 'initial'],
        ['-moz-box-align', 'initial'],
        ['-ms-flex-align', 'initial'],
      ]],
      ['align-items', 'inherit', [
        ['-webkit-box-align', 'inherit'],
        ['-webkit-align-items', 'inherit'],
        ['-moz-box-align', 'inherit'],
        ['-ms-flex-align', 'inherit'],
      ]],
      ['align-items', 'last baseline', [
        ['-webkit-box-align', 'last baseline'],
        ['-webkit-align-items', 'last baseline'],
        ['-moz-box-align', 'last baseline'],
        ['-ms-flex-align', 'last baseline'],
      ]],
      ['align-items', 'normal', [
        ['-webkit-box-align', 'normal'],
        ['-webkit-align-items', 'normal'],
        ['-moz-box-align', 'normal'],
        ['-ms-flex-align', 'normal'],
      ]],
      ['align-items', 'safe center', [
        ['-webkit-box-align', 'safe center'],
        ['-webkit-align-items', 'safe center'],
        ['-moz-box-align', 'safe center'],
        ['-ms-flex-align', 'safe center'],
      ]],
      ['align-items', 'start', [
        ['-webkit-box-align', 'start'],
        ['-webkit-align-items', 'start'],
        ['-moz-box-align', 'start'],
        ['-ms-flex-align', 'start'],
      ]],
      ['align-items', 'stretch', [
        ['-webkit-box-align', 'stretch'],
        ['-webkit-align-items', 'stretch'],
        ['-moz-box-align', 'stretch'],
        ['-ms-flex-align', 'stretch'],
      ]],
      ['align-items', 'unsafe center', [
        ['-webkit-box-align', 'unsafe center'],
        ['-webkit-align-items', 'unsafe center'],
        ['-moz-box-align', 'unsafe center'],
        ['-ms-flex-align', 'unsafe center'],
      ]],
      ['align-items', 'unset', [
        ['-webkit-box-align', 'unset'],
        ['-webkit-align-items', 'unset'],
        ['-moz-box-align', 'unset'],
        ['-ms-flex-align', 'unset'],
      ]],
    ],
  );
});
