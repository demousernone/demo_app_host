//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Message from './Message';
//import Message1 from './Message1';

class App extends React.Component<any> {
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>My react app</h1>
          <Message  />
        </header>
      </div>
    );
  }
}

export default App;
