// @flow strict
const { expectAll, emojiReporter } = require('@lukekaalim/test');
const { expectIndex } = require('./src/index.test');

const test = async () => {
  const expectation = expectAll('@astral-atlas/contour should provide a set of models for use in Astral Atlas', [
    expectIndex
  ]);
  const assertion = await expectation.test();
  console.log(emojiReporter(assertion));
  process.exitCode = assertion.validatesExpectation ? 0 : 1;
};

if (require.main === module) {
  test();
}