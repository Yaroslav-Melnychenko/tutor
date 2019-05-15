import HeaderContainerWithStyles from './HeaderContainerWithStyles';
import { connect } from 'react-redux';
import { logOutAction } from '../../store/login/actions';

const mapStateToProps = (state) => {
  return {
    tutorInfo: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOutAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainerWithStyles);
