import React from 'react';
import Login from './login';

class LoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return <Login props={this.props} />;
  }
}
export default LoginContainer;
