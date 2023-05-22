import type { Plugin } from '../prefixer';

export const flexFlow: Plugin = (property, value) => {
  if (property !== 'flex-flow') {
    return;
  }

  if (value === 'nowrap' || value === 'wrap') {
    return [
      ['-webkit-flex-flow', value],
      ['-ms-flex-flow', value],
    ];
  }

  let orientation: 'horizontal' | 'vertical' | 'unset' | 'inherit' | 'initial';
  let boxDirection: 'normal' | 'reverse' | 'unset' | 'inherit' | 'initial';

  if (
    value === 'initial' ||
    value === 'inherit' ||
    value === 'revert' ||
    value === 'revert-layer' ||
    value === 'unset'
  ) {
    orientation = 'vertical';
    boxDirection = 'normal';
  } else {
    /*
     * TODO: Pretty sure there's a bug here, e.g. if doing
     * `flex-flow: row wrap-reverse` I'm _pretty_ sure this isn't meant
     * to have a box-orientation of reverse.
     */
    orientation = (typeof value === 'string' && value.indexOf('row') === -1) ? 'vertical' : 'horizontal';
    boxDirection = (typeof value === 'string' && value.indexOf('reverse') === -1) ? 'normal' : 'reverse';
  }

  return [
    ['-webkit-box-orient', orientation],
    ['-webkit-box-direction', boxDirection],
    ['-webkit-flex-flow', value],
    ['-moz-box-orient', orientation],
    ['-moz-box-direction', boxDirection],
    ['-ms-flex-flow', value],
  ];
};
