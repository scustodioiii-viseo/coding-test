import ButtonRounded from 'components/button-rounded';
import ScreenBase from 'components/screen-base';
import React from 'react';
import {Image, View} from 'react-native';
import R from 'res/R';
import styles from './styles';

class LoginScreen extends React.Component {
  public render(): React.ReactNode {
    return (
      <ScreenBase>
        <View style={styles.container}>
          <Image style={styles.logo} source={R.raw.logo} resizeMode="contain" />
          <ButtonRounded
            style={styles.login}
            title={R.strings.login.buttonTitle()}
          />
        </View>
      </ScreenBase>
    );
  }
}

export default LoginScreen;
