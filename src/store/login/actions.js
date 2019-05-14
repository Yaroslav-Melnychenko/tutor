import axios from 'axios';

export const userLoginRequest = (userData) => {
  return dispatch => {
    return axios.post('http://localhost:4000/login', userData)
      .then(response => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          userData: response.data
        });
      }).catch( ({ response }) => {
        dispatch({
          type: 'LOGIN_FAILED',
          loginErrors: response.data
        })
      });
  }
}