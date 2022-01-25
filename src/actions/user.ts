import User from 'models/User';
import R from 'res/R';
import alert from 'util/alert';
import storage from 'util/storage';
import * as RootNavigation from 'app/RootNavigation';

export interface Action {
  login: (username: string, password: string, callback: () => void) => void;
  logout: () => void;
  getUserLoggedInState: (callback: (isLoggedIn: boolean) => void) => void;
}

const login = (
  username: string,
  password: string,
  callback: () => void,
): void => {
  let error: string | undefined;
  const hasEmptyField = username.length === 0 || password.length === 0;
  if (hasEmptyField) {
    error = R.strings.error.login.emptyField();
  } else if (username !== 'Admin' || password !== 'Password') {
    error = R.strings.error.login.notRegistered();
  }

  if (error) {
    alert.showErrorMessage(error);
  } else {
    callback();
    storage.saveObject<User>(storage.keys.user, {isLoggedIn: true});
  }
};

const logout = (): void => {
  storage.deleteObject(storage.keys.user);
  RootNavigation.logout();
};

const getUserLoggedInState = (
  callback: (isLoggedIn: boolean) => void,
): void => {
  storage.getObjectFor<User>(storage.keys.user).then(user => {
    const isLoggedIn = user !== null ? user?.isLoggedIn : false;
    callback(isLoggedIn);
  });
};

const action: Action = {
  login,
  logout,
  getUserLoggedInState,
};

export default action;
