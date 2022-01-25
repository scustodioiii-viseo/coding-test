import R from 'res/R';
import Assessment from 'models/Assessment';

export interface Action {
  getAssessments: (onSuccess: (assessments: Assessment[]) => void) => void;
}

const getAssessments = (
  onSuccess: (assessments: Assessment[]) => void,
): void => {
  // static data for assessments
  onSuccess([
    {
      title: 'Advance Health Screening',
      points: 1000,
      icon: R.raw.assessment,
    },
    {
      title: 'Advance Health Screening',
      points: 700,
      icon: R.raw.assessment,
    },
    {
      title: 'Advance Health Screening',
      points: 500,
      icon: R.raw.assessment,
    },
  ]);
};

const action: Action = {
  getAssessments,
};

export default action;
