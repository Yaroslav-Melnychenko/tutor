import { connect } from 'react-redux';
import EditProfilePage from './EditProfilePage';
import { updateUserRequest } from '../../store/updateTutor/actions';

const mapStateToProps = ({ login }) => {
  const { userData } = login;
  console.log(login)
  return {
    userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserStore: (userData, id) => { dispatch(updateUserRequest(userData, id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);