import React from 'react';
import '../styles/App.scss';
import SharkTank from './components/SharkTank';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SharkTank />
      </div>
    );
  }
}

export default App;
