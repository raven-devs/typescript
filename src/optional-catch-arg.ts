const input = '...';

try {
  JSON.parse(input);
} catch {
  // ^ Notice that our `catch` clause doesn't declare a variable.
  console.log('Invalid JSON given\n\n' + input);
}
