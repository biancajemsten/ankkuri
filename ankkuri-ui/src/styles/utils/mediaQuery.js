import rem from "./rem";

export const breakpoint = {
  xSmall: 480,
  small: 768,
  medium: 1024,
  large: 1440,
  xLarge: 1600
};

// Extra-small
const xSmall = `(max-width: ${rem(breakpoint.xSmall)})`;

// Small
const small = `(min-width: ${rem(breakpoint.small)})`;

// Medium
const medium = `(min-width: ${rem(breakpoint.medium)})`;

// Large
const large = `(min-width: ${rem(breakpoint.large)})`;

// Extra-large
const xLarge = `(min-width: ${rem(breakpoint.xLarge)})`;

export default {
  xSmall,
  small,
  medium,
  large,
  xLarge
};
