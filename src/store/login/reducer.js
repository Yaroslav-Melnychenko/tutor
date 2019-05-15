const authReducer = (state = [], action) => {
  // console.log('call from reducer: ', action);
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginError: {
          mail: null,
          password: null,
          message: null
        },
        userData: action.userData
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        loginError: action.loginErrors
      }
    case 'LOGOUT_SUCCESS': 
      return {
        ...state,
        userData: action.userData
      }
    default:
      return state;
  }
}

export default authReducer;