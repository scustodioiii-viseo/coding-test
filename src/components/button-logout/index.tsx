import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import R from 'res/R';
import UserContext from 'context/user';
import styles from './styles';
import alert from 'util/alert';

class ButtonLogout extends React.Component {
  static contextType = UserContext;

  private onPressLogout = (): void => {
    alert.showOkCancel(
      R.strings.logout.message(),
      this.context.logout,
      true,
      undefined,
      R.strings.empty,
      R.strings.logout.title(),
    );
  };

  public render(): React.ReactNode {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPressLogout}>
        <Image source={R.images.iconLogout} />
      </TouchableOpacity>
    );
  }
}

export default ButtonLogout;
