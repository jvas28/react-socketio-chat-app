import React from 'react';
import './App.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Login, Chat } from './pages';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import teal from '@material-ui/core/colors/teal';
const theme = createMuiTheme({
  palette: { type: 'dark', primary: teal }
});

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(/res/img/bg-lights.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
}));
function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container component="main" className={classes.root}>
        <Router>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Switch location={location}>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/chat" component={Chat} />
                    <Route render={() => <Redirect to={'/login'} />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
