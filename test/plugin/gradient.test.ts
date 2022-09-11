import { gradient } from '../../src/plugin/gradient';
import { assertTestCases } from '../assertTestCases';

describe('plugin/gradient', () => {
  assertTestCases(
    gradient,
    [
      ['foo', 'bar', undefined],
      ['background-image', 'linear-gradient(red, yellow)', [
        ['background-image', '-moz-linear-gradient(red, yellow)'],
        ['background-image', '-webkit-linear-gradient(red, yellow)'],
      ]],
      ['background-image', 'radial-gradient(red, yellow)', [
        ['background-image', '-moz-radial-gradient(red, yellow)'],
        ['background-image', '-webkit-radial-gradient(red, yellow)'],
      ]],
      ['background-image', 'repeating-radial-gradient(red, yellow)', [
        ['background-image', '-moz-repeating-radial-gradient(red, yellow)'],
        ['background-image', '-webkit-repeating-radial-gradient(red, yellow)'],
      ]],
    ],
  );
});
