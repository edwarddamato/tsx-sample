import * as React from 'react';
import { Moo } from '../Moo';
import './App.scss';

export class App extends React.Component<undefined, undefined> {
  render () {
    return (
      <div className="root_container">
        <Moo name="Foo" />
      </div>
    );
  }
}

export default App;
