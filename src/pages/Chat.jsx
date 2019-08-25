import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import io from 'socket.io-client';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import actions from '../redux/actions';
import ChatBox from '../components/ChatBox/ChatBox';
import MessageList from '../components/MessageList/MessageList';

let socket = null;
const useStyles = makeStyles(() => ({
  root: {
    bottom: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column-reverse'
  }
}));
const Chat = () => {
  const isAuthenticated = useSelector(({ auth }) => auth.authenticated);
  const user = useSelector(({ auth }) => auth.user);
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const classes = useStyles();
  const sendMessage = (message) => {
    socket.emit('message', { author: user, message });
    dispatch(actions.addMessage(user, message));
  };
  useEffect(() => {
    if (!socket) {
      socket = io('https://demo-chat-server.on.ag/');
      socket.on('message', ({ author, message }) => {
        dispatch(actions.addMessage(author, message));
      });
      socket.on('command', ({ author, command }) => {
        dispatch(actions.addCommand(author, command));
      });
      setInterval(() => {
        socket.emit('command', {});
      }, 40 * 1000);
    }
  });
  return (
    <Container className={classes.root}>
      {!isAuthenticated && <Redirect to="/login" />}
      <ChatBox onSendMessage={sendMessage} />
      <MessageList messages={messages} user={user} />
    </Container>
  );
};

Chat.propTypes = {};

export default Chat;
