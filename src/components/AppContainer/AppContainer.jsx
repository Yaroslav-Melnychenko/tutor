import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TutorList from '../TutorsList/TutorsList';
import Filter from '../Filter';

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

class AppContainer extends Component {
  render() {
    const { classes } = this.props;
    return(
      <>
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
      </>
    )
  }
}
export default withStyles(styles)(AppContainer);