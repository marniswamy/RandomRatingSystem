import * as React from 'react';
import { DashboardPage } from '../DashboardPage';
import { shallow } from 'enzyme';

describe('DashboardPage', () => {
  it('should render component', () => {
    const MountedDashboardPage = shallow(<DashboardPage />);
    const expected = MountedDashboardPage.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
