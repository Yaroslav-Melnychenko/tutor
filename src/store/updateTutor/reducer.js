const updateTutor = (state = [], action) => {
  switch (action.type) {
    case 'TUTOR_UPDATE': 
      return {
        ...state,
        userData: action.userData
      }
    default:
      return state;
  }
}
export default updateTutor;