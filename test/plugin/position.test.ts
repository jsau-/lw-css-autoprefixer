import { position } from '../../src/plugin/position';
import { assertTestCases } from '../assertTestCases';

describe('plugin/position', () => {
  assertTestCases(
    position,
    [
      ['foo', 'bar', undefined],
      ['foo', 100, undefined],
      ['foo', null, undefined],
      ['foo', undefined, undefined],
      ['position', 'absolute', undefined],
      ['position', 'inherit', undefined],
      ['position', 'sticky', [['position', '-webkit-sticky']]],
    ],
  );
});
