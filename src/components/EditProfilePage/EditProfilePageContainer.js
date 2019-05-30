import { connect } from 'react-redux';
import EditProfilePage from './EditProfilePage';
import { updateUser } from '../../store/updateTutor/actions';

const mapStateToProps = ({ login }) => {
  const { userData } = login;
  return {
    userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserStore: (userData) => { dispatch(updateUser(userData)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);