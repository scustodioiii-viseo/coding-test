import {Action} from 'actions/user';
import User from 'models/User';
import React from 'react';

export type State = User & Action;

const defaultState: State = {
  isLoggedIn: false,
  login: () => {},
};

export default React.createContext<State>(defaultState);
