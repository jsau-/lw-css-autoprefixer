import { makePropertyReplacer } from '../util/makePropertyReplacer';

export const border = makePropertyReplacer({
  'border-block-end': ['-webkit-border-after'],
  'border-block-end-color': ['-webkit-border-after-color'],
  'border-block-end-style': ['-webkit-border-after-style'],
  'border-block-end-width': ['-webkit-border-after-width'],
  'border-block-start': ['-webkit-border-before'],
  'border-block-start-color': ['-webkit-border-before-color'],
  'border-block-start-style': ['-webkit-border-before-style'],
  'border-block-start-width': ['-webkit-border-before-width'],
  'border-inline-end': ['-webkit-border-end', '-moz-border-end'],
  'border-inline-end-color': ['-webkit-border-end-color', '-moz-border-end-color'],
  'border-inline-end-style': ['-webkit-border-end-style', '-moz-border-end-style'],
  'border-inline-end-width': ['-webkit-border-end-width', '-moz-border-end-width'],
  'border-inline-start': ['-webkit-border-start', '-moz-border-start'],
  'border-inline-start-color': ['-webkit-border-start-color', '-moz-border-start-color'],
  'border-inline-start-style': ['-webkit-border-start-style', '-moz-border-start-style'],
  'border-inline-start-width': ['-webkit-border-start-width', '-moz-border-start-width'],
});
