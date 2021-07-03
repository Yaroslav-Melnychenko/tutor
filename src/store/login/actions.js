import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { dataBaseUrl } from '../../api/constants';

export const setCurrentUser = (tutor) => {
  return {
    type: 'LOGIN_SUCCESS',
    userData: tutor
  }
}

export const userLoginRequest = (userData) => {
  return dispatch => {
    return axios.post(dataBaseUrl + '/login', userData)
      .then(response => {

        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);

        dispatch(setCurrentUser(jwt.decode(token)._doc))

      }).catch( ({ response }) => {

        dispatch({
          type: 'LOGIN_FAILED',
          loginErrors: response.data
        })

      });
  }
}

export const logOutAction = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch({
      type: 'LOGOUT_SUCCESS',
      userData: null
    });
  }
}