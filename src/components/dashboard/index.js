import React from 'react';
import io from 'socket.io-client';
import { URI } from '../../config';
import DashboardView from './view';
import TransferRequestCard from './sub-components/transferRequestCard';
import './index.css';

class Dashboard extends React.Component {
  state = {
    socket: io.connect(URI),
    openCompleteModal: false,
    openCancelModal: false,
    transferId: null,
  };

  componentDidMount() {
    this.props.actions.setScreen('dashboard');
    this.props.actions.getOpenTransferRequests();
    this.props.actions.getMyTransferRequests();
    this.initSocket();
  }

  componentWillUnmount() {
    this.state.socket.disconnect();
    this.props.actions.setRxDetails(null);
  }

  initSocket = () => { 
    this.state.socket.on('openTransferRequests', (data) => {
      this.props.actions.setOpenTransferRequests(data);
    });
  };

  displayOpenTransferRequests = () => {
    return this.props.state.openTransferRequests.map(t => {
      return (
        <TransferRequestCard 
          open 
          tr={t}
          key={t._id}
          claim={this.props.actions.claimTransferRequest}
        />
      );
    });
  };

  displayMyTransferRequests = () => {
    return this.props.state.myTransferRequests.map(t => {
      return (
        <TransferRequestCard
          claimed
          tr={t}
          key={t._id}
          rxDetails={this.props.state.rxDetails}
          getRxDetails={this.props.actions.getRxDetails}
          cancel={this.props.actions.cancelTransferRequest}
          complete={this.props.actions.completeTransferRequest}
          toggleCompleteModal={this.toggleCompleteModal}
          toggleCancelModal={this.toggleCancelModal}
        />
      );
    });
  };

  toggleCompleteModal = transferId => {
    this.setState({
      openCompleteModal: !this.state.openCompleteModal,
      transferId,
     });
  };

  toggleCancelModal = transferId => {
    this.setState({
      openCancelModal: !this.state.openCancelModal,
      transferId,
     });
  };

  complete = () => {
    this.props.actions.completeTransferRequest({ id: this.state.transferId });
    this.setState({ transferId: null, openCompleteModal: false });
    this.props.actions.setRxDetails(null);
  };

  cancel = () => {
    this.props.actions.cancelTransferRequest({ id: this.state.transferId });
    this.setState({ transferId: null, openCancelModal: false });
    this.props.actions.setRxDetails(null);
  };

  render() {
    return (
      <DashboardView
        displayOpenTransferRequests={this.displayOpenTransferRequests}
        displayMyTransferRequests={this.displayMyTransferRequests}
        completeModal={this.state.openCompleteModal}
        cancelModal={this.state.openCancelModal}
        complete={this.complete}
        cancel={this.cancel}
        toggleCompleteModal={this.toggleCompleteModal}
        toggleCancelModal={this.toggleCancelModal}
        transferId={this.state.transferId}
      />
    );
  }
}

export default Dashboard;
