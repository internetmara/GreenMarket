import { connect } from 'react-redux';
import '../styling/reset.css';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.user,
    isAuthenticated: state.session.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
