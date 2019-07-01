import React from 'react';

export default function historyCard({ tr }) {
  const displayPrescriptions = () => {
    return tr.drugs.map(rx => <div>{rx}</div>);
  }

  return (
    <div>
      <div>{tr._id}</div>
      <div>{tr.dateCreated}</div>

      <div>Transfer from pharmacy</div>
      <div>{tr.transferFromPharmacy.name}</div>
      <div>{tr.transferFromPharmacy.address}</div>
      <div>npi: {tr.transferFromPharmacy.npi}</div>

      <div>Transfer to pharmacy</div>
      <div>{tr.transferToPharmacy.name}</div>
      <div>{tr.transferToPharmacy.address}</div>
      <div>npi: {tr.transferToPharmacy.npi}</div>

      <div>Prescriptions</div>
      <div>
        {displayPrescriptions()}
      </div>
      <div>Status: {tr.status}</div>
      <hr className="history-hr" />
    </div>
  );
}
