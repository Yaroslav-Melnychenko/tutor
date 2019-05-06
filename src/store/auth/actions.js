const LOGIN_SUCCESS = () => {
  return {
    type: 'LOGIN_SUCCESS'
  }
}

export const logIn = () => {
  return (dispatch) => {
    dispatch(LOGIN_SUCCESS);
  }
}