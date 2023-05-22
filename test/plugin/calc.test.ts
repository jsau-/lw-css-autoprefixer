import { calc } from '../../src/plugin/calc';
import { assertTestCases } from '../assertTestCases';

describe('plugin/calc', () => {
  assertTestCases(
    calc,
    [
      ['foo', 100, undefined],
      ['foo', null, undefined],
      ['foo', undefined, undefined],
      ['foo', '-webkit-calc(100% - 50px)', undefined],
      ['foo', 'calc(100% - 50px)', [
        ['foo', '-moz-calc(100% - 50px)'],
        ['foo', '-webkit-calc(100% - 50px)'],
      ]],
    ],
  );
});
