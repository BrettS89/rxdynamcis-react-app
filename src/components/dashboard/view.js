import React from 'react';
import CompleteModal from './sub-components/completeModal';
import CancelModal from './sub-components/cancelModal';

export default function dashboard(props) {
  return (
    <div className="dashboard-container">
      <div className="tr-container">
        <div className="tr-column">
          <div className="column-title">Open transfers</div>
          {props.displayOpenTransferRequests()}
        </div>
        <div className="tr-column">
          <div className="column-title">Claimed transfers</div>
          {props.displayMyTransferRequests()}
        </div>
      </div>
      <CompleteModal
        completeModal={props.completeModal}
        toggleCompleteModal={props.toggleCompleteModal}
        complete={props.complete}
      />
      <CancelModal
        cancelModal={props.cancelModal}
        toggleCancelModal={props.toggleCancelModal}
        cancel={props.cancel}
      />
    </div>
  );
}
