import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransferRequestHistory from '../components/history';
import * as transferRequestActions from '../redux/actions/transferRequests';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...transferRequestActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    state: {
      history: state.transferRequests.history,
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransferRequestHistory);
