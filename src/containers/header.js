import { connect } from 'react-redux';
import Header from '../components/header';

function mapStateToProps(state) {
  return {
    state: {
      screen: state.app.screen,
    },
  };
}

export default connect(mapStateToProps)(Header);
