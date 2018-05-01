import React, { Component } from 'react';

export const AppContext = React.createContext();

export default class NewContextTest extends Component {
  state = {
    valueTest: 0,
    dec: () => this.setState({ valueTest: this.state.valueTest - 1 }),
    inc: () => this.setState({ valueTest: this.state.valueTest + 1 })
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
