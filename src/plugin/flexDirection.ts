import type { Plugin } from '../prefixer';

export const flexDirection: Plugin = (property, value) => {
  if (property !== 'flex-direction') {
    return;
  }

  let orientation: 'horizontal' | 'vertical' | 'unset' | 'inherit' | 'initial';
  let boxDirection: 'normal' | 'reverse' | 'unset' | 'inherit' | 'initial';

  if (value === 'unset' || value === 'inherit' || value === 'initial') {
    orientation = value;
    boxDirection = value;
  } else if (value === 'revert' || value === 'revert-layer') {
    orientation = 'vertical';
    boxDirection = 'normal';
  } else {
    orientation = value.indexOf('row') === -1 ? 'vertical' : 'horizontal';
    boxDirection = value.indexOf('reverse') === -1 ? 'normal' : 'reverse';
  }

  return [
    ['-webkit-box-orient', orientation],
    ['-webkit-box-direction', boxDirection],
    ['-webkit-flex-direction', value],
    ['-moz-box-orient', orientation],
    ['-moz-box-direction', boxDirection],
    ['-ms-flex-direction', value],
  ];
};
