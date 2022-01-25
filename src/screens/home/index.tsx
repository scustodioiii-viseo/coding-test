import ScreenBase from 'components/screen-base';
import React from 'react';
import {ScrollView} from 'react-native';
import Assessments from './assessments';
import styles from './styles';

class HomeScreen extends React.Component {
  public render(): React.ReactNode {
    return (
      <ScreenBase>
        <ScrollView style={styles.container}>
          <Assessments />
        </ScrollView>
      </ScreenBase>
    );
  }
}

export default HomeScreen;
