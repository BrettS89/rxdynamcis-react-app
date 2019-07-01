import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'semantic-ui-react';
import './index.css';

class ErrorModal extends React.Component {
  render() {
    console.log(this.props.state.isError);
    return (
      <Modal className="action-modal" open={this.props.state.isError}>
        <Modal.Content className="action-modal-container">
          <div className="modal-title" style={{ textAlign: 'center' }}>
            An error occured
            <br/>
            Please login again and retry
          </div>

          <div className="modal-buttons">
            {/* <div 
              className="transfer-card-button" 
              style={{ backgroundColor: '#f0f0f0', color: "#212121", marginRight: 10 }}
            >
              Go back
            </div> */}
            <Link to="/login" className="transfer-card-button">Okay</Link>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ErrorModal;
