import React from 'react';

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
          {/* <TransferRequestCard claimed /> */}
        </div>
      </div>
    </div>
  );
}
