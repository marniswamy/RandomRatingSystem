import * as React from 'react';
import { RootComponent } from '../RootComponent';
import { mount } from 'enzyme';

describe('RootComponent', () => {
  it('should render component', () => {
    const MountedRootComponent = mount(
      <RootComponent />,
    );
    const expected = MountedRootComponent.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
