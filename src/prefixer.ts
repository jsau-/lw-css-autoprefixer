import type { PropertyPrefixes } from './propertyPrefixes';
import { addVendorPrefixes } from './util/addVendorPrefixes';

/**
 * A declaration of a CSS property and value. Within this library we work with
 * arrays rather than object literals because of the chance of collision with
 * CSS properties - for example `display: flex` may have many prefixed
 * representations all using the property name `display`.
 */
export type CSSDeclaration = [property: string, value: string];

/**
 * A function which processes a given CSS property and value, and returns any
 * vendor-prefixed forms where relevant. Note that a plugin will **not** return
 * the provided values, only any modified forms.
 *
 * CSS declarations will be ordered with the lowest priority declaration first,
 * and the highest priority declaration last.
 */
export type Plugin = (property: string, value: string) => CSSDeclaration[] | undefined;

/**
 * Create a prefixer function using a set of plugins, and static property
 * prefixes.
 *
 * Note that by default no plugins or property prefixes are loaded, and you must
 * either use the defaults exported by this library, or provide your own.
 *
 * @example ```ts
   import { plugins } from 'lw-css-autoprefixer';
   import { propertyPrefixes } from 'lw-css-autoprefixer';
   import { prefixer } from 'lw-css-autoprefixer';

   const pfx = prefixer(plugins, propertyPrefixes);

   // [['-webkit-align-content', 'inherit'], ['align-content', 'inherit']]
   const styles = pfx('align-content', 'inherit');

   // '-webkit-align-content:inherit;align-content:inherit;'
   const style = styles.map(([prop, val]) => `${prop}:${val};`).join('');
 ```
 * @param plugins - A set of plugin functions used to perform more complex
 * operations on a given CSS property and value.
 * @param propertyPrefixes - A static record of CSS properties mapped against
 * the vendor prefixes we should apply to the property.
 * @returns A function which accepts a CSS property and value, and returns the
 * set of vendor-prefixed CSS properties and values.
 */
export const prefixer = (
  plugins: Plugin[],
  propertyPrefixes: PropertyPrefixes,
) => (property: string, value: string): CSSDeclaration[] => {
  let toReturn: [string, string][] = [];

  if (propertyPrefixes[property]) {
    const prefixedNames = addVendorPrefixes(property, propertyPrefixes[property]);

    toReturn = toReturn.concat(
      prefixedNames.map(prefixedName => [prefixedName, value] as CSSDeclaration),
    );
  }

  for (const [pluginProperty, pluginValue] of toReturn.concat([[property, value]])) {
    for (const plugin of plugins) {
      toReturn = toReturn.concat(
        plugin(pluginProperty, pluginValue) || [],
      );
    }
  }

  /*
   * Always return the provided values last, as these are what we're treating
   * as the "canonical" values, and CSS declarations will be read first to
   * last.
   */
  toReturn.push([property, value]);

  return toReturn;
};
