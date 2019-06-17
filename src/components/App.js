import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Provider } from 'react-redux';
import store from '../redux';
import Navigation from '../navigation';

class App extends React.Component {
  render() {
    return (
      <Provider store={store()}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
