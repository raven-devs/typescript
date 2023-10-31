interface OptionsWithDataProps extends Options {
  // Permit any property starting with 'data-'.
  [optName: `data-${string}`]: unknown;
}

let b: OptionsWithDataProps = {
  width: 100,
  height: 100,
  'data-blah': true,
  'unknown-property': true,
};
