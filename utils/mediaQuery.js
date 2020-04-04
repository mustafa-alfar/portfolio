const breakpoints = [576, 768, 992, 1250, 1400, 1600, 1900, 2450];
const mediaQuery = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

export { mediaQuery };
