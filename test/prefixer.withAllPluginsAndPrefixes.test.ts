import { plugins } from '../src/plugins';
import { CSSDeclaration, prefixer } from '../src/prefixer';
import { propertyPrefixes } from '../src/propertyPrefixes';

const testCases: [property: string, value: string, expect: CSSDeclaration[]][] = [
  ['align-content', 'inherit', [
    ['-webkit-align-content', 'inherit'],
    ['align-content', 'inherit'],
  ]],
  ['align-items', 'inherit', [
    ['-webkit-align-items', 'inherit'],
    ['align-items', 'inherit'],
  ]],
  ['align-self', 'inherit', [
    ['-webkit-align-self', 'inherit'],
    ['align-self', 'inherit'],
  ]],
  ['animation', 'inherit', [
    ['-moz-animation', 'inherit'],
    ['-webkit-animation', 'inherit'],
    ['animation', 'inherit'],
  ]],
  ['animation-delay', 'inherit', [
    ['-moz-animation-delay', 'inherit'],
    ['-webkit-animation-delay', 'inherit'],
    ['animation-delay', 'inherit'],
  ]],
  ['animation-direction', 'inherit', [
    ['-moz-animation-direction', 'inherit'],
    ['-webkit-animation-direction', 'inherit'],
    ['animation-direction', 'inherit'],
  ]],
  ['animation-duration', 'inherit', [
    ['-moz-animation-duration', 'inherit'],
    ['-webkit-animation-duration', 'inherit'],
    ['animation-duration', 'inherit'],
  ]],
  ['animation-fill-mode', 'inherit', [
    ['-moz-animation-fill-mode', 'inherit'],
    ['-webkit-animation-fill-mode', 'inherit'],
    ['animation-fill-mode', 'inherit'],
  ]],
  ['animation-iteration-count', 'inherit', [
    ['-moz-animation-iteration-count', 'inherit'],
    ['-webkit-animation-iteration-count', 'inherit'],
    ['animation-iteration-count', 'inherit'],
  ]],
  ['animation-name', 'inherit', [
    ['-moz-animation-name', 'inherit'],
    ['-webkit-animation-name', 'inherit'],
    ['animation-name', 'inherit'],
  ]],
  ['animation-play-state', 'inherit', [
    ['-moz-animation-play-state', 'inherit'],
    ['-webkit-animation-play-state', 'inherit'],
    ['animation-play-state', 'inherit'],
  ]],
  ['animation-timing-function', 'inherit', [
    ['-moz-animation-timing-function', 'inherit'],
    ['-webkit-animation-timing-function', 'inherit'],
    ['animation-timing-function', 'inherit'],
  ]],
  ['appearance', 'inherit', [
    ['-moz-appearance', 'inherit'],
    ['-ms-appearance', 'inherit'],
    ['-webkit-appearance', 'inherit'],
    ['appearance', 'inherit'],
  ]],
  ['backdrop-filter', 'inherit', [
    ['-webkit-backdrop-filter', 'inherit'],
    ['backdrop-filter', 'inherit'],
  ]],
  ['backface-visibility', 'inherit', [
    ['-moz-backface-visibility', 'inherit'],
    ['-webkit-backface-visibility', 'inherit'],
    ['backface-visibility', 'inherit'],
  ]],
  ['background-clip', 'inherit', [
    ['-moz-background-clip', 'inherit'],
    ['-webkit-background-clip', 'inherit'],
    ['background-clip', 'inherit'],
  ]],
  ['background-origin', 'inherit', [
    ['-moz-background-origin', 'inherit'],
    ['-webkit-background-origin', 'inherit'],
    ['background-origin', 'inherit'],
  ]],
  ['background-size', 'inherit', [
    ['-moz-background-size', 'inherit'],
    ['-webkit-background-size', 'inherit'],
    ['background-size', 'inherit'],
  ]],
  ['border-image', 'inherit', [
    ['-moz-border-image', 'inherit'],
    ['-webkit-border-image', 'inherit'],
    ['border-image', 'inherit'],
  ]],
  ['border-image-outset', 'inherit', [
    ['-moz-border-image-outset', 'inherit'],
    ['-webkit-border-image-outset', 'inherit'],
    ['border-image-outset', 'inherit'],
  ]],
  ['border-image-repeat', 'inherit', [
    ['-moz-border-image-repeat', 'inherit'],
    ['-webkit-border-image-repeat', 'inherit'],
    ['border-image-repeat', 'inherit'],
  ]],
  ['border-image-slice', 'inherit', [
    ['-moz-border-image-slice', 'inherit'],
    ['-webkit-border-image-slice', 'inherit'],
    ['border-image-slice', 'inherit'],
  ]],
  ['border-image-source', 'inherit', [
    ['-moz-border-image-source', 'inherit'],
    ['-webkit-border-image-source', 'inherit'],
    ['border-image-source', 'inherit'],
  ]],
  ['border-image-width', 'inherit', [
    ['-moz-border-image-width', 'inherit'],
    ['-webkit-border-image-width', 'inherit'],
    ['border-image-width', 'inherit'],
  ]],
  ['border-radius', 'inherit', [
    ['-moz-border-radius', 'inherit'],
    ['-webkit-border-radius', 'inherit'],
    ['border-radius', 'inherit'],
  ]],
  ['box-decoration-break', 'inherit', [
    ['-ms-box-decoration-break', 'inherit'],
    ['-webkit-box-decoration-break', 'inherit'],
    ['box-decoration-break', 'inherit'],
  ]],
  ['box-shadow', 'inherit', [
    ['-moz-box-shadow', 'inherit'],
    ['-webkit-box-shadow', 'inherit'],
    ['box-shadow', 'inherit'],
  ]],
  ['box-sizing', 'inherit', [
    ['-moz-box-sizing', 'inherit'],
    ['-webkit-box-sizing', 'inherit'],
    ['box-sizing', 'inherit'],
  ]],
  ['break-after', 'inherit', [
    ['-moz-break-after', 'inherit'],
    ['-ms-break-after', 'inherit'],
    ['-webkit-break-after', 'inherit'],
    ['break-after', 'inherit'],
  ]],
  ['break-before', 'inherit', [
    ['-moz-break-before', 'inherit'],
    ['-ms-break-before', 'inherit'],
    ['-webkit-break-before', 'inherit'],
    ['break-before', 'inherit'],
  ]],
  ['break-inside', 'inherit', [
    ['-moz-break-inside', 'inherit'],
    ['-ms-break-inside', 'inherit'],
    ['-webkit-break-inside', 'inherit'],
    ['break-inside', 'inherit'],
  ]],
  ['clip-path', 'inherit', [
    ['-webkit-clip-path', 'inherit'],
    ['clip-path', 'inherit'],
  ]],
  ['column-count', 'inherit', [
    ['-moz-column-count', 'inherit'],
    ['-webkit-column-count', 'inherit'],
    ['column-count', 'inherit'],
  ]],
  ['column-fill', 'inherit', [
    ['-moz-column-fill', 'inherit'],
    ['-webkit-column-fill', 'inherit'],
    ['column-fill', 'inherit'],
  ]],
  ['column-gap', 'inherit', [
    ['-moz-column-gap', 'inherit'],
    ['-webkit-column-gap', 'inherit'],
    ['column-gap', 'inherit'],
  ]],
  ['column-rule', 'inherit', [
    ['-moz-column-rule', 'inherit'],
    ['-webkit-column-rule', 'inherit'],
    ['column-rule', 'inherit'],
  ]],
  ['column-rule-color', 'inherit', [
    ['-moz-column-rule-color', 'inherit'],
    ['-webkit-column-rule-color', 'inherit'],
    ['column-rule-color', 'inherit'],
  ]],
  ['column-rule-style', 'inherit', [
    ['-moz-column-rule-style', 'inherit'],
    ['-webkit-column-rule-style', 'inherit'],
    ['column-rule-style', 'inherit'],
  ]],
  ['column-rule-width', 'inherit', [
    ['-moz-column-rule-width', 'inherit'],
    ['-webkit-column-rule-width', 'inherit'],
    ['column-rule-width', 'inherit'],
  ]],
  ['column-span', 'inherit', [
    ['-moz-column-span', 'inherit'],
    ['-webkit-column-span', 'inherit'],
    ['column-span', 'inherit'],
  ]],
  ['column-width', 'inherit', [
    ['-moz-column-width', 'inherit'],
    ['-webkit-column-width', 'inherit'],
    ['column-width', 'inherit'],
  ]],
  ['columns', 'inherit', [
    ['-moz-columns', 'inherit'],
    ['-webkit-columns', 'inherit'],
    ['columns', 'inherit'],
  ]],
  ['filter', 'inherit', [
    ['-webkit-filter', 'inherit'],
    ['filter', 'inherit'],
  ]],
  ['flex', 'inherit', [
    ['-moz-flex', 'inherit'],
    ['-ms-flex', 'inherit'],
    ['-webkit-flex', 'inherit'],
    ['flex', 'inherit'],
  ]],
  ['flex-basis', 'inherit', [
    ['-webkit-flex-basis', 'inherit'],
    ['flex-basis', 'inherit'],
  ]],
  ['flex-direction', 'inherit', [
    ['-ms-flex-direction', 'inherit'],
    ['-webkit-flex-direction', 'inherit'],
    ['flex-direction', 'inherit'],
  ]],
  ['flex-flow', 'inherit', [
    ['-moz-flex-flow', 'inherit'],
    ['-ms-flex-flow', 'inherit'],
    ['-webkit-flex-flow', 'inherit'],
    ['flex-flow', 'inherit'],
  ]],
  ['flex-grow', 'inherit', [
    ['-webkit-flex-grow', 'inherit'],
    ['flex-grow', 'inherit'],
  ]],
  ['flex-shrink', 'inherit', [
    ['-webkit-flex-shrink', 'inherit'],
    ['flex-shrink', 'inherit'],
  ]],
  ['flex-wrap', 'inherit', [
    ['-moz-flex-wrap', 'inherit'],
    ['-ms-flex-wrap', 'inherit'],
    ['-webkit-flex-wrap', 'inherit'],
    ['flex-wrap', 'inherit'],
  ]],
  ['flow-from', 'inherit', [
    ['-ms-flow-from', 'inherit'],
    ['-webkit-flow-from', 'inherit'],
    ['flow-from', 'inherit'],
  ]],
  ['flow-into', 'inherit', [
    ['-ms-flow-into', 'inherit'],
    ['-webkit-flow-into', 'inherit'],
    ['flow-into', 'inherit'],
  ]],
  ['font-feature-settings', 'inherit', [
    ['-moz-font-feature-settings', 'inherit'],
    ['-webkit-font-feature-settings', 'inherit'],
    ['font-feature-settings', 'inherit'],
  ]],
  ['font-kerning', 'inherit', [
    ['-webkit-font-kerning', 'inherit'],
    ['font-kerning', 'inherit'],
  ]],
  ['hyphens', 'inherit', [
    ['-moz-hyphens', 'inherit'],
    ['-ms-hyphens', 'inherit'],
    ['-webkit-hyphens', 'inherit'],
    ['hyphens', 'inherit'],
  ]],
  ['justify-content', 'inherit', [
    ['-webkit-justify-content', 'inherit'],
    ['justify-content', 'inherit'],
  ]],
  ['mask', 'inherit', [
    ['-ms-mask', 'inherit'],
    ['-webkit-mask', 'inherit'],
    ['mask', 'inherit'],
  ]],
  ['mask-border', 'inherit', [
    ['-ms-mask-border', 'inherit'],
    ['-webkit-mask-border', 'inherit'],
    ['mask-border', 'inherit'],
  ]],
  ['mask-border-mode', 'inherit', [
    ['-ms-mask-border-mode', 'inherit'],
    ['-webkit-mask-border-mode', 'inherit'],
    ['mask-border-mode', 'inherit'],
  ]],
  ['mask-border-outset', 'inherit', [
    ['-ms-mask-border-outset', 'inherit'],
    ['-webkit-mask-border-outset', 'inherit'],
    ['mask-border-outset', 'inherit'],
  ]],
  ['mask-border-repeat', 'inherit', [
    ['-ms-mask-border-repeat', 'inherit'],
    ['-webkit-mask-border-repeat', 'inherit'],
    ['mask-border-repeat', 'inherit'],
  ]],
  ['mask-border-slice', 'inherit', [
    ['-ms-mask-border-slice', 'inherit'],
    ['-webkit-mask-border-slice', 'inherit'],
    ['mask-border-slice', 'inherit'],
  ]],
  ['mask-border-source', 'inherit', [
    ['-ms-mask-border-source', 'inherit'],
    ['-webkit-mask-border-source', 'inherit'],
    ['mask-border-source', 'inherit'],
  ]],
  ['mask-border-width', 'inherit', [
    ['-ms-mask-border-width', 'inherit'],
    ['-webkit-mask-border-width', 'inherit'],
    ['mask-border-width', 'inherit'],
  ]],
  ['mask-clip', 'inherit', [
    ['-ms-mask-clip', 'inherit'],
    ['-webkit-mask-clip', 'inherit'],
    ['mask-clip', 'inherit'],
  ]],
  ['mask-composite', 'inherit', [
    ['-ms-mask-composite', 'inherit'],
    ['-webkit-mask-composite', 'inherit'],
    ['mask-composite', 'inherit'],
  ]],
  ['mask-image', 'inherit', [
    ['-ms-mask-image', 'inherit'],
    ['-webkit-mask-image', 'inherit'],
    ['mask-image', 'inherit'],
  ]],
  ['mask-mode', 'inherit', [
    ['-ms-mask-mode', 'inherit'],
    ['-webkit-mask-mode', 'inherit'],
    ['mask-mode', 'inherit'],
  ]],
  ['mask-origin', 'inherit', [
    ['-ms-mask-origin', 'inherit'],
    ['-webkit-mask-origin', 'inherit'],
    ['mask-origin', 'inherit'],
  ]],
  ['mask-position', 'inherit', [
    ['-ms-mask-position', 'inherit'],
    ['-webkit-mask-position', 'inherit'],
    ['mask-position', 'inherit'],
  ]],
  ['mask-repeat', 'inherit', [
    ['-ms-mask-repeat', 'inherit'],
    ['-webkit-mask-repeat', 'inherit'],
    ['mask-repeat', 'inherit'],
  ]],
  ['mask-size', 'inherit', [
    ['-ms-mask-size', 'inherit'],
    ['-webkit-mask-size', 'inherit'],
    ['mask-size', 'inherit'],
  ]],
  ['mask-type', 'inherit', [
    ['-ms-mask-type', 'inherit'],
    ['-webkit-mask-type', 'inherit'],
    ['mask-type', 'inherit'],
  ]],
  ['object-fit', 'inherit', [
    ['-webkit-object-fit', 'inherit'],
    ['object-fit', 'inherit'],
  ]],
  ['object-position', 'inherit', [
    ['-webkit-object-position', 'inherit'],
    ['object-position', 'inherit'],
  ]],
  ['order', 'inherit', [
    ['-webkit-order', 'inherit'],
    ['order', 'inherit'],
  ]],
  ['perspective', 'inherit', [
    ['-moz-perspective', 'inherit'],
    ['-webkit-perspective', 'inherit'],
    ['perspective', 'inherit'],
  ]],
  ['perspective-origin', 'inherit', [
    ['-moz-perspective-origin', 'inherit'],
    ['-webkit-perspective-origin', 'inherit'],
    ['perspective-origin', 'inherit'],
  ]],
  ['region-fragment', 'inherit', [
    ['-ms-region-fragment', 'inherit'],
    ['-webkit-region-fragment', 'inherit'],
    ['region-fragment', 'inherit'],
  ]],
  ['resize', 'inherit', [
    ['-moz-resize', 'inherit'],
    ['resize', 'inherit'],
  ]],
  ['scroll-snap-coordinate', 'inherit', [
    ['-ms-scroll-snap-coordinate', 'inherit'],
    ['-webkit-scroll-snap-coordinate', 'inherit'],
    ['scroll-snap-coordinate', 'inherit'],
  ]],
  ['scroll-snap-destination', 'inherit', [
    ['-ms-scroll-snap-destination', 'inherit'],
    ['-webkit-scroll-snap-destination', 'inherit'],
    ['scroll-snap-destination', 'inherit'],
  ]],
  ['scroll-snap-points-x', 'inherit', [
    ['-ms-scroll-snap-points-x', 'inherit'],
    ['-webkit-scroll-snap-points-x', 'inherit'],
    ['scroll-snap-points-x', 'inherit'],
  ]],
  ['scroll-snap-points-y', 'inherit', [
    ['-ms-scroll-snap-points-y', 'inherit'],
    ['-webkit-scroll-snap-points-y', 'inherit'],
    ['scroll-snap-points-y', 'inherit'],
  ]],
  ['scroll-snap-type', 'inherit', [
    ['-ms-scroll-snap-type', 'inherit'],
    ['-webkit-scroll-snap-type', 'inherit'],
    ['scroll-snap-type', 'inherit'],
  ]],
  ['shape-image-margin', 'inherit', [
    ['-webkit-shape-image-margin', 'inherit'],
    ['shape-image-margin', 'inherit'],
  ]],
  ['shape-image-outside', 'inherit', [
    ['-webkit-shape-image-outside', 'inherit'],
    ['shape-image-outside', 'inherit'],
  ]],
  ['shape-image-threshold', 'inherit', [
    ['-webkit-shape-image-threshold', 'inherit'],
    ['shape-image-threshold', 'inherit'],
  ]],
  ['tab-size', 'inherit', [
    ['-moz-tab-size', 'inherit'],
    ['-webkit-tab-size', 'inherit'],
    ['tab-size', 'inherit'],
  ]],
  ['text-align-last', 'inherit', [
    ['-moz-text-align-last', 'inherit'],
    ['text-align-last', 'inherit'],
  ]],
  ['text-decoration-color', 'inherit', [
    ['-moz-text-decoration-color', 'inherit'],
    ['-webkit-text-decoration-color', 'inherit'],
    ['text-decoration-color', 'inherit'],
  ]],
  ['text-decoration-line', 'inherit', [
    ['-moz-text-decoration-line', 'inherit'],
    ['-webkit-text-decoration-line', 'inherit'],
    ['text-decoration-line', 'inherit'],
  ]],
  ['text-decoration-skip', 'inherit', [
    ['-moz-text-decoration-skip', 'inherit'],
    ['-webkit-text-decoration-skip', 'inherit'],
    ['text-decoration-skip', 'inherit'],
  ]],
  ['text-decoration-style', 'inherit', [
    ['-moz-text-decoration-style', 'inherit'],
    ['-webkit-text-decoration-style', 'inherit'],
    ['text-decoration-style', 'inherit'],
  ]],
  ['text-emphasis', 'inherit', [
    ['-ms-text-emphasis', 'inherit'],
    ['-webkit-text-emphasis', 'inherit'],
    ['text-emphasis', 'inherit'],
  ]],
  ['text-emphasis-color', 'inherit', [
    ['-ms-text-emphasis-color', 'inherit'],
    ['-webkit-text-emphasis-color', 'inherit'],
    ['text-emphasis-color', 'inherit'],
  ]],
  ['text-emphasis-position', 'inherit', [
    ['-ms-text-emphasis-position', 'inherit'],
    ['-webkit-text-emphasis-position', 'inherit'],
    ['text-emphasis-position', 'inherit'],
  ]],
  ['text-emphasis-style', 'inherit', [
    ['-ms-text-emphasis-style', 'inherit'],
    ['-webkit-text-emphasis-style', 'inherit'],
    ['text-emphasis-style', 'inherit'],
  ]],
  ['text-orientation', 'inherit', [
    ['-webkit-text-orientation', 'inherit'],
    ['text-orientation', 'inherit'],
  ]],
  ['text-overflow', 'inherit', [
    ['-webkit-text-overflow', 'inherit'],
    ['text-overflow', 'inherit'],
  ]],
  ['text-size-adjust', 'inherit', [
    ['-ms-text-size-adjust', 'inherit'],
    ['-webkit-text-size-adjust', 'inherit'],
    ['text-size-adjust', 'inherit'],
  ]],
  ['touch-action', 'inherit', [
    ['-ms-touch-action', 'inherit'],
    ['touch-action', 'inherit'],
  ]],
  ['transform', 'inherit', [
    ['-moz-transform', 'inherit'],
    ['-ms-transform', 'inherit'],
    ['-webkit-transform', 'inherit'],
    ['transform', 'inherit'],
  ]],
  ['transform-origin', 'inherit', [
    ['-moz-transform-origin', 'inherit'],
    ['-ms-transform-origin', 'inherit'],
    ['-webkit-transform-origin', 'inherit'],
    ['transform-origin', 'inherit'],
  ]],
  ['transform-origin-x', 'inherit', [
    ['-moz-transform-origin-x', 'inherit'],
    ['-ms-transform-origin-x', 'inherit'],
    ['-webkit-transform-origin-x', 'inherit'],
    ['transform-origin-x', 'inherit'],
  ]],
  ['transform-origin-y', 'inherit', [
    ['-moz-transform-origin-y', 'inherit'],
    ['-ms-transform-origin-y', 'inherit'],
    ['-webkit-transform-origin-y', 'inherit'],
    ['transform-origin-y', 'inherit'],
  ]],
  ['transform-origin-z', 'inherit', [
    ['-moz-transform-origin-z', 'inherit'],
    ['-webkit-transform-origin-z', 'inherit'],
    ['transform-origin-z', 'inherit'],
  ]],
  ['transform-style', 'inherit', [
    ['-moz-transform-style', 'inherit'],
    ['-webkit-transform-style', 'inherit'],
    ['transform-style', 'inherit'],
  ]],
  ['transition-delay', 'inherit', [
    ['-moz-transition-delay', 'inherit'],
    ['-webkit-transition-delay', 'inherit'],
    ['transition-delay', 'inherit'],
  ]],
  ['transition-duration', 'inherit', [
    ['-moz-transition-duration', 'inherit'],
    ['-webkit-transition-duration', 'inherit'],
    ['transition-duration', 'inherit'],
  ]],
  ['transition-property', 'inherit', [
    ['-moz-transition-property', 'inherit'],
    ['-webkit-transition-property', 'inherit'],
    ['transition-property', 'inherit'],
  ]],
  ['transition-timing-function', 'inherit', [
    ['-moz-transition-timing-function', 'inherit'],
    ['-webkit-transition-timing-function', 'inherit'],
    ['transition-timing-function', 'inherit'],
  ]],
  ['user-select', 'inherit', [
    ['-moz-user-select', 'inherit'],
    ['-ms-user-select', 'inherit'],
    ['-webkit-user-select', 'inherit'],
    ['user-select', 'inherit'],
  ]],
  ['wrap-flow', 'inherit', [
    ['-ms-wrap-flow', 'inherit'],
    ['wrap-flow', 'inherit'],
  ]],
  ['wrap-margin', 'inherit', [
    ['-ms-wrap-margin', 'inherit'],
    ['wrap-margin', 'inherit'],
  ]],
  ['wrap-through', 'inherit', [
    ['-ms-wrap-through', 'inherit'],
    ['wrap-through', 'inherit'],
  ]],
  ['writing-mode', 'inherit', [
    ['-webkit-writing-mode', 'inherit'],
    ['writing-mode', 'inherit'],
  ]],
];

describe('prefixer.withAllPluginsAndPrefixes', () => {
  const pfx = prefixer(plugins, propertyPrefixes);

  test.each(testCases)(
    'Asserting \'%s:%s\' output equals %j (at index %#)',
    (property, value, expectation) => {
      expect(pfx(property, value)).toEqual(expectation);
    }
  );
});