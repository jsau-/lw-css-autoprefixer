import type { Plugin } from '../prefixer';

export const position: Plugin = (property, value) => {
  if (property !== 'position' || value !== 'sticky') {
    return;
  }

  return [['position', '-webkit-sticky']];
};
