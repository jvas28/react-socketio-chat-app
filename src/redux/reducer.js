const INITIAL_STATE = {
  auth: {
    authenticated: false,
    user: null
  },
  messages: []
};
const authenticate = (state = INITIAL_STATE, { username: user }) => {
  return { ...state, auth: { user, authenticated: true } };
};

const addMessage = (state = INITIAL_STATE, data) => {
  return { ...state, messages: [...state.messages, { type: 'message', data }] };
};
const addCommand = (state = INITIAL_STATE, data) => {
  return { ...state, messages: [...state.messages, { type: 'command', data }] };
};
const handlers = {
  AUTHENTICATE: authenticate,
  ADD_MESSAGE: addMessage,
  ADD_COMMAND: addCommand
};
const appReducer = (state = INITIAL_STATE, { type, ...rest }) => {
  const handler = handlers[type] || null;
  if (handler) {
    return handler(state, rest);
  }
  return state;
};
export default appReducer;
