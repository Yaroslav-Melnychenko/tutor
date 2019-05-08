const authReducer = (state = [], action) => {
  console.log('action', action);
  // console.log('state', state);
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        state,
        email: action.email,
        password: action.password
      }
    default:
      return state;
  }
}

export default authReducer;