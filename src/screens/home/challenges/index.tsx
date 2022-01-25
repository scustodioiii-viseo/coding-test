import Challenge from 'models/Challenge';
import React from 'react';
import {FlatList, Image, ListRenderItemInfo, Text, View} from 'react-native';
import R from 'res/R';
import styles from './styles';
import challengesActions from 'actions/challenges';

type Props = {};

interface State {
  challenges: Challenge[];
}

class Challenges extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      challenges: [],
    };
  }

  public componentDidMount(): void {
    challengesActions.getChallenges(challenges => this.setState({challenges}));
  }

  private renderItem = (
    info: ListRenderItemInfo<Challenge>,
  ): React.ReactElement => {
    const {item} = info;
    return (
      <View style={styles.card}>
        <Image style={styles.icon} source={item.icon} resizeMode="cover" />
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{item.title}</Text>
          {item.timeRemainingInDays && (
            <Text
              style={
                styles.infoTimeRemaining
              }>{`${item.timeRemainingInDays} days left`}</Text>
          )}
        </View>
        <View style={styles.infoPointsContainer}>
          <Text
            style={
              styles.infoPoints
            }>{`Earn up to ${item.points} points`}</Text>
          <Image style={styles.arrow} source={R.images.iconArrowRight} />
        </View>
      </View>
    );
  };

  public render(): React.ReactNode {
    const {challenges} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{R.strings.challenges.title()}</Text>
        <FlatList
          data={challenges}
          renderItem={this.renderItem}
          keyExtractor={(item: Challenge, index): string =>
            `${index}_${item.title}`
          }
          horizontal
        />
      </View>
    );
  }
}

export default Challenges;
