import React from 'react';
import UserContext, {State as UserState} from './user';
import userActions from 'actions/user';

type Props = {};

type State = UserState;

class Container extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      ...userActions,
      isLoggedIn: false,
      login: this.login,
    };
  }

  public componentDidMount(): void {
    userActions.getUserLoggedInState(isLoggedIn => {
      this.setState({isLoggedIn});
    });
  }

  private login = (
    username: string,
    password: string,
    callback: () => void,
  ): void =>
    userActions.login(username, password, (): void => {
      this.setState({isLoggedIn: true}, callback);
    });

  public render(): React.ReactNode {
    const {children} = this.props;
    return (
      <UserContext.Provider value={this.state}>{children}</UserContext.Provider>
    );
  }
}

export default Container;
