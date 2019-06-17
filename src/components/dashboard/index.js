import React from 'react';
import io from 'socket.io-client';
import { URI } from '../../config';
import DashboardView from './view';
import TransferRequestCard from './sub-components/transferRequestCard';
import './index.css';

class Dashboard extends React.Component {
  state = {
    socket: io.connect(URI),
  }

  componentDidMount() {
    this.props.actions.getOpenTransferRequests();
    this.props.actions.getMyTransferRequests();
    this.initSocket();
  }

  async componentWillUnmount() {
    this.state.socket.disconnect();
  }

  initSocket = () => { 
    this.state.socket.on('openTransferRequests', (data) => {
      this.props.actions.setOpenTransferRequests(data);
    });
  };

  displayOpenTransferRequests = () => {
    return this.props.state.openTransferRequests.map(t => {
      return <TransferRequestCard 
                open 
                tr={t}
                key={t._id} 
                claim={this.props.actions.claimTransferRequest}
              />
    });
  };

  displayMyTransferRequests = () => {
    return this.props.state.myTransferRequests.map(t => {
      return <TransferRequestCard
                claimed tr={t}
                key={t._id} 
                cancel={this.props.actions.cancelTransferRequest}
                complete={this.props.actions.completeTransferRequest}
              />
    });
  };

  render() {
    return (
      <DashboardView
        displayOpenTransferRequests={this.displayOpenTransferRequests}
        displayMyTransferRequests={this.displayMyTransferRequests}
      />
    );
  }
}

export default Dashboard;
