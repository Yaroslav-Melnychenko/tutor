import React, { Component } from 'react';
import Header from './components/Header/Header';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TutorList from './components/TutorsList/TutorsList';
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
            <Grid item xs={4}>
              <Paper className={classes.paper}>Filter</Paper>
            </Grid>
            <Grid item xs={8}>
              <TutorList />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
