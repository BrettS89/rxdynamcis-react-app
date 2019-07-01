import React from 'react';
import './index.css';
import TransferRequestHistoryView from './view';
import HistoryCard from './sub-components/historyCard';

class TransferRequestHistory extends React.Component {
  state = {
    phoneNumber: null,
  };

  componentDidMount() {
    const { getTransferRequestHistory } = this.props.actions;
    getTransferRequestHistory({ phoneNumber: null });
  }

  renderHistory = () => {
    return this.props.state.history.map(h => <HistoryCard key={h._id} tr={h} />);
  };

  onTextChange = async e => {
    await this.setState({ phoneNumber: e.target.value });
  };

  filterHistory = () => {
    this.props.actions.getTransferRequestHistory({ 
      phoneNumber: this.state.phoneNumber 
    });
    this.setState({ phoneNumber: null });
  };

  render() {
    return (
      <TransferRequestHistoryView
        renderHistory={this.renderHistory}
        filterHistory={this.filterHistory}
        onTextChange={this.onTextChange}
      />
    );
  }
}

export default TransferRequestHistory;
