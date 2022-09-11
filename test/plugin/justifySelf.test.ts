import { justifySelf } from '../../src/plugin/justifySelf';
import { assertTestCases } from '../assertTestCases';

describe('plugin/justifySelf', () => {
  assertTestCases(
    justifySelf,
    [
      ['foo', 'bar', undefined],
      ['justify-self', 'auto', [['-ms-grid-column-align', 'auto']]],
      ['justify-self', 'baseline', [['-ms-grid-column-align', 'baseline']]],
      ['justify-self', 'center', [['-ms-grid-column-align', 'center']]],
      ['justify-self', 'end', [['-ms-grid-column-align', 'end']]],
      ['justify-self', 'first baseline', [['-ms-grid-column-align', 'first baseline']]],
      ['justify-self', 'flex-end', [['-ms-grid-column-align', 'flex-end']]],
      ['justify-self', 'flex-start', [['-ms-grid-column-align', 'flex-start']]],
      ['justify-self', 'inherit', [['-ms-grid-column-align', 'inherit']]],
      ['justify-self', 'initial', [['-ms-grid-column-align', 'initial']]],
      ['justify-self', 'last baseline', [['-ms-grid-column-align', 'last baseline']]],
      ['justify-self', 'left', [['-ms-grid-column-align', 'left']]],
      ['justify-self', 'normal', [['-ms-grid-column-align', 'normal']]],
      ['justify-self', 'right', [['-ms-grid-column-align', 'right']]],
      ['justify-self', 'safe center', [['-ms-grid-column-align', 'safe center']]],
      ['justify-self', 'self-end', [['-ms-grid-column-align', 'self-end']]],
      ['justify-self', 'self-start', [['-ms-grid-column-align', 'self-start']]],
      ['justify-self', 'start', [['-ms-grid-column-align', 'start']]],
      ['justify-self', 'stretch', [['-ms-grid-column-align', 'stretch']]],
      ['justify-self', 'unsafe center', [['-ms-grid-column-align', 'unsafe center']]],
      ['justify-self', 'unset', [['-ms-grid-column-align', 'unset']]],
    ],
  );
});
