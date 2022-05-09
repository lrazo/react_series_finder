import React, { Component } from 'react';
import Main from '../Main';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
          <Main />
        </header>
      </div>
    );
  }
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV Series List</h1>
        <Intro message="Here you can find all of your most loved series" />
        The length of series array - {this.state.series.length}
      </header>
    </div>
  );
}*/

export default App;
