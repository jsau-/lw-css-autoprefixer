import type { PropertyPrefixes } from './propertyPrefixes';
import { addVendorPrefixes } from './util/addVendorPrefixes';

export type CSSDeclaration = [string, string];
export type Plugin = (property: string, value: string) => [string, string][] | undefined;

export const prefixer = (
  plugins: Plugin[],
  propertyPrefixes: PropertyPrefixes,
) => (property: string, value: string) => {
  const toReturn: [string, string][] = [];

  if (propertyPrefixes[property]) {
    const prefixedNames = addVendorPrefixes(property, propertyPrefixes[property]);
    toReturn.push(...prefixedNames.map(prefixedName => [prefixedName, value] as CSSDeclaration));
  }

  for (const [pluginProperty, pluginValue] of [...toReturn, [property, value]]) {
    for (const plugin of plugins) {
      toReturn.push(...plugin(pluginProperty, pluginValue) || []);
    }
  }

  toReturn.push([property, value]);

  return toReturn;
};
