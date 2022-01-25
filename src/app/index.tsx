import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainStack from './navigators/main-stack';
import ContextContainer from 'context';

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <ContextContainer>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </ContextContainer>
    );
  }
}

export default App;
