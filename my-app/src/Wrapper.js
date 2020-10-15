import React from 'react';
import CustomInput from './HelloWorld';

class Wrapper extends React.Component{
  state = {
    testArray: ['Datsenko', 'Andrey']
  };

  handleChange(arr) {
    this.setState({testArray: arr});
  }

  render (){
    return (
      <React.Fragment>
        <p>{JSON.stringify(this.state.testArray)}</p>
        <CustomInput data={this.state.testArray}  onChange={this.handleChange.bind(this)} />
      </React.Fragment>
    );
  }
}

export default Wrapper;
