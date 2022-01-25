import * as React from 'react';
import renderer from 'react-test-renderer';
import CardAssessment from 'components/card-assessment';
import R from 'res/R';

const description = '<CardAssessment />';

test(`should render ${description} correctly if has points value`, (): void => {
  const component = renderer
    .create(
      <CardAssessment
        assessment={{
          title: 'Advance Health Screening',
          points: 99999,
          icon: R.raw.assessment,
        }}
      />,
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});

test(`should render ${description} correctly if has no points value`, (): void => {
  const component = renderer
    .create(
      <CardAssessment
        assessment={{
          title: 'Advance Health Screening',
          points: 0,
          icon: R.raw.assessment,
        }}
      />,
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
