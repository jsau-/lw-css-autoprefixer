import { makePropertyReplacer } from '../util/makePropertyReplacer';

export const margin = makePropertyReplacer({
  'margin-block-end': ['-webkit-margin-after'],
  'margin-block-start': ['-webkit-margin-before'],
  'margin-inline-end': ['-webkit-margin-end', '-moz-margin-end'],
  'margin-inline-start': ['-webkit-margin-start', '-moz-margin-start'],
});
