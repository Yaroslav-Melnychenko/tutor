import { connect } from 'react-redux';
import { logIn } from '../../store/auth/actions';
import LoginPage from './LoginPage';

const mapStateToProps = () => {
  return {
    email: '',
    password: ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (email, password) => dispatch(logIn(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);