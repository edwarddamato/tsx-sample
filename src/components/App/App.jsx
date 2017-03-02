import React from 'react';
import Moo from '../Moo';
import './App.scss';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="root_container">
        <Moo />
      </div>
    );
  }
}

export default App;
