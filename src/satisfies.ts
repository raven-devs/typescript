//  The `satisfies` operator lets us validate that the type of an expression matches some type, without changing the
// resulting type of that expression.

type Colors = 'red' | 'green' | 'blue';

// Ensure that we have exactly the keys from 'Colors'.
const favoriteColors = {
  red: 'yes',
  green: false,
  blue: 'kinda',
  platypus: false,
} satisfies Record<Colors, unknown>;

export {};
