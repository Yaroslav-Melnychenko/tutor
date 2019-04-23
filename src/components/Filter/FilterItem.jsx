import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FilterItem = (props) => {
  return(
    <div className="filter-item">
      <div className="title">Предмет</div>
      <FormControlLabel
        className="label"
        control={
          <Checkbox
            // checked={this.state.checkedA}
            // onChange={this.handleChange('checkedA')}
            value="checkedB"
            color="primary"
          />
        }
        label="Математика"
      />
      <FormControlLabel
        className="label"
        control={
          <Checkbox
            // checked={this.state.checkedB}
            // onChange={this.handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
        label="Фізика"
      />
      <FormControlLabel
        className="label"
        control={
          <Checkbox
            // checked={this.state.checkedС}
            // onChange={this.handleChange('checkedС')}
            value="checkedС"
            color="primary"
          />
        }
         label="Геометрія"
      />
    </div>
  );
}
export default FilterItem;