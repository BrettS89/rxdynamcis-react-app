import React from 'react';
import { Input } from 'semantic-ui-react';

export default function login({ onLogin }) {
  return (
    <div className="login-container">
      <form className="login-form-container" onSubmit={onLogin}>
        <i className="fas fa-user-circle"></i>
        <div className="sign-in-container">
          <hr/>
          <div className="sign-in-text">Sign in</div>
          <hr/>
        </div>
        <div className="login-inputs">
          <Input style={{ marginBottom: 20 }} name="email" placeholder="Email address" />
          <Input name="password" placeholder="Password" />
        </div>

        <button className="login-button">
          Login
        </button>

      </form>
    </div>
  );
}
