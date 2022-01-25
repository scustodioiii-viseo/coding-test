import User from 'models/User';
import React from 'react';
import storage from 'util/storage';
import UserContext, {State as UserState} from './user';
import userActions from 'actions/user';
import alert from 'util/alert';

type Props = {};

type State = UserState;

class Container extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      login: this.login,
    };
  }

  public componentDidMount(): void {
    storage.getObjectFor<User>(storage.keys.user).then(user => {
      const isLoggedIn = user !== null ? user?.isLoggedIn : false;
      this.setState({isLoggedIn});
    });
  }

  private login = (
    username: string,
    password: string,
    callback: (error?: string) => void,
  ): void =>
    userActions.login(username, password, (error?: string): void => {
      if (error) {
        alert.showErrorMessage(error);
      } else {
        callback();
        const userState = {isLoggedIn: true};
        this.setState(userState);
        storage.saveObject<User>(storage.keys.user, userState);
      }
    });

  public render(): React.ReactNode {
    const {children} = this.props;
    return (
      <UserContext.Provider value={this.state}>{children}</UserContext.Provider>
    );
  }
}

export default Container;
