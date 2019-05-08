const LOGIN_SUCCESS = (email, password) => {
  return {
    type: 'LOGIN_SUCCESS',
    email: email,
    password: password
  }
}

export const logIn = (email, password) => {
  return (dispatch) => {
    dispatch(LOGIN_SUCCESS(email, password));
  }
}