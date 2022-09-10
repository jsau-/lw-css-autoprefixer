import { makePropertyReplacer } from '../util/makePropertyReplacer';

export const flexGrowShrink = makePropertyReplacer({
  'flex-grow': [
    '-webkit-box-flex',
    '-webkit-flex-grow',
    '-moz-box-flex',
    '-ms-flex-positive',
  ],
  'flex-shrink': [
    '-webkit-flex-shrink',
    '-ms-flex-negative',
  ],
});
