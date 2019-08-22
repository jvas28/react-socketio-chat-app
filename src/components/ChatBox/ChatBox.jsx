import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { bottom } from '@material-ui/system';
import Container from '@material-ui/core/Container';

const styles = {
  root: {
    position: 'absolute',
    bottom: 0
  },
  box: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minWidth: 300
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
};
export default class ChatBox extends Component {
  render() {
    return (
      <Container style={styles.root}>
        <Paper style={styles.box}>
          <InputBase
            style={styles.input}
            placeholder="Write a message"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Divider style={styles.divider} orientation="vertical" />
          <IconButton color="primary" aria-label="directions">
            <Icon>send</Icon>
          </IconButton>
        </Paper>
      </Container>
    );
  }
}
