import { position } from '../../src/plugin/position';
import { assertTestCases } from '../assertTestCases';

describe('plugin/position', () => {
  assertTestCases(
    position,
    [
      ['foo', 'bar', undefined],
      ['position', 'absolute', undefined],
      ['position', 'inherit', undefined],
      ['position', 'sticky', [['position', '-webkit-sticky']]],
    ],
  );
});
