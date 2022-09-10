import { plugins } from '../src/plugins';
import { prefixer } from '../src/prefixer';
import { propertyPrefixes } from '../src/propertyPrefixes';

describe('prefixer.all', () => {
  const pfx = prefixer(plugins, propertyPrefixes);

  it('Prefixes align-content:*', () => {
    expect(pfx('align-content', 'inherit')).toEqual([
      ['-webkit-align-content', 'inherit'],
      ['align-content', 'inherit'],
    ]);
  });

  // TODO: Populate all the test cases
});
