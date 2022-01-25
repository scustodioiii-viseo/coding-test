import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from 'screens/login';
import HomeScreen from 'screens/home';
import {ParamListBase} from '@react-navigation/native';
import ButtonLogout from 'components/button-logout';

export interface RootStackParamList extends ParamListBase {
  Login: undefined;
  Home: undefined;
}

const Stack = createNativeStackNavigator();

class MainStack extends React.Component {
  public render(): React.ReactNode {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => <ButtonLogout />,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainStack;
