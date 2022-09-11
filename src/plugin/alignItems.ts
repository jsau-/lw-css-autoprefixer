import type { Plugin } from '../prefixer';

export const alignItems: Plugin = (property, value) => {
  if (property !== 'align-items') {
    return;
  }

  let align = value;

  if (value === 'flex-end' || value === 'flex-start') {
    align = value.replace('flex-', '');
  }

  return [
    ['-webkit-box-align', align],
    ['-webkit-align-items', value],
    ['-moz-box-align', align],
    ['-ms-flex-align', align],
  ];
};
