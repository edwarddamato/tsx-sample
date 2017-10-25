import * as React from 'react';
import { IUser } from '../../api/github/interfaces.d';
import { Github } from '../../api/github/index';
import { Moo } from '../Moo';
import './App.scss';

interface IAppState {
  readonly user?: IUser
}

export class App extends React.Component<null, IAppState> {
  constructor (props: undefined) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  private async getUser () {
    const user = await Github.GetUser('edwarddamato');
    this.setState({ user });
  }

  componentDidMount () {
    this.getUser();
  }

  render () {
    return (
      <div className="root_container">
        <h1>Let's get a Github user</h1>
        {
          this.state.user
          ? <Moo user={this.state.user} />
          : null
        }
      </div>
    );
  }
}

export default App;
