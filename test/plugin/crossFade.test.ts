import { crossFade } from '../../src/plugin/crossFade';
import { assertTestCases } from '../assertTestCases';

describe('plugin/crossFade', () => {
  assertTestCases(
    crossFade,
    [
      ['foo', '-webkit-cross-fade(100% - 50px)', undefined],
      ['foo', 'cross-fade(100% - 50px)', [
        ['foo', '-webkit-cross-fade(100% - 50px)'],
      ]],
    ],
  );
});
