import { withStyles } from '@material-ui/core/styles';
import Filter from './Filter';

const styles = theme => ({
  button: {
    margin: 0,
  },
  input: {
    display: 'none',
  },
});

export default withStyles(styles)(Filter);