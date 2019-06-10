import * as React from 'react';
import { RootComponent } from '../RootComponent';
import { shallow } from 'enzyme';

describe('RootComponent', () => {
  it('should render component', () => {
    const MountedRootComponent = shallow(
      <RootComponent />,
    );
    const expected = MountedRootComponent.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
