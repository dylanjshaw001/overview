import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  }

  render() {
    return this.state.hasError ? <h1>Something Went Wrong</h1> : <div>{this.props.children}</div>;
  }
}