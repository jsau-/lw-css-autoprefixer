import { makePropertyReplacer } from '../util/makePropertyReplacer';

export const justifySelf = makePropertyReplacer({
  'justify-self': ['-ms-grid-column-align'],
});
