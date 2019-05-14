const authReducer = (state = [], action) => {
  console.log('call from reducer: ', action);
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loginError: {
          mail: null,
          password: null,
          message: null
        },
        // actionType: action.type.userData
        userData: action.userData
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        // actionType: action.type,
        loginError: action.loginErrors
      }
    default:
      return state;
  }
}

export default authReducer;