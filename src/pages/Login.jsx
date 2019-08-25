import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ForumIcon from '@material-ui/icons/Forum';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { green } from '@material-ui/core/colors';
import actions from '../redux/actions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href="https://github.com/jvas28">Julio Vasconez</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
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
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  }
}));
const Login = () => {
  const isAuthenticated = useSelector(({ auth }) => auth.authenticated);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const performLogin = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(actions.authenticate(username, password));
    }, 1000);
  };
  const isEnabledToSubmit = username.length > 0 && password.length > 0 && !loading;
  return (
    <Paper className={classes.box}>
      <Grid container className={classes.header}>
        <ForumIcon className={classes.icon} />
        <Typography variant="h4" className={classes.title} color="textSecondary" gutterBottom>
          {"Let's chat!"}
        </Typography>
      </Grid>
      {isAuthenticated && <Redirect to="/chat" />}
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
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
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
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          id="password"
          autoComplete="new-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <div className={classes.wrapper}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={performLogin}
            disabled={!isEnabledToSubmit}
            color="primary"
            className={classes.buttonClassname}
          >
            Sign In
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>

        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </Paper>
  );
};

export default Login;
