import { Vendor } from '../Vendor';
import { makeFunctionPlugin } from '../util/makeFunctionPlugin';

export const crossFade = makeFunctionPlugin(
  Vendor.wk,
  /cross-fade\(/g,
  'cross-fade(',
);
