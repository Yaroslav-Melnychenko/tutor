const LOGIN_SUCCESS = (userData) => {
  return {
    type: 'LOGIN_SUCCESS',
    userData
  }
}

export const logIn = (email, password) => {
  return (dispatch) => {
    dispatch(LOGIN_SUCCESS(email, password));
  }
}