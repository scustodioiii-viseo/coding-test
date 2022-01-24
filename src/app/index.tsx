import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './navigators/main-stack';

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}

export default App;
