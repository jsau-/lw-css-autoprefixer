import { display } from '../../src/plugin/display';
import { assertTestCases } from '../assertTestCases';

describe('plugin/display', () => {
  assertTestCases(
    display,
    [
      ['foo', 'flex', undefined],
      ['foo', 100, undefined],
      ['foo', null, undefined],
      ['foo', undefined, undefined],
      ['display', 'inherit', undefined],
      ['display', 'flex', [
        ['display', '-webkit-box'],
        ['display', '-moz-box'],
        ['display', '-ms-flexbox'],
        ['display', '-webkit-flex'],
      ]],
      ['display', 'inline-flex', [
        ['display', '-webkit-inline-box'],
        ['display', '-moz-inline-box'],
        ['display', '-ms-inline-flexbox'],
        ['display', '-webkit-inline-flex'],
      ]],
    ],
  );
});
