import { connect } from 'react-redux';
// import { fetchCurrencies, fetchCurrenciesByDate } from 'Store/currencies/actions';
import { logIn } from '../../store/auth/actions';
import LoginPage from './LoginPage';

// const mapStateToProps = () => {
//   return {
//     p: [1, 2, 3]
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logIn())
    // fetchData: () => dispatch(fetchCurrencies()),
    // fetchDataByDate: (date) => dispatch(fetchCurrenciesByDate(date))
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);