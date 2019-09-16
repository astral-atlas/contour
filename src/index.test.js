// @flow strict
const { expect, assert } = require('@lukekaalim/test');
const { sessionModel } = require('..');

const expectIndex = expect(() => {
  const session = sessionModel.from({ id: '123-456', title: 'ExampleSession', startTime: 1234 });
  if (session.type === 'failure')
    return assert('Didnt successfully return a session when provided valid session object', false);
  return assert('Should export a sessionModel', true);
});

module.exports = {
  expectIndex,
};