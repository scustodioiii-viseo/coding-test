import Assessment from 'models/Assessment';
import React from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import R from 'res/R';
import styles from './styles';
import assessmentActions from 'actions/assessments';
import CardAssessment from 'components/card-assessment';

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
    return <CardAssessment assessment={item} />;
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
