import React from 'react';
import { RX_BOTTLE } from '../../../assets';

export default function transferRequestCard({ tr, open, claim, toggleCompleteModal, toggleCancelModal, getRxDetails, rxDetails }) {
  const leftBorderColor = open ? '#f0f0f0' : '#bde6ee';
  const displayDate = () => {
    return new Date(tr.dateCreated)
      .toString()
      .split(' ')
      .slice(0, 5)
      .join(' ');
  };

  const displayCancelButton = () => {
    if (!open) {
      return (
        <div
          className="transfer-card-button"
          style={{ backgroundColor: '#f0f0f0', color: "#212121", marginRight: 10 }}
          onClick={() => toggleCancelModal(tr._id)}
        >
          Cancel
        </div>
      );
    }
  };

  const displayRxDetailsButton = () => {
    if (!open) {
      return (
        <div
          className="transfer-card-button"
          style={{ backgroundColor: '#f0f0f0', color: "#212121", marginRight: 10 }}
          onClick={() => getRxDetails(tr._id)}
        >
          Details
        </div>
      );
    }
  };

  const displayClaimOrComplete = () => {
    if (open) {
      return <div className="transfer-card-button" onClick={() => claim({ id: tr._id })}>Claim</div>;
    }
    return <div className="transfer-card-button" onClick={() => toggleCompleteModal(tr._id)}>Complete</div>;
  };

  const displayRxDetails = () => {
    if (!!rxDetails) {
      return (
        <React.Fragment>
          <div className="rx-details">
            <div className="transfer-card-title">Member details</div>
            <div className="transfer-card-value">
              {`${rxDetails.firstName} ${rxDetails.lastName}`}
            </div>
            <div className="transfer-card-value">
              {rxDetails.dob}
            </div>
            <div className="transfer-card-value">
              {rxDetails.address}
            </div>
            <div className="transfer-card-value">
              {rxDetails.phone}
            </div>
          </div>

          <div className="rx-details">
            <div className="transfer-card-title">Rx details</div>

            {rxDetails.drugs.map(d => <div className="transfer-card-value" key={d.drugName}>{`${d.drugName} ${d.drugStrength}`}</div>)}

          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <div
      className="transfer-request-card-container"
      style={{ borderLeft: `30px solid ${leftBorderColor}` }}
    >
      <div className="transfer-card-row">
        <div className="transfer-card-top-row">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={RX_BOTTLE} style={{ height: 23, marginRight: 7 }} />
            <div style={{ fontSize: 15 }}>{tr._id}</div>
          </div>
          <div>{displayDate()}</div>
        </div>

        <div className="transfer-pharmacy">
          <div className="transfer-card-title">Transfer from</div>
          <div className="transfer-card-value">
            {`${tr.transferFromPharmacy.name} ${tr.transferFromPharmacy.address}`}
          </div>
          <div className="transfer-card-value">
            {tr.transferFromPharmacy.phoneNumber}
          </div>
          <div className="transfer-card-value">
            {`npi: ${tr.transferFromPharmacy.npi}`}
          </div>
        </div>

        <div className="transfer-pharmacy">
          <div className="transfer-card-title">Transfer to</div>
          <div className="transfer-card-value">
            {`${tr.transferToPharmacy.name} ${tr.transferToPharmacy.address}`}
          </div>
          <div className="transfer-card-value">
            {tr.transferToPharmacy.phoneNumber}
          </div>
          <div className="transfer-card-value">
            {`npi: ${tr.transferToPharmacy.npi}`}
          </div>
        </div>

        <div className="last-row">
          <div className="transfer-pharmacy">
          </div>

          <div className="transfer-card-buttons">
            {displayCancelButton()}
            {displayRxDetailsButton()}
            {displayClaimOrComplete()}
          </div>
        </div>
        
        {displayRxDetails()}

      </div>
    </div>
  );
}
