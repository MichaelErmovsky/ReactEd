import React from 'react';
import CustomInput from './CustomInput';

class HelloWorld extends React.Component {

  state = {
    stringArray: ["string1", "string2"]
  }

  handleChange(newArr){
    this.setState({stringArray: newArr});
  }

  render() {
    return (
      <React.Fragment> 
        <p>{JSON.stringify(this.state)}</p>
        <CustomInput value={this.state.stringArray} onChange={this.handleChange.bind(this)}/>
      </React.Fragment>
    );
  }
}

export default HelloWorld;
