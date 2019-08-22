import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ForumIcon from '@material-ui/icons/Forum';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href="https://github.com/jvas28">Julio Vasconez</Link> {new Date().getFullYear()}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  box: {
    width: '90%',
    maxWidth: '500px',
    background: 'rgba(56, 56, 56, 0.72)',
    margin: '0 auto'
  },
  avatar: {
    width: '80px',
    height: '80px',
    margin: '10px auto',
    background: 'transparent'
  },
  icon: {
    fontSize: '3rem',
    color: 'white'
  },
  form: {
    padding: '0 10px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  title: {
    marginTop: '35px',
    fontWeight: 700,
    fontSize: 20,
    color: 'white'
  }
}));
const Login = props => {
  const classes = useStyles();
  const performLogin = () => {
    setTimeout(() => {
      props.history.push('/chat');
    }, 1000);
  };
  return (
    <Paper className={classes.box}>
      <Grid container className={classes.header}>
        <ForumIcon className={classes.icon} />
        <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
          Let's chat!
        </Typography>
      </Grid>

      <Divider />
      <div className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={performLogin}
        >
          Sign In
        </Button>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </Paper>
  );
};

Login.propTypes = {};

export default Login;
