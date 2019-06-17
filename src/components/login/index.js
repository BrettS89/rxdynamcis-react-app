import React from 'react';
import './index.css';
import LoginView from './view';

class Login extends React.Component {
  componentDidMount() {
    this.props.actions.onLogout()
  }
  
  onLogin = e => {
    e.preventDefault();
    this.props.actions.login({
      form: {
        email: e.target.email.value,
        password: e.target.password.value,
      },
      navigate: this.navigateToDashboard,
    });
  };

  navigateToDashboard = () => {
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <LoginView
        onLogin={this.onLogin}
      />
    );
  }
}

export default Login;
