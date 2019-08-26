import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { arrayOf, shape, string } from 'prop-types';
import Widget from '../Widget/Widget';

const useStyles = makeStyles(() => ({
  list: {
    width: '100%',
    maxHeight: 'calc(100vh - 60px)',
    overflowY: 'scroll',
  },
  item: {
    borderRadius: '10px',
    margin: '10px 0',
  },
  mine: {
    background: '#00ecb15c',
  },
}));
const MessageItem = (props) => {
  const { user, author, message, itemClass } = props;
  return (
    <ListItem key={user + message} className={itemClass.join(' ')}>
      <ListItemAvatar>
        <Avatar>{author[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={author} secondary={message} />
    </ListItem>
  );
};

MessageItem.propTypes = {
  user: string.isRequired,
  author: string.isRequired,
  message: string.isRequired,
  itemClass: string.isRequired,
};

const MessageList = (props) => {
  const { messages, user } = props;
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {messages.map(({ type, data }) => {
        if (type === 'message') {
          const { author, message } = data;
          const itemClass = [classes.item];
          if (author === user) {
            itemClass.push(classes.mine);
          }
          return (
            <MessageItem user={user} author={author} message={message} itemClass={itemClass} />
          );
        }
        if (type === 'command') {
          const {
            author,
            command: { type: WidgetType, data: widgetData },
          } = data;
          return <Widget type={WidgetType} data={widgetData} author={author} />;
        }
        return null;
      })}
    </List>
  );
};

MessageList.propTypes = {
  messages: arrayOf(
    shape({
      type: string,
      data: shape({
        author: string,
        message: string,
      }),
    }),
  ).isRequired,
  user: string.isRequired,
};

export default MessageList;
