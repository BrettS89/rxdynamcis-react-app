import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/login';
import * as authActions from '../redux/actions/auth';
import * as appActions from '../redux/actions/app';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...authActions,
    ...appActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Login);
