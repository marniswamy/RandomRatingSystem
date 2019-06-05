import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Class Page Component
 */
export class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyProp: props.dummyProp,
    };
  }

  render() {
    const { dummyProp } = this.state;
    return (
      <div>
        {dummyProp}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  dummyProp: PropTypes.string,
};

DashboardPage.defaultProps = {
  dummyProp: 'DashboardPage',
};
