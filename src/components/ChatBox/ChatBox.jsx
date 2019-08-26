import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { func } from 'prop-types';

const useStyles = makeStyles(() => ({
  box: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minWidth: 300,
    marginBottom: 10,
    alignSelf: 'end',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const ChatBox = (props) => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const enableToSubmit = message.length;
  return (
    <Paper className={classes.box}>
      <InputBase
        className={classes.input}
        placeholder="Write a message"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        onClick={() => {
          props.onSendMessage(message);
          setMessage('');
        }}
        color="primary"
        aria-label="directions"
        disabled={!enableToSubmit}
      >
        <Icon>send</Icon>
      </IconButton>
    </Paper>
  );
};
ChatBox.propTypes = {
  onSendMessage: func.isRequired,
};
export default ChatBox;
