import { makeFunctionPlugin } from '../util/makeFunctionPlugin';
import { Vendor } from '../Vendor';

export const imageSet = makeFunctionPlugin(
  Vendor.wk,
  /image-set\(/g,
  'image-set(',
);
