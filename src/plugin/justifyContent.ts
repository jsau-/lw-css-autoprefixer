import type { Plugin } from '../prefixer';

export const justifyContent: Plugin = (property, value) => {
  if (property !== 'justify-content') {
    return;
  }

  if (value === 'space-around') {
    return [
      ['-webkit-justify-content', 'space-around'],
      ['-ms-flex-pack', 'distribute'],
    ];
  }

  const replacements: Record<string, string> = {
    'flex-end': 'end',
    'flex-start': 'start',
    'space-around': 'distribute',
    'space-between': 'justify',
  };

  const replacement = replacements[value] || value;

  return [
    ['-webkit-box-pack', replacement],
    ['-webkit-justify-content', value],
    ['-moz-box-pack', replacement],
    ['-ms-flex-pack', replacement],
  ];
};
