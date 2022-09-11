import { Plugin } from '../prefixer';

export const alignContent: Plugin = (property, value) => {
  if (property !== 'align-content') {
    return;
  }

  const linePackReplacements: Record<string, string> = {
    'flex-end': 'end',
    'flex-start': 'start',
    'space-around': 'distribute',
    'space-between': 'justify',
  };

  return [
    ['-webkit-align-content', value],
    ['-ms-flex-line-pack', linePackReplacements[value] || value],
  ];
};
