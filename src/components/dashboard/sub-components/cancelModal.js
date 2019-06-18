import React from 'react';
import { Modal } from 'semantic-ui-react';

export default function cancelModal(props) {
  console.log(props.cancelModal);
  return (
    <Modal open={props.cancelModal} className="action-modal">
      <Modal.Content className="action-modal-container">
        <div>
          <div className="modal-title">
            Confirm the cancellation of this transfer
          </div>
          <div className="modal-buttons">
            <div 
              className="transfer-card-button" 
              style={{ backgroundColor: '#f0f0f0', color: "#212121", marginRight: 10 }}
              onClick={() => props.toggleCancelModal(null)}
            >
              Go back
            </div>
            <div className="transfer-card-button" onClick={props.cancel}>Confirm</div>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}
