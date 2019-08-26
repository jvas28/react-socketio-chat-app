const actionCreatorFactory = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};
const authenticate = actionCreatorFactory('AUTHENTICATE', 'username', 'password');
const addMessage = actionCreatorFactory('ADD_MESSAGE', 'author', 'message');
const addCommand = actionCreatorFactory('ADD_COMMAND', 'author', 'command');

export default {
  authenticate,
  addMessage,
  addCommand,
};
