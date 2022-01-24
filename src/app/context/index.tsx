import React from 'react';
import UserContext, {State as UserState} from './user';

type Props = {};

type State = UserState;

class Container extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      setIsLoggedIn: this.setIsLoggedIn,
    };
  }

  private setIsLoggedIn = (isLoggedIn: boolean): void =>
    this.setState({isLoggedIn});

  public render(): React.ReactNode {
    const {children} = this.props;
    return (
      <UserContext.Provider value={this.state}>{children}</UserContext.Provider>
    );
  }
}

export default Container;
