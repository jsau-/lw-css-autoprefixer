import { alignItems } from './plugin/alignItems';
import { backgroundClip } from './plugin/backgroundClip';
import { border } from './plugin/border';
import { calc } from './plugin/calc';
import { crossFade } from './plugin/crossFade';
import { cursor } from './plugin/cursor';
import { display } from './plugin/display';
import { filter } from './plugin/filter';
import { flexBasis } from './plugin/flexBasis';
import { flexDirection } from './plugin/flexDirection';
import { flexFlow } from './plugin/flexFlow';
import { flexGrowShrink } from './plugin/flexGrowShrink';
import { gradient } from './plugin/gradient';
import { imageSet } from './plugin/imageSet';
import { margin } from './plugin/margin';
import { padding } from './plugin/padding';
import { position } from './plugin/position';
import { size } from './plugin/size';

/**
 * The set of all plugins this library offers, used to perform more complex
 * modifications on properties and values, e.g. needing to assign entirely new
 * properties for compatibility.
 */
export const plugins = [
  alignItems,
  backgroundClip,
  border,
  calc,
  crossFade,
  cursor,
  display,
  filter,
  flexBasis,
  flexDirection,
  flexGrowShrink,
  flexFlow,
  gradient,
  imageSet,
  margin,
  padding,
  position,
  size,
];
