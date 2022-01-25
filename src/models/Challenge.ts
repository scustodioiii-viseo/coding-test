import {ImageSourcePropType} from 'react-native';

interface Challenge {
  title: string;
  points: number;
  icon: ImageSourcePropType;
  timeRemainingInDays?: number;
}

export default Challenge;
