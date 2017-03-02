import React from 'react';
import './Moo.scss';

class Moo extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      moo: 'cow'
    };
  }

  render () {
    return (
      <div className="component_moo">
        {this.state.moo}
      </div>
    );
  }
}

export default Moo;
