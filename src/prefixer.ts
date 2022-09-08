import { Plugin } from './plugin/Plugin';
import type { PropertyPrefixes } from './propertyPrefixes';
import { addVendorPrefixes } from './util/addVendorPrefixes';

export const prefixer = (
  plugins: Plugin[],
  propertyPrefixes: PropertyPrefixes,
) => ({
  prefix: (property: string, value: string) => {
    const toReturn = [];

    let prefixedNames = [];

    if (propertyPrefixes[property]) {
      prefixedNames.push(...addVendorPrefixes(property, propertyPrefixes[property]));
    }

    prefixedNames.push(property);

    for (const propertyToPrefix of prefixedNames) {
      for (const plugin of plugins) {
        toReturn.push(...plugin(propertyToPrefix, value) || []);
      }
    }

    toReturn.push(property, value);
  },
});
