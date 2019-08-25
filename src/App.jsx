import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import teal from '@material-ui/core/colors/teal';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Login, Chat } from './pages';
import './App.scss';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal
  }
});

const useStyles = makeStyles(() => ({
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
        <Provider store={store}>
          <Router>
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Switch location={location}>
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/chat" component={Chat} />
                      <Route render={() => <Redirect to="/login" />} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </Router>
        </Provider>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
