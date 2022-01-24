import ButtonRounded from 'components/button-rounded';
import ModalLogin from 'components/modal-login';
import ScreenBase from 'components/screen-base';
import React from 'react';
import {Image, View} from 'react-native';
import R from 'res/R';
import styles from './styles';
import UserContext from 'app/context/user';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'app/navigators/main-stack';
import {StackActions} from '@react-navigation/native';
import alert from 'util/alert';

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
interface Props {
  navigation: ScreenNavigationProp;
}

interface State {
  isModalVisible: boolean;
}

class LoginScreen extends React.Component<Props, State> {
  static contextType = UserContext;

  public constructor(props: Props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  private toggleModalVisibility = (): void =>
    this.setState(prevState => ({isModalVisible: !prevState.isModalVisible}));

  private onPressLogin = (username: string, password: string): void => {
    let error: string | undefined;
    const hasEmptyField = username.length === 0 || password.length === 0;
    if (hasEmptyField) {
      error = R.strings.error.login.emptyField();
    } else if (username !== 'Admin' || password !== 'Password') {
      error = R.strings.error.login.notRegistered();
    }

    if (error) {
      alert.showErrorMessage(error);
    } else {
      this.toggleModalVisibility();
      this.context.setIsLoggedIn(true);

      const {navigation} = this.props;
      navigation.dispatch(StackActions.replace('Home'));
    }
  };

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
          onPressLogin={this.onPressLogin}
        />
      </ScreenBase>
    );
  }
}

export default LoginScreen;
