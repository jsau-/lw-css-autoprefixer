import { cursor } from '../../src/plugin/cursor';
import { assertTestCases } from '../assertTestCases';

describe('plugin/cursor', () => {
  assertTestCases(
    cursor,
    [
      ['foo', 'bar', undefined],
      ['cursor', 'inherit', undefined],
      ['cursor', 'initial', undefined],
      ['cursor', 'unset', undefined],
      ['cursor', 'grab', [
        ['cursor', '-moz-grab'],
        ['cursor', '-webkit-grab'],
      ]],
      ['cursor', 'grabbing', [
        ['cursor', '-moz-grabbing'],
        ['cursor', '-webkit-grabbing'],
      ]],
      ['cursor', 'zoom-in', [
        ['cursor', '-moz-zoom-in'],
        ['cursor', '-webkit-zoom-in'],
      ]],
      ['cursor', 'zoom-out', [
        ['cursor', '-moz-zoom-out'],
        ['cursor', '-webkit-zoom-out'],
      ]],
    ],
  );
});
