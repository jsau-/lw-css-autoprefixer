import { alignContent } from '../../src/plugin/alignContent';
import { assertTestCases } from '../assertTestCases';

describe('plugin/alignContent', () => {
  assertTestCases(
    alignContent,
    [
      ['foo', 'bar', undefined],
      ['align-content', 'auto', [
        ['-webkit-align-content', 'auto'],
        ['-ms-flex-line-pack', 'auto'],
      ]],
      ['align-content', 'baseline', [
        ['-webkit-align-content', 'baseline'],
        ['-ms-flex-line-pack', 'baseline'],
      ]],
      ['align-content', 'center', [
        ['-webkit-align-content', 'center'],
        ['-ms-flex-line-pack', 'center'],
      ]],
      ['align-content', 'end', [
        ['-webkit-align-content', 'end'],
        ['-ms-flex-line-pack', 'end'],
      ]],
      ['align-content', 'first baseline', [
        ['-webkit-align-content', 'first baseline'],
        ['-ms-flex-line-pack', 'first baseline'],
      ]],
      ['align-content', 'flex-end', [
        ['-webkit-align-content', 'flex-end'],
        ['-ms-flex-line-pack', 'end'],
      ]],
      ['align-content', 'flex-start', [
        ['-webkit-align-content', 'flex-start'],
        ['-ms-flex-line-pack', 'start'],
      ]],
      ['align-content', 'initial', [
        ['-webkit-align-content', 'initial'],
        ['-ms-flex-line-pack', 'initial'],
      ]],
      ['align-content', 'inherit', [
        ['-webkit-align-content', 'inherit'],
        ['-ms-flex-line-pack', 'inherit'],
      ]],
      ['align-content', 'last baseline', [
        ['-webkit-align-content', 'last baseline'],
        ['-ms-flex-line-pack', 'last baseline'],
      ]],
      ['align-content', 'normal', [
        ['-webkit-align-content', 'normal'],
        ['-ms-flex-line-pack', 'normal'],
      ]],
      ['align-content', 'safe center', [
        ['-webkit-align-content', 'safe center'],
        ['-ms-flex-line-pack', 'safe center'],
      ]],
      ['align-content', 'space-around', [
        ['-webkit-align-content', 'space-around'],
        ['-ms-flex-line-pack', 'distribute'],
      ]],
      ['align-content', 'space-between', [
        ['-webkit-align-content', 'space-between'],
        ['-ms-flex-line-pack', 'justify'],
      ]],
      ['align-content', 'start', [
        ['-webkit-align-content', 'start'],
        ['-ms-flex-line-pack', 'start'],
      ]],
      ['align-content', 'stretch', [
        ['-webkit-align-content', 'stretch'],
        ['-ms-flex-line-pack', 'stretch'],
      ]],
      ['align-content', 'unsafe center', [
        ['-webkit-align-content', 'unsafe center'],
        ['-ms-flex-line-pack', 'unsafe center'],
      ]],
      ['align-content', 'unset', [
        ['-webkit-align-content', 'unset'],
        ['-ms-flex-line-pack', 'unset'],
      ]],
    ],
  );
});
