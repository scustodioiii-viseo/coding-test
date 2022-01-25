import React from 'react';
import {Image, Text, View} from 'react-native';
import R from 'res/R';
import styles from './styles';
import Assessment from 'models/Assessment';

interface Props {
  assessment: Assessment;
}

class CardAssessment extends React.Component<Props> {
  public render(): React.ReactNode {
    const {assessment} = this.props;
    return (
      <View style={styles.card}>
        <Image
          style={styles.icon}
          source={assessment.icon}
          resizeMode="cover"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{assessment.title}</Text>
          {assessment.points > 0 && (
            <Text
              style={
                styles.infoPoints
              }>{`Earn up to ${assessment.points} points`}</Text>
          )}
        </View>
        <Image style={styles.arrow} source={R.images.iconArrowRight} />
      </View>
    );
  }
}

export default CardAssessment;
