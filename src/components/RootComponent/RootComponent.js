import * as React from "react";
import * as PropTypes from "prop-types";

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Class Component
 */
export class RootComponent extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

RootComponent.propTypes = {
  dummyProp: PropTypes.string
};

RootComponent.defaultProps = {
  dummyProp: "RootComponent"
};
