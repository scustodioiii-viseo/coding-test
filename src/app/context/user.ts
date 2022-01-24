import React from 'react';

export interface State {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const defaultState: State = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export default React.createContext<State>(defaultState);
