import * as React from 'react';
import { IUser } from '../../api/github/interfaces.d';
import './Moo.scss';

export interface IMooProps { user: IUser; }
export interface IMooState { user: IUser; }

export class Moo extends React.Component<IMooProps, IMooState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
      user: this.props.user,
    };
  }

  render () {
    return (
      <div className="component_moo">
        <div>Name: {this.state.user.Name}</div>
        <div>Location: {this.state.user.Location}</div>
        <div>Bio: {this.state.user.Bio}</div>
      </div>
    );
  }
}

export default Moo;
