import { connect } from 'react-redux';
// import { logIn } from '../../store/auth/actions';
import LoginPage from './LoginPage';

const mapStateToProps = () => {
  return {
    userData: {email: '', password: ''}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logInSuccess: (userData) => dispatch({
      type: 'LOGIN_SUCCESS',
      userData
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);