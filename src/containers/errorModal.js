import { connect } from 'react-redux';
import ErrorModal from '../components/errorModal';

function mapStateToProps(props) {
  return {
    state: {
      isError: props.app.isError,
    },
  };
}

export default connect(mapStateToProps)(ErrorModal);
