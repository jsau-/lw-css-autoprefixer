import { Plugin } from '../prefixer';

export const alignSelf: Plugin = (property, value) => {
  if (property !== 'align-self') {
    return;
  }

  if (value === 'flex-end' || value === 'flex-start') {
    return [
      ['-webkit-align-self', value],
      ['-ms-flex-item-align', value.replace('flex-', '')],
    ];
  }

  return [
    ['-webkit-align-self', value],
    ['-ms-flex-item-align', value],
    ['-ms-grid-row-align', value],
  ];
};
