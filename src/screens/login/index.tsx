import ButtonRounded from 'components/button-rounded';
import ModalLogin from 'components/modal-login';
import ScreenBase from 'components/screen-base';
import React from 'react';
import {Image, View} from 'react-native';
import R from 'res/R';
import styles from './styles';
import UserContext from 'context/user';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'app/navigators/main-stack';
import {StackActions} from '@react-navigation/native';

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;
interface Props {
  navigation: ScreenNavigationProp;
}

interface State {
  isModalVisible: boolean;
  isLoginVisible: boolean;
}

class LoginScreen extends React.Component<Props, State> {
  static contextType = UserContext;

  public constructor(props: Props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isLoginVisible: false,
    };
  }

  public UNSAFE_componentWillReceiveProps = (_: Props, context: any): void => {
    if (context.isLoggedIn) {
      this.navigateToHome();
    } else if (!this.context.isLoggedIn) {
      this.setState({isLoginVisible: true});
    }
  };

  private toggleModalVisibility = (): void =>
    this.setState(prevState => ({isModalVisible: !prevState.isModalVisible}));

  private onPressLogin = (username: string, password: string): void =>
    this.context.login(username, password, (error?: string): void => {
      if (!error) {
        this.toggleModalVisibility();
      }
    });

  private navigateToHome = (): void => {
    const {navigation} = this.props;
    navigation.dispatch(StackActions.replace('Home'));
  };

  public render(): React.ReactNode {
    const {isModalVisible, isLoginVisible} = this.state;
    return (
      <ScreenBase>
        <View style={styles.container}>
          <Image style={styles.logo} source={R.raw.logo} resizeMode="contain" />
          {isLoginVisible && (
            <ButtonRounded
              style={styles.login}
              title={R.strings.login.buttonTitle()}
              onPress={this.toggleModalVisibility}
            />
          )}
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
