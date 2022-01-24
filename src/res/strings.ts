const strings = {
  empty: '',
  appName: (): string => 'Coding Test',
  common: {
    close: (): string => 'Close',
    ok: (): string => 'Ok',
  },
  login: {
    buttonTitle: (): string => 'LOGIN',
    username: {
      title: (): string => 'Username:',
      hint: (): string => 'Enter your username...',
    },
    password: {
      title: (): string => 'Password:',
      hint: (): string => 'Enter your password...',
    },
  },
  error: {
    title: (): string => 'Error',
    login: {
      emptyField: (): string => 'Please enter your username and password.',
      notRegistered: (): string =>
        'Sorry. The username you entered is currently not registered.',
    },
  },
};

export default strings;
