import Assessment from 'models/Assessment';
import React from 'react';
import {FlatList, Image, ListRenderItemInfo, Text, View} from 'react-native';
import R from 'res/R';
import styles from './styles';
import assessmentActions from 'actions/assessments';

type Props = {};

interface State {
  assessments: Assessment[];
}

class Assessments extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      assessments: [],
    };
  }

  public componentDidMount(): void {
    assessmentActions.getAssessments(assessments =>
      this.setState({assessments}),
    );
  }

  private renderItem = (
    info: ListRenderItemInfo<Assessment>,
  ): React.ReactElement => {
    const {item} = info;
    return (
      <View style={styles.card}>
        <Image style={styles.icon} source={item.icon} resizeMode="cover" />
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>{item.title}</Text>
          <Text
            style={
              styles.infoPoints
            }>{`Earn up to ${item.points} points`}</Text>
        </View>
        <Image style={styles.arrow} source={R.images.iconArrowRight} />
      </View>
    );
  };

  public render(): React.ReactNode {
    const {assessments} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{R.strings.assessments.title()}</Text>
        <FlatList
          data={assessments}
          renderItem={this.renderItem}
          keyExtractor={(item: Assessment, index): string =>
            `${index}_${item.title}`
          }
          horizontal
        />
      </View>
    );
  }
}

export default Assessments;
