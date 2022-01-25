import R from 'res/R';

export interface Action {
  login: (
    username: string,
    password: string,
    callback: (error?: string) => void,
  ) => void;
}

const login = (
  username: string,
  password: string,
  callback: (error?: string) => void,
): void => {
  let error: string | undefined;
  const hasEmptyField = username.length === 0 || password.length === 0;
  if (hasEmptyField) {
    error = R.strings.error.login.emptyField();
  } else if (username !== 'Admin' || password !== 'Password') {
    error = R.strings.error.login.notRegistered();
  }

  callback(error);
};

const action: Action = {
  login,
};

export default action;
