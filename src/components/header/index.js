import React from 'react';
import HeaderView from './view';
import './index.css';

class Header extends React.Component {

  render() {
    return (
      <HeaderView
        screen={this.props.state.screen}
      />
    );
  }
}

export default Header;
