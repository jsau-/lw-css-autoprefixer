import { backgroundClip } from '../../src/plugin/backgroundClip';
import { assertTestCases } from '../assertTestCases';

describe('plugin/backgroundClip', () => {
  assertTestCases(
    backgroundClip,
    [
      ['foo', 100, undefined],
      ['foo', null, undefined],
      ['foo', undefined, undefined],
      ['not-background-clip', 'text', undefined],
      ['background-clip', 'not-text', undefined],
      ['background-clip', 'text', [
        ['-moz-background-clip', 'text'],
        ['-ms-background-clip', 'text'],
        ['-webkit-background-clip', 'text'],
      ]],
    ],
  );
});
