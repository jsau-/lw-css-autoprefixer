import { justifyContent } from '../../src/plugin/justifyContent';
import { assertTestCases } from '../assertTestCases';

describe('plugin/justifyContent', () => {
  assertTestCases(
    justifyContent,
    [
      ['foo', 'bar', undefined],
      ['justify-content', 'center', [
        ['-webkit-box-pack', 'center'],
        ['-webkit-justify-content', 'center'],
        ['-moz-box-pack', 'center'],
        ['-ms-flex-pack', 'center'],
      ]],
      ['justify-content', 'end', [
        ['-webkit-box-pack', 'end'],
        ['-webkit-justify-content', 'end'],
        ['-moz-box-pack', 'end'],
        ['-ms-flex-pack', 'end'],
      ]],
      ['justify-content', 'flex-end', [
        ['-webkit-box-pack', 'end'],
        ['-webkit-justify-content', 'flex-end'],
        ['-moz-box-pack', 'end'],
        ['-ms-flex-pack', 'end'],
      ]],
      ['justify-content', 'flex-start', [
        ['-webkit-box-pack', 'start'],
        ['-webkit-justify-content', 'flex-start'],
        ['-moz-box-pack', 'start'],
        ['-ms-flex-pack', 'start'],
      ]],
      ['justify-content', 'initial', [
        ['-webkit-box-pack', 'initial'],
        ['-webkit-justify-content', 'initial'],
        ['-moz-box-pack', 'initial'],
        ['-ms-flex-pack', 'initial'],
      ]],
      ['justify-content', 'inherit', [
        ['-webkit-box-pack', 'inherit'],
        ['-webkit-justify-content', 'inherit'],
        ['-moz-box-pack', 'inherit'],
        ['-ms-flex-pack', 'inherit'],
      ]],
      ['justify-content', 'left', [
        ['-webkit-box-pack', 'left'],
        ['-webkit-justify-content', 'left'],
        ['-moz-box-pack', 'left'],
        ['-ms-flex-pack', 'left'],
      ]],
      ['justify-content', 'normal', [
        ['-webkit-box-pack', 'normal'],
        ['-webkit-justify-content', 'normal'],
        ['-moz-box-pack', 'normal'],
        ['-ms-flex-pack', 'normal'],
      ]],
      ['justify-content', 'right', [
        ['-webkit-box-pack', 'right'],
        ['-webkit-justify-content', 'right'],
        ['-moz-box-pack', 'right'],
        ['-ms-flex-pack', 'right'],
      ]],
      ['justify-content', 'safe center', [
        ['-webkit-box-pack', 'safe center'],
        ['-webkit-justify-content', 'safe center'],
        ['-moz-box-pack', 'safe center'],
        ['-ms-flex-pack', 'safe center'],
      ]],
      ['justify-content', 'space-around', [
        ['-webkit-justify-content', 'space-around'],
        ['-ms-flex-pack', 'distribute'],
      ]],
      ['justify-content', 'space-between', [
        ['-webkit-box-pack', 'justify'],
        ['-webkit-justify-content', 'space-between'],
        ['-moz-box-pack', 'justify'],
        ['-ms-flex-pack', 'justify'],
      ]],
      ['justify-content', 'space-evenly', [
        ['-webkit-box-pack', 'space-evenly'],
        ['-webkit-justify-content', 'space-evenly'],
        ['-moz-box-pack', 'space-evenly'],
        ['-ms-flex-pack', 'space-evenly'],
      ]],
      ['justify-content', 'start', [
        ['-webkit-box-pack', 'start'],
        ['-webkit-justify-content', 'start'],
        ['-moz-box-pack', 'start'],
        ['-ms-flex-pack', 'start'],
      ]],
      ['justify-content', 'stretch', [
        ['-webkit-box-pack', 'stretch'],
        ['-webkit-justify-content', 'stretch'],
        ['-moz-box-pack', 'stretch'],
        ['-ms-flex-pack', 'stretch'],
      ]],
      ['justify-content', 'unsafe center', [
        ['-webkit-box-pack', 'unsafe center'],
        ['-webkit-justify-content', 'unsafe center'],
        ['-moz-box-pack', 'unsafe center'],
        ['-ms-flex-pack', 'unsafe center'],
      ]],
      ['justify-content', 'unset', [
        ['-webkit-box-pack', 'unset'],
        ['-webkit-justify-content', 'unset'],
        ['-moz-box-pack', 'unset'],
        ['-ms-flex-pack', 'unset'],
      ]],
    ],
  );
});
