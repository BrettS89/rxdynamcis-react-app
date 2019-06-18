import React from 'react';
import { connect } from 'react-redux';
import { Modal, Loader } from 'semantic-ui-react';
import './index.css';

class Spinner extends React.Component {
  render() {
    return (
      <Modal className="loading-modal" open={this.props.state.isLoading}>
        <Loader>Loading</Loader>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: {
      isLoading: state.app.isLoading,
    },
  };
}

export default connect(mapStateToProps)(Spinner);
