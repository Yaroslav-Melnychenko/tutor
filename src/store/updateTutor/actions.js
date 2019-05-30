export const updateUser = (tutor) => {
  return dispatch => {
    dispatch({
      type: 'TUTOR_UPDATE',
      userData: tutor
    });
  }
}