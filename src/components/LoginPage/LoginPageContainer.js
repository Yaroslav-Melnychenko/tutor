import { connect } from 'react-redux';
import { userLoginRequest } from '../../store/login/actions';
import LoginPage from './LoginPage';

const mapStateToProps = () => {
  return {
    userData: {mail: '', password: ''}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (data) => dispatch(userLoginRequest(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);