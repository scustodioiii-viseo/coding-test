import R from 'res/R';
import Challenge from 'models/Challenge';

export interface Action {
  getChallenges: (onSuccess: (challenges: Challenge[]) => void) => void;
}

const getChallenges = (onSuccess: (challenges: Challenge[]) => void): void => {
  // static data for assessments
  onSuccess([
    {
      title: 'Say No To Sugar',
      points: 1000,
      icon: R.raw.challenge,
      timeRemainingInDays: 6,
    },
    {
      title: '5km Challenge',
      points: 500,
      icon: R.raw.challenge2,
    },
    {
      title: '10km Challenge',
      points: 750,
      icon: R.raw.challenge2,
    },
    {
      title: '20km Challenge',
      points: 1000,
      icon: R.raw.challenge2,
      timeRemainingInDays: 8,
    },
  ]);
};

const action: Action = {
  getChallenges,
};

export default action;
