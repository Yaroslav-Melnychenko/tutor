import React, { Component } from 'react';
import Header from './components/Header/Header';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TutorList from './components/TutorsList/TutorsList';
import Filter from './components/Filter';
import './App.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Header />
        <div 
          className={classes.root} 
          style={{ 
            maxWidth: '1180px',
            margin: '35px auto'
          }}
        >
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Filter />
            </Grid>
            <Grid item xs={9}>
              <TutorList />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
