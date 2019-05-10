const authReducer = (state = [], action) => {
  console.log('call from reducer: ', action);
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        userData: action.type.userData
      }
    default:
      return state;
  }
}

export default authReducer;