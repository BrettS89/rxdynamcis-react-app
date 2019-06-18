import React from 'react';
import { Modal } from 'semantic-ui-react';

export default function completeModal(props) {
  return (
    <Modal open={props.completeModal} className="action-modal">
      <Modal.Content className="action-modal-container">
        <div>
          <div className="modal-title">
            Confirm the completion of this transfer
          </div>
          <div className="modal-buttons">
            <div 
              className="transfer-card-button" 
              style={{ backgroundColor: '#f0f0f0', color: "#212121", marginRight: 10 }}
              onClick={() => props.toggleCompleteModal(null)}
            >
              Go back
            </div>
            <div className="transfer-card-button" onClick={props.complete}>Confirm</div>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}
