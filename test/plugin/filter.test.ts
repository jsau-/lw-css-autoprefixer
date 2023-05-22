import { filter } from '../../src/plugin/filter';
import { assertTestCases } from '../assertTestCases';

describe('plugin/filter', () => {
  assertTestCases(
    filter,
    [
      ['foo', 'bar', undefined],
      ['foo', 100, undefined],
      ['foo', null, undefined],
      ['foo', undefined, undefined],
      ['foo', '-webkit-filter(url(\'foo.jpg\'))', undefined],
      ['foo', 'filter(url(\'foo.jpg\'))', [
        ['foo', '-webkit-filter(url(\'foo.jpg\'))'],
      ]],
    ],
  );
});
