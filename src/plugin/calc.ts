import { Vendor } from '../Vendor';
import { makeFunctionPlugin } from '../util/makeFunctionPlugin';

export const calc = makeFunctionPlugin(
  Vendor.moz_wk,
  /calc\(/g,
  'calc(',
);
