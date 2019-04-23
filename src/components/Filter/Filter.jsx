import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FilterItem from './FilterItem';
import './Filter.scss';

class Filter extends Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return(
      <div className="filter-container">
        <FilterItem />
        <FilterItem />
        <Button variant="outlined" color="primary" className={classes.button}>Пошук</Button>
      </div>
    )
  }
}
export default Filter;