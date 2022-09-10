import { makeFunctionPlugin } from '../util/makeFunctionPlugin';
import { Vendor } from '../Vendor';

export const filter = makeFunctionPlugin(
  Vendor.wk,
  /filter\(/g,
  'filter(',
);
