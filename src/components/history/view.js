import React from 'react';
import { Input } from 'semantic-ui-react';

export default function transferRequestHistoryView(props) {
  return (
    <div>
      <div className="filter-container">
        <Input placeholder="Member phone number" onChange={props.onTextChange} />
        <div className="filter-button" onClick={props.filterHistory}>Search</div>
      </div>
      {props.renderHistory()}
    </div>
  );
}
