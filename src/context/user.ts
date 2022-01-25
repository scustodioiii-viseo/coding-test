import {Action} from 'actions/user';
import User from 'models/User';
import React from 'react';

export type State = User & Action;

const defaultState: State = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  getUserLoggedInState: () => {},
};

export default React.createContext<State>(defaultState);
