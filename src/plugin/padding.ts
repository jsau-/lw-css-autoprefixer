import { makePropertyReplacer } from '../util/makePropertyReplacer';

export const padding = makePropertyReplacer({
  'padding-block-end': ['-webkit-padding-after'],
  'padding-block-start': ['-webkit-padding-before'],
  'padding-inline-end': ['-webkit-padding-end', '-moz-padding-end'],
  'padding-inline-start': ['-webkit-padding-start', '-moz-padding-start'],
});
