import ScreenBase from 'components/screen-base';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

class HomeScreen extends React.Component {
  public render(): React.ReactNode {
    return (
      <ScreenBase>
        <View style={styles.container} />
      </ScreenBase>
    );
  }
}

export default HomeScreen;
