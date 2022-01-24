import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from 'screens/login';

const Stack = createNativeStackNavigator();

class MainStack extends React.Component {
  public render(): React.ReactNode {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }
}

export default MainStack;
