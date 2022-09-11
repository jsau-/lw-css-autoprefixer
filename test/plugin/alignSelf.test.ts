import { alignSelf } from '../../src/plugin/alignSelf';
import { assertTestCases } from '../assertTestCases';

describe('plugin/alignSelf', () => {
  assertTestCases(
    alignSelf,
    [
      ['foo', 'bar', undefined],
      ['align-self', 'auto', [
        ['-webkit-align-self', 'auto'],
        ['-ms-flex-item-align', 'auto'],
        ['-ms-grid-row-align', 'auto'],
      ]],
      ['align-self', 'baseline', [
        ['-webkit-align-self', 'baseline'],
        ['-ms-flex-item-align', 'baseline'],
        ['-ms-grid-row-align', 'baseline'],
      ]],
      ['align-self', 'center', [
        ['-webkit-align-self', 'center'],
        ['-ms-flex-item-align', 'center'],
        ['-ms-grid-row-align', 'center'],
      ]],
      ['align-self', 'end', [
        ['-webkit-align-self', 'end'],
        ['-ms-flex-item-align', 'end'],
        ['-ms-grid-row-align', 'end'],
      ]],
      ['align-self', 'first baseline', [
        ['-webkit-align-self', 'first baseline'],
        ['-ms-flex-item-align', 'first baseline'],
        ['-ms-grid-row-align', 'first baseline'],
      ]],
      ['align-self', 'flex-end', [
        ['-webkit-align-self', 'flex-end'],
        ['-ms-flex-item-align', 'end'],
      ]],
      ['align-self', 'flex-start', [
        ['-webkit-align-self', 'flex-start'],
        ['-ms-flex-item-align', 'start'],
      ]],
      ['align-self', 'initial', [
        ['-webkit-align-self', 'initial'],
        ['-ms-flex-item-align', 'initial'],
        ['-ms-grid-row-align', 'initial'],
      ]],
      ['align-self', 'inherit', [
        ['-webkit-align-self', 'inherit'],
        ['-ms-flex-item-align', 'inherit'],
        ['-ms-grid-row-align', 'inherit'],
      ]],
      ['align-self', 'last baseline', [
        ['-webkit-align-self', 'last baseline'],
        ['-ms-flex-item-align', 'last baseline'],
        ['-ms-grid-row-align', 'last baseline'],
      ]],
      ['align-self', 'normal', [
        ['-webkit-align-self', 'normal'],
        ['-ms-flex-item-align', 'normal'],
        ['-ms-grid-row-align', 'normal'],
      ]],
      ['align-self', 'safe center', [
        ['-webkit-align-self', 'safe center'],
        ['-ms-flex-item-align', 'safe center'],
        ['-ms-grid-row-align', 'safe center'],
      ]],
      ['align-self', 'start', [
        ['-webkit-align-self', 'start'],
        ['-ms-flex-item-align', 'start'],
        ['-ms-grid-row-align', 'start'],
      ]],
      ['align-self', 'stretch', [
        ['-webkit-align-self', 'stretch'],
        ['-ms-flex-item-align', 'stretch'],
        ['-ms-grid-row-align', 'stretch'],
      ]],
      ['align-self', 'unsafe center', [
        ['-webkit-align-self', 'unsafe center'],
        ['-ms-flex-item-align', 'unsafe center'],
        ['-ms-grid-row-align', 'unsafe center'],
      ]],
      ['align-self', 'unset', [
        ['-webkit-align-self', 'unset'],
        ['-ms-flex-item-align', 'unset'],
        ['-ms-grid-row-align', 'unset'],
      ]],
    ],
  );
});
