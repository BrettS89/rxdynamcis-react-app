import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from '../components/dashboard';
import * as appActions from '../redux/actions/app';
import * as transferRequestActions from '../redux/actions/transferRequests';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...transferRequestActions,
    ...appActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

function mapStateToProps({ transferRequests }) {
  return {
    state: {
      openTransferRequests: transferRequests.openTransferRequests,
      myTransferRequests: transferRequests.myTransferRequests,
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
