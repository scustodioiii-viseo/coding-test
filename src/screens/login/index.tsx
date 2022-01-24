import ButtonRounded from 'components/button-rounded';
import ModalLogin from 'components/modal-login';
import ScreenBase from 'components/screen-base';
import React from 'react';
import {Image, View} from 'react-native';
import R from 'res/R';
import styles from './styles';

type Props = {};
interface State {
  isModalVisible: boolean;
}

class LoginScreen extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  private toggleModalVisibility = (): void =>
    this.setState(prevState => ({isModalVisible: !prevState.isModalVisible}));

  public render(): React.ReactNode {
    const {isModalVisible} = this.state;
    return (
      <ScreenBase>
        <View style={styles.container}>
          <Image style={styles.logo} source={R.raw.logo} resizeMode="contain" />
          <ButtonRounded
            style={styles.login}
            title={R.strings.login.buttonTitle()}
            onPress={this.toggleModalVisibility}
          />
        </View>
        <ModalLogin
          visible={isModalVisible}
          onPressClose={this.toggleModalVisibility}
        />
      </ScreenBase>
    );
  }
}

export default LoginScreen;
