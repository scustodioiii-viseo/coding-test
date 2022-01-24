const strings = {
  empty: '',
  common: {
    close: (): string => 'Close',
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
};

export default strings;
