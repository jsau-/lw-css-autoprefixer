import { size } from '../../src/plugin/size';
import { assertTestCases } from '../assertTestCases';

describe('plugin/size', () => {
  assertTestCases(
    size,
    [
      ['foo', 'bar', undefined],
      ['height', '100px', undefined],
      ['height', 'inherit', undefined],
      ['height', 'unset', undefined],
      ['max-height', '100px', undefined],
      ['max-height', 'inherit', undefined],
      ['max-height', 'unset', undefined],
      ['max-width', '100px', undefined],
      ['max-width', 'inherit', undefined],
      ['max-width', 'unset', undefined],
      ['min-height', '100px', undefined],
      ['min-height', 'inherit', undefined],
      ['min-height', 'unset', undefined],
      ['min-width', '100px', undefined],
      ['min-width', 'inherit', undefined],
      ['min-width', 'unset', undefined],
      ['width', '100px', undefined],
      ['width', 'inherit', undefined],
      ['width', 'unset', undefined],
      ['column-width', 'inherit', [
        ['-moz-column-width', 'inherit'],
        ['-webkit-column-width', 'inherit'],
      ]],
      ['column-width', '1', [
        ['-moz-column-width', '1'],
        ['-webkit-column-width', '1'],
      ]],
      ['height', 'fill-available', [
        ['height', '-moz-available'],
        ['height', '-webkit-fill-available'],
      ]],
      ['height', 'fit-content', [
        ['height', '-moz-fit-content'],
        ['height', '-webkit-fit-content'],
      ]],
      ['height', 'min-content', [
        ['height', '-moz-min-content'],
        ['height', '-webkit-min-content'],
      ]],
      ['height', 'max-content', [
        ['height', '-moz-max-content'],
        ['height', '-webkit-max-content'],
      ]],
      ['max-height', 'fill-available', [
        ['max-height', '-moz-available'],
        ['max-height', '-webkit-fill-available'],
      ]],
      ['max-height', 'fit-content', [
        ['max-height', '-moz-fit-content'],
        ['max-height', '-webkit-fit-content'],
      ]],
      ['max-height', 'min-content', [
        ['max-height', '-moz-min-content'],
        ['max-height', '-webkit-min-content'],
      ]],
      ['max-height', 'max-content', [
        ['max-height', '-moz-max-content'],
        ['max-height', '-webkit-max-content'],
      ]],
      ['min-height', 'fill-available', [
        ['min-height', '-moz-available'],
        ['min-height', '-webkit-fill-available'],
      ]],
      ['min-height', 'fit-content', [
        ['min-height', '-moz-fit-content'],
        ['min-height', '-webkit-fit-content'],
      ]],
      ['min-height', 'min-content', [
        ['min-height', '-moz-min-content'],
        ['min-height', '-webkit-min-content'],
      ]],
      ['min-height', 'max-content', [
        ['min-height', '-moz-max-content'],
        ['min-height', '-webkit-max-content'],
      ]],
      ['max-width', 'fill-available', [
        ['max-width', '-moz-available'],
        ['max-width', '-webkit-fill-available'],
      ]],
      ['max-width', 'fit-content', [
        ['max-width', '-moz-fit-content'],
        ['max-width', '-webkit-fit-content'],
      ]],
      ['max-width', 'min-content', [
        ['max-width', '-moz-min-content'],
        ['max-width', '-webkit-min-content'],
      ]],
      ['max-width', 'max-content', [
        ['max-width', '-moz-max-content'],
        ['max-width', '-webkit-max-content'],
      ]],
      ['min-width', 'fill-available', [
        ['min-width', '-moz-available'],
        ['min-width', '-webkit-fill-available'],
      ]],
      ['min-width', 'fit-content', [
        ['min-width', '-moz-fit-content'],
        ['min-width', '-webkit-fit-content'],
      ]],
      ['min-width', 'min-content', [
        ['min-width', '-moz-min-content'],
        ['min-width', '-webkit-min-content'],
      ]],
      ['min-width', 'max-content', [
        ['min-width', '-moz-max-content'],
        ['min-width', '-webkit-max-content'],
      ]],
      ['width', 'fill-available', [
        ['width', '-moz-available'],
        ['width', '-webkit-fill-available'],
      ]],
      ['width', 'fit-content', [
        ['width', '-moz-fit-content'],
        ['width', '-webkit-fit-content'],
      ]],
      ['width', 'min-content', [
        ['width', '-moz-min-content'],
        ['width', '-webkit-min-content'],
      ]],
      ['width', 'max-content', [
        ['width', '-moz-max-content'],
        ['width', '-webkit-max-content'],
      ]],
    ],
  );
});
