import axios from 'axios';
import { dataBaseUrl } from '../../api/constants';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

const updateCurrentUser = (tutor) => {
  return {
    type: 'TUTOR_UPDATE',
      userData: tutor
  }
}

export const updateUserRequest = (userData, id) => {
  return dispatch => {
    return axios.put(dataBaseUrl + '/tutors/' + id, userData).then(responce => {

      const token = responce.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      
      dispatch(updateCurrentUser(jwt.decode(token)._doc));
    })
  }
}

// export const updateUser = (tutor) => {
//   return dispatch => {
//     dispatch(updateCurrentUser(tutor));
//   }
// }