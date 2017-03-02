import * as React from 'react';
import './Moo.scss';

export interface MooProps { name: string; }

export class Moo extends React.Component<MooProps, undefined> {
  render () {
    return (
      <div className="component_moo">
        {this.props.name}
      </div>
    );
  }
}

export default Moo;
