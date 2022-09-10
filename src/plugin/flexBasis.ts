import { makePropertyReplacer } from '../util/makePropertyReplacer';

export const flexBasis = makePropertyReplacer({
  'flex-basis': ['-webkit-flex-basis', '-ms-flex-preferred-size'],
});
