import { connect } from 'react-redux';
import EditProfilePage from './EditProfilePage';

const mapStateToProps = ({ login }) => {
  const { userData } = login;
  return {
    userData
  }
}

export default connect(mapStateToProps)(EditProfilePage);