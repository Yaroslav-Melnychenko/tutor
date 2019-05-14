import axios from 'axios';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export const setCurrentUser = (tutor) => {
  return {
    type: 'LOGIN_SUCCESS',
    userData: tutor
  }
}

export const userLoginRequest = (userData) => {
  return dispatch => {
    return axios.post('http://localhost:4000/login', userData)
      .then(response => {

        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);

        dispatch(setCurrentUser(jwt.decode(token)._doc))

        // dispatch({
        //   type: 'LOGIN_SUCCESS',
        //   userData: jwt.decode(token)._doc
        // });

      }).catch( ({ response }) => {

        dispatch({
          type: 'LOGIN_FAILED',
          loginErrors: response.data
        })

      });
  }
}