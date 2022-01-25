import React from 'react';
import {Image, Text, View} from 'react-native';
import R from 'res/R';
import styles from './styles';
import Challenge from 'models/Challenge';

interface Props {
  challenge: Challenge;
}

class CardChallenge extends React.Component<Props> {
  public render(): React.ReactNode {
    const {challenge} = this.props;
    return (
      <View style={styles.card}>
        <Image style={styles.icon} source={challenge.icon} resizeMode="cover" />
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{challenge.title}</Text>
          {challenge.timeRemainingInDays && (
            <Text
              style={
                styles.infoTimeRemaining
              }>{`${challenge.timeRemainingInDays} days left`}</Text>
          )}
        </View>
        <View style={styles.infoPointsContainer}>
          <Text
            style={
              styles.infoPoints
            }>{`Earn up to ${challenge.points} points`}</Text>
          <Image style={styles.arrow} source={R.images.iconArrowRight} />
        </View>
      </View>
    );
  }
}

export default CardChallenge;
