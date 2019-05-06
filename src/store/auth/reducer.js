const authReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return state;
    default:
      return state;
  }
}

export default authReducer;