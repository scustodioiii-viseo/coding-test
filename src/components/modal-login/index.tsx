import ButtonRounded from 'components/button-rounded';
import LabeledTextInput from 'components/labeled-text-input';
import React from 'react';
import {Modal, View} from 'react-native';
import R from 'res/R';
import styles from './styles';

type Props = DefaultProps & {
  onPressLogin: (username: string, password: string) => void;
  onPressClose: () => void;
};

interface DefaultProps {
  visible: boolean;
}

interface State {
  username: string;
  password: string;
}

class ModalLogin extends React.Component<Props, State> {
  public static defaultProps: DefaultProps = {
    visible: true,
  };

  public constructor(props: Props) {
    super(props);

    this.state = {
      username: R.strings.empty,
      password: R.strings.empty,
    };
  }

  private onChangeTextUsername = (username: string): void =>
    this.setState({
      username,
    });

  private onChangeTextPassword = (password: string): void =>
    this.setState({
      password,
    });

  private onPressLogin = (): void => {
    const {username, password} = this.state;
    const {onPressLogin} = this.props;
    onPressLogin(username, password);
  };

  public render(): React.ReactNode {
    const {visible, onPressClose} = this.props;
    return (
      <Modal
        visible={visible}
        animationType="slide"
        animated
        transparent
        hardwareAccelerated>
        <View style={styles.container}>
          <View style={styles.content}>
            <ButtonRounded
              style={styles.close}
              title={R.strings.common.close()}
              onPress={onPressClose}
            />
            <LabeledTextInput
              style={styles.input}
              onChangeText={this.onChangeTextUsername}
              label={R.strings.login.username.title()}
              placeholder={R.strings.login.username.hint()}
              maxLength={50}
            />
            <LabeledTextInput
              style={styles.input}
              onChangeText={this.onChangeTextPassword}
              label={R.strings.login.password.title()}
              placeholder={R.strings.login.password.hint()}
              secureTextEntry
            />
            <ButtonRounded
              style={styles.login}
              title={R.strings.login.buttonTitle()}
              onPress={this.onPressLogin}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalLogin;
