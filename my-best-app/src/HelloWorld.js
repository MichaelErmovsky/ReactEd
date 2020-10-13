import React from 'react';

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       name: props.name 
    };
  }

  render() {
    return <span>{this.state.name}</span>
  }
}

export default HelloWorld;
