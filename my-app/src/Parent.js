import React from "react";

class Example extends React.Component {
  state = {
    text: '',
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.text !== prevState.text) {
      return {
        text: newProps.text
      }
    }
    return null;
  }



  render() {
    const text = this.state.text;

    return (
      <div>
        {text}
      </div>
    );

  }
}

export default Example;
