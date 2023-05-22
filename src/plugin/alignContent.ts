import type { CSSDeclaration, Plugin } from '../prefixer';

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

  const toReturn: CSSDeclaration[] = [
    ['-webkit-align-content', value],
    ['-ms-flex-line-pack', value],
  ];

  if (typeof value === 'string' && linePackReplacements[value]) {
    toReturn[1][1] = linePackReplacements[value];
  }

  return toReturn;
};
